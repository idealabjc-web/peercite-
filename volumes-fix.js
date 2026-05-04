/* =====================================================
   VOLUMES FIX — overrides for renderVolumesAndIssues,
   renderIssue, toggleVolume, toggleIssue
   Add this AFTER journals-data.js in journal.html & volumes.html
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
    const pjCode = window.JOURNAL_CODE_MAP ? window.JOURNAL_CODE_MAP[journal.id] : '';

    container.innerHTML = sortedVolumes.map((vol) => {
        return `
        <div class="volume-block" data-volume="${vol.volume}">
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
                    ${vol.issues.map(issue => renderIssue(journal.id, vol.volume, issue, pjCode)).join('')}
                </div>
            </div>
        </div>`;
    }).join('');
}

/* ---------- Re-render a single issue ---------- */
function renderIssue(journalId, volumeNum, issue, pjCode) {
    return `
        <div class="issue-block" data-issue="${issue.issue}">
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
                ${issue.articles.map(article => renderArticle(article, pjCode)).join('')}
            </div>
        </div>`;
}

/* ---------- Override renderArticle to include URL tracking ---------- */
function renderArticle(article, pjCode) {
    const safeTitle = (article.title || 'Article').replace(/'/g, "\\'");
    const articleId = article.id || '';

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

    return `
        <div class="article-row" id="${articleId}" data-pj="${pjCode}" onclick="updateArticleURL('${pjCode}', '${articleId}')">
            <div class="article-icon-wrap">
                <i class='bx bx-file-blank'></i>
            </div>
            <div class="article-details">
                <p class="article-authors"><i class='bx bx-user'></i> ${authorsHTML}</p>
                ${article.abstract ? `<p class="article-abstract">${article.abstract}</p>` : ''}
                <div class="article-meta-row">
                    <span><i class='bx bx-bookmark'></i> Pages ${article.pages}</span>
                </div>
            </div>
            <div class="article-actions">
                <button class="btn-view-pdf" onclick="viewPDF('${article.pdf}', '${safeTitle}')">
                    <i class='bx bx-show'></i> View PDF
                </button>
                <a href="${article.pdf}" download class="btn-download-pdf">
                    <i class='bx bx-download'></i> Download
                </a>
            </div>
        </div>
    `;
}

/* ---------- URL Management for Articles ---------- */
function updateArticleURL(pjCode, articleId) {
    if (!pjCode || !articleId || window.location.protocol === 'file:') return;
    const newPath = window.location.pathname.split('journal/')[0] + 'journal/' + pjCode + '/' + articleId;
    window.history.replaceState(null, '', newPath);
}

/* ---------- Toggle volume ---------- */
function toggleVolume(header) {
    const block = header.parentElement;
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.volume-toggle');
    const isNowOpen = !content.classList.contains('open');
    content.classList.toggle('open', isNowOpen);
    block.classList.toggle('expanded', isNowOpen);
    toggle.style.transform = isNowOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

/* ---------- Toggle issue ---------- */
function toggleIssue(header) {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.issue-toggle');
    const isNowOpen = !content.classList.contains('open');
    content.classList.toggle('open', isNowOpen);
    toggle.style.transform = isNowOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

/* ---------- INITIALIZATION & ROUTING ---------- */
(function () {
    const params = new URLSearchParams(window.location.search);
    let journalId = params.get('id');
    let targetArticleId = '';

    // Handle path-based routing (e.g., /journal/pjsm/article-id)
    if (window.location.protocol !== 'file:') {
        const pathSegments = window.location.pathname.split('/').filter(s => s);
        const journalIndex = pathSegments.indexOf('journal');

        if (journalIndex !== -1 && pathSegments[journalIndex + 1]) {
            const codeOrId = pathSegments[journalIndex + 1];
            if (window.CODE_TO_ID_MAP && window.CODE_TO_ID_MAP[codeOrId]) {
                journalId = window.CODE_TO_ID_MAP[codeOrId];
            } else {
                journalId = codeOrId; // fallback to ID
            }

            // Extract article ID if present
            if (pathSegments[journalIndex + 2]) {
                targetArticleId = pathSegments[journalIndex + 2];
            }
        }
    }

    if (window.JOURNALS_DATA && journalId && window.JOURNALS_DATA[journalId]) {
        const journal = window.JOURNALS_DATA[journalId];

        // Populate metadata on volumes.html
        if (document.getElementById('journal-title') && !document.getElementById('journal-hero')) {
            document.title = `${journal.shortTitle} Volumes | PeerCite`;
            document.getElementById('journal-title').textContent = `${journal.title} — Volumes & Issues`;
            document.getElementById('journal-subtitle').textContent = `Explore the complete archive of ${journal.shortTitle}.`;

            const journalLink = document.getElementById('journal-link');
            if (journalLink) {
                journalLink.href = `journal.html?id=${journalId}`;
                journalLink.textContent = journal.shortTitle;
            }
        }

        // Update View Proceedings button on journal.html
        const viewVolumesBtn = document.getElementById('view-volumes-btn');
        if (viewVolumesBtn) {
            viewVolumesBtn.href = `volumes.html?id=${journalId}`;
        }

        renderVolumesAndIssues(journal);

        // Auto-expand and scroll to article if specified in URL
        if (targetArticleId) {
            setTimeout(() => {
                const articleEl = document.getElementById(targetArticleId);
                if (articleEl) {
                    // Open parent issue
                    const issueBlock = articleEl.closest('.issue-block');
                    if (issueBlock) {
                        const issueHeader = issueBlock.querySelector('.issue-header');
                        if (issueHeader && !issueBlock.querySelector('.issue-articles').classList.contains('open')) {
                            toggleIssue(issueHeader);
                        }

                        // Open parent volume
                        const volumeBlock = issueBlock.closest('.volume-block');
                        if (volumeBlock) {
                            const volumeHeader = volumeBlock.querySelector('.volume-header');
                            if (volumeHeader && !volumeBlock.querySelector('.volume-content').classList.contains('open')) {
                                toggleVolume(volumeHeader);
                            }
                        }
                    }

                    // Scroll to article
                    articleEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    articleEl.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
                    articleEl.style.borderColor = 'var(--primary)';
                }
            }, 500);
        }
    }
})();

/* ---------- Author Affiliations ---------- */
function toggleAffiliation(element, event) {
    if (event) event.stopPropagation();
    const isActive = element.classList.contains('active');
    const container = element.closest('.article-authors');
    if (container) {
        container.querySelectorAll('.author-item').forEach(item => {
            if (item !== element) item.classList.remove('active');
        });
    }
    element.classList.toggle('active', !isActive);
}

document.addEventListener('click', function (e) {
    if (!e.target.closest('.author-item')) {
        document.querySelectorAll('.author-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});