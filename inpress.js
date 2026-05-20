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

        window.INPRESS_DATA = [
  {
    id: "article-1",
    title: "Bilateral Gluteal Tuberous Xanthomas in a Young Male with Suspected Familial Hypercholesterolemia and Severe Aortic Stenosis: A Case Report",

    authors: [
      {
        name: "K . Santhosh kumar",
        aff: "MS GENERAL SURGERY"
      },
      {
        name: "Ankit D. Chinchulkar",
        aff: "MS GENERAL SURGERY"
      },
      {
        name: "V.S.S.V Aditya",
        aff: "MS GENERAL SURGERY"
      },
      {
        name: "Jagadish Guptha",
        aff: "MS GENERAL SURGERY"
      }
    ],

    journal: "Peercite Journal of Surgery and Medicine",
    date: "May 20, 2026",

    abstract: "Tuberous xanthomas are rare skin manifestations of severe lipid metabolism disorders...",

    pdf: "assets/pdfs/PJSM/v4-i2-sp-a2.pdf"
  }
];

const articles = window.INPRESS_DATA;

        // if (!articles || articles.length === 0) {
        //     inpressList.innerHTML = `
        //         <div class="no-articles">
        //             <div class="no-articles-icon">
        //                 <i class='bx bx-time-five'></i>
        //             </div>
        //             <h3>Upcoming Articles Are Being Processed</h3>
        //             <p>Accepted manuscripts undergoing editorial review and publication formatting will appear here shortly.</p>
        //             <div class="check-back-badge">Please check back soon</div>
        //         </div>
        //     `;
        //     return;
        // }

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
