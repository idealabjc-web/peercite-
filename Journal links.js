/**
 * PeerCite Publishers — journal-links.js
 *
 * Rewrites every  href="journal.html?id=..."  and  href="assets/pdfs/..."
 * link on the page to use clean URLs.
 *
 * Load AFTER router.js and after the page has rendered:
 *   <script src="router.js"></script>
 *   ...content scripts...
 *   <script src="journal-links.js" defer></script>
 *
 * This works on every page (index, publications, journal, etc.).
 */

(function () {
    'use strict';

    if (!window.PEERCITE) return; // router.js not loaded

    var pdfFolderRe = /\/assets\/pdfs\/([A-Z]+)\/([^"]+)\.pdf/;

    function rewriteLinks() {
        // ── A. Journal page links  (journal.html?id=slug → /shortcode) ────────────
        document.querySelectorAll('a[href*="journal.html?id="]').forEach(function (a) {
            var slug = new URLSearchParams(a.href.split('?')[1]).get('id');
            if (slug) {
                a.href = window.PEERCITE.journalURL(slug);
            }
        });

        // ── B. PDF links  (assets/pdfs/PJMH/v1-i1-a1.pdf → /pjmh/v1-i1-a1) ──────
        document.querySelectorAll('a[href*="assets/pdfs/"]').forEach(function (a) {
            var raw = a.getAttribute('href');
            var m = raw.match(pdfFolderRe);
            if (!m) return;

            var folder = m[1];                  // e.g. PJMH
            var articleId = m[2];                  // e.g. v1-i1-a1
            var code = folder.toLowerCase();  // e.g. pjmh

            // Only rewrite if we know this shortcode
            if (window.CODE_TO_ID_MAP && window.CODE_TO_ID_MAP[code] !== undefined) {
                // Keep download attribute on download buttons; omit on view buttons
                if (!a.hasAttribute('download')) {
                    a.href = '/' + code + '/' + articleId;
                }
            }
        });

        // ── C. Other static page links (about.html → /about) ──────────────────────
        var staticPages = ['about', 'publications', 'contact', 'authors', 'inpress'];
        staticPages.forEach(function (page) {
            document.querySelectorAll('a[href="' + page + '.html"]').forEach(function (a) {
                a.href = '/' + page;
            });
        });
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', rewriteLinks);
    } else {
        rewriteLinks();
    }

    // Also expose so it can be called manually after dynamic renders
    window.PEERCITE.rewriteLinks = rewriteLinks;

})();