/* =====================================================
   VOLUMES FIX — overrides for renderVolumesAndIssues,
   renderIssue, toggleVolume, toggleIssue
   Add this AFTER journals-data.js in journal.html
   ===================================================== */

/* ---------- Re-render volumes with issues-grid wrapper and expanded class ---------- */
function renderVolumesAndIssues(journal) {
    const container = document.getElementById('volumes-container');
    if (!container) return;

    if (!journal.volumes || journal.volumes.length === 0) {
        container.innerHTML = `
            <div class="no-volumes" style="grid-column:1/-1;">
                <i class='bx bx-info-circle'></i>
                <p>No volumes published yet. Check back soon!</p>
            </div>`;
        return;
    }

    const sortedVolumes = [...journal.volumes].sort((a, b) => b.volume - a.volume);

    container.innerHTML = sortedVolumes.map((vol) => {
        // All volumes start COLLAPSED — user clicks to open
        return `
        <div class="volume-block">
            <div class="volume-header" onclick="toggleVolume(this)">
                <div class="volume-header-left">
                    <i class='bx bx-folder volume-icon'></i>
                    <div>
                        <h3>Volume ${vol.volume} <span class="volume-year">(${vol.year})</span></h3>
                        <p class="volume-meta">${vol.issues.length} ${vol.issues.length === 1 ? 'Issue' : 'Issues'} Published</p>
                    </div>
                </div>
                <i class='bx bx-chevron-down volume-toggle' style="transform:rotate(0deg)"></i>
            </div>
            <div class="volume-content">
                <div class="issues-grid">
                    ${vol.issues.map(issue => renderIssue(journal.id, vol.volume, issue)).join('')}
                </div>
            </div>
        </div>`;
    }).join('');
}

/* ---------- Re-render a single issue (unchanged logic, kept for completeness) ---------- */
function renderIssue(journalId, volumeNum, issue) {
    return `
        <div class="issue-block">
            <div class="issue-header" onclick="toggleIssue(this)">
                <div class="issue-header-left">
                    <span class="issue-badge">Issue ${issue.issue}</span>
                    <div>
                        <h4>${issue.title}</h4>
                        <p class="issue-meta">
                            <i class='bx bx-calendar'></i> ${issue.date}
                            <span class="separator">•</span>
                            <i class='bx bx-file'></i> ${issue.articles.length} ${issue.articles.length === 1 ? 'Article' : 'Articles'}
                        </p>
                    </div>
                </div>
                <i class='bx bx-chevron-down issue-toggle'></i>
            </div>
            <div class="issue-articles">
                ${issue.articles.map(article => renderArticle(article)).join('')}
            </div>
        </div>`;
}

/* ---------- Toggle volume: open/close + mark as expanded for full-width span ---------- */
function toggleVolume(header) {
    const block = header.parentElement;          // .volume-block
    const content = header.nextElementSibling;     // .volume-content
    const toggle = header.querySelector('.volume-toggle');

    const isNowOpen = !content.classList.contains('open');

    content.classList.toggle('open', isNowOpen);
    block.classList.toggle('expanded', isNowOpen);
    toggle.style.transform = isNowOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

/* ---------- Toggle issue articles open/close ---------- */
function toggleIssue(header) {
    const content = header.nextElementSibling;     // .issue-articles
    const toggle = header.querySelector('.issue-toggle');

    const isNowOpen = !content.classList.contains('open');

    content.classList.toggle('open', isNowOpen);
    toggle.style.transform = isNowOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

/* ---------- RE-RENDER immediately after overriding --------
   journals-data.js runs an IIFE that calls renderVolumesAndIssues()
   before this file loads, so the old (broken) version already ran.
   We call it again here with the fixed version.               */
(function () {
    const params = new URLSearchParams(window.location.search);
    const journalId = params.get('id');
    if (window.JOURNALS_DATA && journalId && window.JOURNALS_DATA[journalId]) {
        renderVolumesAndIssues(window.JOURNALS_DATA[journalId]);
    }
})();

/* =====================================================
   AUTHOR AFFILIATION TOGGLE (Inline expansion)
   ===================================================== */
function toggleAffiliation(element, event) {
    if (event) event.stopPropagation();
    
    const isActive = element.classList.contains('active');
    
    // Close all other open affiliations in this specific article row
    const container = element.closest('.article-authors');
    if (container) {
        container.querySelectorAll('.author-item').forEach(item => {
            if (item !== element) item.classList.remove('active');
        });
    }
    
    // Toggle the clicked one
    element.classList.toggle('active', !isActive);
}

// Close affiliations when clicking anywhere else on the page
document.addEventListener('click', function (e) {
    if (!e.target.closest('.author-item')) {
        document.querySelectorAll('.author-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});