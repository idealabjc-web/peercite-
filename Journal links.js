/**
 * PeerCite Publishers — journal-links.js
 *
 * Rewrites every  href="/..."  and  href="assets/pdfs/..."
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
        // Disabled link rewriting to prevent URLs from being changed
        // to server-side shortcodes (e.g. /pjmh) which breaks them on static servers.
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        // document.addEventListener('DOMContentLoaded', rewriteLinks);
    } else {
        // rewriteLinks();
    }

    // Also expose so it can be called manually after dynamic renders
    window.PEERCITE.rewriteLinks = rewriteLinks;

})();
