/**
 * PeerCite Publishers — router.js
 * Must be the FIRST script in <head>, no defer/async.
 */

(function () {
    'use strict';

    // ── Shortcode → slug  (URL path → journal data key) ────────────────────────
    var CODE_TO_SLUG = {
        'pjmh': 'mental-health',
        'pjwl': 'womens-leadership',
        'pjaiml': 'ai-machine-learning',
        'pjns': 'neuroscience',
        'pjgse': 'globalization',
        'pjaf': 'agriculture-food',
        'pjps': 'pharmaceutical-sciences',
        'pjac': 'applied-chemistry',
        'pjqs': 'quantum-science',
        'pjsm': 'surgery-medicine',
        'pjes': 'environmental-sciences',
        'pjog': 'obstetrics-gynecology',
        'pjcb': 'cell-biology',
        'pjcdb': 'cardio-biology',
        'pjd': 'dermatology-cosmetics',
        'pjnm': 'nanostructured-materials',
        'pjdc': 'dental-care',
        'pjpd': 'pediatrics',
        'pje': 'entrepreneurship',
        'pjmb': 'microbiology',
        'pjdp': 'diagnostic-pathology',
        'pjmm': 'metaphysics',
        'pjfas': 'fisheries-aquatic-studies'
    };

    // ── Slug → shortcode  (journal data key → URL path) ────────────────────────
    var SLUG_TO_CODE = {};
    for (var code in CODE_TO_SLUG) {
        SLUG_TO_CODE[CODE_TO_SLUG[code]] = code;
    }

    // ── Uppercase journal ID → shortcode  (FIXES volumes-fix.js bug) ───────────
    // journals-data.js stores  id: 'PJWL'  on each journal object.
    // volumes-fix.js does  JOURNAL_CODE_MAP[journal.id]  — but JOURNAL_CODE_MAP
    // uses slug keys, so the lookup returned undefined.
    // This map lets it look up by the uppercase ID directly.
    var ID_TO_CODE = {
        'PJMH': 'pjmh',
        'PJWL': 'pjwl',
        'PJAIML': 'pjaiml',
        'PJNS': 'pjns',
        'PJGSE': 'pjgse',
        'PJAF': 'pjaf',
        'PJPS': 'pjps',
        'PJAC': 'pjac',
        'PJQS': 'pjqs',
        'PJSM': 'pjsm',
        'PJES': 'pjes',
        'PJOG': 'pjog',
        'PJCB': 'pjcb',
        'PJCDB': 'pjcdb',
        'PJD': 'pjd',
        'PJNM': 'pjnm',
        'PJDC': 'pjdc',
        'PJPD': 'pjpd',
        'PJE': 'pje',
        'PJMB': 'pjmb',
        'PJDP': 'pjdp',
        'PJMM': 'pjmm',
        'PJFAS': 'pjfas'
    };

    // ── Resolve journal slug from current URL ───────────────────────────────────
    var segments = window.location.pathname.replace(/^\//, '').split('/');
    var firstSeg = (segments[0] || '').toLowerCase();
    var params = new URLSearchParams(window.location.search);
    var journalSlug = CODE_TO_SLUG[firstSeg] || params.get('id') || '';

    // Inject ?id= so existing scripts that read URLSearchParams still work
    if (CODE_TO_SLUG[firstSeg] && !params.get('id')) {
        window.history.replaceState(
            null, '',
            window.location.pathname + '?id=' + journalSlug
        );
    }

    // ── Expose globals ──────────────────────────────────────────────────────────
    window.PEERCITE = window.PEERCITE || {};

    window.PEERCITE.getJournalId = function () {
        return new URLSearchParams(window.location.search).get('id') || journalSlug;
    };
    window.PEERCITE.journalURL = function (slug) {
        var c = SLUG_TO_CODE[slug];
        return c ? '/' + c : '/journal?id=' + slug;
    };
    window.PEERCITE.pdfURL = function (slug, articleId) {
        var c = SLUG_TO_CODE[slug];
        return c ? '/' + c + '/' + articleId : '/assets/pdfs/' + slug + '/' + articleId + '.pdf';
    };

    // Used by volumes-fix.js — all three maps now exposed
    window.CODE_TO_ID_MAP = CODE_TO_SLUG;  // shortcode → slug
    window.JOURNAL_CODE_MAP = SLUG_TO_CODE;  // slug      → shortcode
    window.ID_TO_CODE_MAP = ID_TO_CODE;    // PJWL      → pjwl  ← FIXES undefined bug

    window.PEERCITE_JOURNAL_ID = journalSlug;

})();