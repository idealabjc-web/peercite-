/**
 * PeerCite Publishers - In Press Page Renderer
 */

document.addEventListener("DOMContentLoaded", function () {

    const inpressList = document.getElementById("inpress-list");

    const loadPage = () => {
        if (!window.INPRESS_DATA) {
            window.INPRESS_DATA = [];
        }

        if (window.INPRESS_DATA.length === 0) {
            inpressList.innerHTML = `
                <div class="no-articles" style="text-align: center; padding: 4rem 1rem;">
                    <div class="no-articles-icon" style="font-size: 4rem; color: #cbd5e1; margin-bottom: 1rem;">
                        <i class='bx bx-time-five'></i>
                    </div>
                    <h3 style="font-size: 1.5rem; color: #334155; margin-bottom: 0.5rem;">Upcoming Articles Are Being Processed</h3>
                    <p style="color: #64748b; max-width: 500px; margin: 0 auto 1.5rem;">Accepted manuscripts undergoing editorial review and publication formatting will appear here shortly.</p>
                    <div class="check-back-badge" style="display: inline-block; background: #f1f5f9; color: #475569; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">Please check back soon</div>
                </div>
            `;
            return;
        }

        let html = '';

        window.INPRESS_DATA.forEach(article => {
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
                        <a href="${article.pdf}" target="_blank" class="btn-inpress btn-view" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
                            <i class='bx bx-show'></i> View PDF
                        </a>
                        
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
