/**
 * PeerCite Publishers - In Press Page Renderer
 */

document.addEventListener("DOMContentLoaded", function () {

    const inpressList = document.getElementById("inpress-list");

    const loadPage = () => {
        if (!window.INPRESS_DATA) {
            console.log("⏳ Waiting for data...");
            setTimeout(loadPage, 100);
            return;
        }

        const articles = window.INPRESS_DATA;

        if (!articles || articles.length === 0) {
            inpressList.innerHTML = `
                <div class="no-articles">
                    <i class='bx bx-file-blank'></i>
                    <h3>No articles in press</h3>
                    <p>There are currently no articles waiting for publication.</p>
                </div>
            `;
            return;
        }

        let html = '';

        articles.forEach(article => {
            const safeTitle = (article.title || 'Article').replace(/'/g, "\\'");
            let authorsHTML = '';
            if (Array.isArray(article.authors)) {
                authorsHTML = article.authors.map((author, index) => {
                    const num = index + 1;
                    return `<span class="author-item">
                        <span class="author-name">${author.name}</span><sup class="aff-trigger" onclick="toggleAffiliation(this.parentElement, event)">${num}</sup>
                        <span class="author-affiliation-block">
                            <span class="aff-content">
                                <span class="tooltip-num">${num}</span> ${author.aff}
                            </span>
                        </span>
                    </span>`;
                }).join(', ');
            } else {
                authorsHTML = article.authors || '';
            }

            html += `
                <article class="inpress-article-card" id="${article.id}">
                    <div class="inpress-header">
                        <h2 class="inpress-title">${article.title}</h2>
                        <span class="inpress-badge">In Press</span>
                    </div>
                    
                    <div class="inpress-authors">
                        <i class='bx bx-group'></i>
                        <span>${authorsHTML}</span>
                    </div>
                    
                    <div class="inpress-meta">
                        <span><i class='bx bx-book'></i> ${article.journal}</span>
                        <span><i class='bx bx-calendar-check'></i> ${article.date}</span>
                    </div>
                    
                    <div class="inpress-abstract">
                        <strong>Abstract:</strong> ${article.abstract}
                    </div>
                    
                    <div class="inpress-actions">
                        <button class="btn-inpress btn-view" onclick="viewPDF('${article.pdf}', '${safeTitle}')">
                            <i class='bx bx-show'></i> View PDF
                        </button>
                        
                    </div>
                </article>
            `;
        });

        inpressList.innerHTML = html;
    };

    loadPage();
});

// Global function for toggleAffiliation (used inline in the HTML)
window.toggleAffiliation = function (parentElement, event) {
    event.stopPropagation();

    // Close others
    document.querySelectorAll('.author-item.active').forEach(item => {
        if (item !== parentElement) {
            item.classList.remove('active');
        }
    });

    // Toggle current
    parentElement.classList.toggle('active');
};

// Close affiliation blocks when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.author-item')) {
        document.querySelectorAll('.author-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});
