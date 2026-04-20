/**
 * PeerCite Publishers - Article Collection Page Renderer
 * Fixed: Proper validation and ID matching
 */

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const journalId = params.get("journal");
    const proceedingId = params.get("proceeding");

    console.log("🔍 Debug Info:");
    console.log("Journal ID:", journalId);
    console.log("Proceeding ID:", proceedingId);
    console.log("Data Available:", !!window.journalsData);

    // Validation
    if (!journalId || !proceedingId) {
        console.error("❌ Missing URL parameters");
        window.location.href = "publications.html";
        return;
    }

    // Wait for data to load
    const loadPage = () => {
        if (!window.journalsData) {
            console.log("⏳ Waiting for data...");
            setTimeout(loadPage, 100);
            return;
        }

        const journal = window.journalsData[journalId];

        if (!journal) {
            console.error("❌ Journal not found:", journalId);
            window.location.href = "publications.html";
            return;
        }

        console.log("✅ Journal found:", journal.title);

        const proceeding = journal.proceedings.find(p => p.id === proceedingId);

        if (!proceeding) {
            console.error("❌ Article collection not found:", proceedingId);
            console.log("Available IDs:", journal.proceedings.map(p => p.id));
            window.location.href = "journal.html?id=" + journalId;
            return;
        }

        console.log("✅ Article collection found:", proceeding.title);

        document.title = `${proceeding.title} | PeerCite Publishers`;
        const breadcrumbJournal = document.getElementById("breadcrumbJournal");
        if (breadcrumbJournal) {
            breadcrumbJournal.textContent = journal.title;
            breadcrumbJournal.href = "journal.html?id=" + journalId;
        }

        const breadcrumbProceeding = document.getElementById("breadcrumbProceeding");
        if (breadcrumbProceeding) {
            breadcrumbProceeding.textContent = proceeding.title;
        }
        // Hero Section
        document.getElementById("proceedingTitle").textContent = proceeding.title;
        document.getElementById("proceedingConference").textContent = proceeding.conference;
        document.getElementById("proceedingStatus").textContent = proceeding.status || 'Published';
        document.getElementById("proceedingCategory").textContent = journal.category;
        document.getElementById("proceedingDate").textContent = proceeding.date;
        document.getElementById("proceedingArticles").textContent = proceeding.articles + " Articles";

        // Abstract
        const abstractEl = document.getElementById("proceedingAbstract");
        if (abstractEl) {
            abstractEl.querySelector("p").textContent = proceeding.description;
        }

        // Articles List
        const articlesList = document.getElementById("proceedingArticlesList");
        const loadingPlaceholder = articlesList.querySelector(".loading-placeholder");
        if (loadingPlaceholder) {
            loadingPlaceholder.remove();
        }

        if (proceeding.articles > 0) {
            let articlesHTML = `<div class="articles-count">${proceeding.articles} peer-reviewed articles available</div>`;
            articlesHTML += `<div class="article-placeholders">`;

            for (let i = 1; i <= Math.min(proceeding.articles, 6); i++) {
                articlesHTML += `
                    <div class="article-placeholder-card">
                        <div class="article-icon"><i class='bx bx-file-blank'></i></div>
                        <div class="article-info">
                            <h4>Research Article ${i}</h4>
                            <p>Authors: TBD • Pages: ${i * 5}-${i * 5 + 14}</p>
                            <span class="article-status">Available Soon</span>
                        </div>
                        <div class="article-action">
                            <span class="coming-soon-badge">Coming Soon</span>
                        </div>
                    </div>
                `;
            }

            if (proceeding.articles > 6) {
                articlesHTML += `<div class="more-articles">+${proceeding.articles - 6} more articles coming soon</div>`;
            }

            articlesHTML += `</div>`;
            articlesList.innerHTML += articlesHTML;
        } else {
            articlesList.innerHTML += `<div class="no-articles"><i class='bx bx-info-circle'></i> Articles will be published soon.</div>`;
        }

        // Back to Journal link
        document.getElementById("backToJournal").href = "journal.html?id=" + journalId;

        // Sidebar - Journal Info
        document.getElementById("journalInfoName").textContent = journal.title;
        document.getElementById("journalInfoImpact").textContent = "Impact Factor: " + journal.metrics.impactFactor;
        document.getElementById("journalInfoHindex").textContent = "H-Index: " + journal.metrics.hIndex;
    };

    loadPage();

    // Citation Functions
    window.exportCitation = function (type) {
        alert(`Exporting citation as ${type.toUpperCase()} format.\n\nFull citation tool coming soon.`);
    };

    window.copyDOI = function () {
        const doi = `10.5678/peercite.${journalId}.${proceedingId}`;
        navigator.clipboard.writeText(doi).then(() => {
            alert(`DOI copied: ${doi}`);
        }).catch(() => {
            prompt("Copy DOI manually:", doi);
        });
    };
});