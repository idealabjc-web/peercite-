/* =====================================================
   PEERCITE PUBLISHERS - COMPLETE JAVASCRIPT
   ===================================================== */

'use strict';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ==================== 3D GLOBE PRELOADER ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');

    if (!preloader) return;

    // Region hover tooltips
    const continents = document.querySelectorAll('.continent');
    continents.forEach(continent => {
        continent.addEventListener('mouseenter', function () {
            const region = this.getAttribute('data-region');
            console.log(`Hovering over: ${region}`);
            // You can add tooltip logic here if needed
        });
    });

    // Auto-hide preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.remove();
                }
            }, 1000);
        }, 2000); // Show for 2 seconds after load
    });

    // Fallback: force hide after 5 seconds
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.remove();
            }
        }, 1000);
    }, 5000);
});

/* ==================== STICKY HEADER ==================== */
const header = $('#main-header');

window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ==================== MOBILE MENU ==================== */
const hamburger = $('#hamburger');
const mobileMenu = $('#mobile-menu');
const mobileOverlay = $('#mobile-overlay');
const mobileClose = $('#mobile-close');

const openMobileMenu = () => {
    hamburger?.classList.add('active');
    mobileMenu?.classList.add('active');
    mobileOverlay?.classList.add('active');
    document.body.classList.add('no-scroll');
    hamburger?.setAttribute('aria-expanded', 'true');
};

const closeMobileMenu = () => {
    hamburger?.classList.remove('active');
    mobileMenu?.classList.remove('active');
    mobileOverlay?.classList.remove('active');
    document.body.classList.remove('no-scroll');
    hamburger?.setAttribute('aria-expanded', 'false');
};

hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
});

mobileClose?.addEventListener('click', closeMobileMenu);
mobileOverlay?.addEventListener('click', closeMobileMenu);

/* ==================== MOBILE DROPDOWNS ==================== */
$$('.mobile-dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.mobile-nav-link');
    btn?.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns
        $$('.mobile-dropdown.open').forEach(d => {
            if (d !== dropdown) d.classList.remove('open');
        });

        dropdown.classList.toggle('open', !isOpen);
    });
});

/* ==================== AUTO-SCROLLING HERO CAROUSEL WITH DYNAMIC TEXT ==================== */
const wrapper = document.getElementById('hero-slides-wrapper');
const dots = document.querySelectorAll('.hero-dot');
const totalSlides = 3;
let currentSlide = 0;
let sliderTimer;

const goToSlide = (n) => {
    if (!wrapper) return;
    currentSlide = (n + totalSlides) % totalSlides;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
};

document.getElementById('hero-prev')?.addEventListener('click', () => { clearInterval(sliderTimer); goToSlide(currentSlide - 1); startAuto(); });
document.getElementById('hero-next')?.addEventListener('click', () => { clearInterval(sliderTimer); goToSlide(currentSlide + 1); startAuto(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { clearInterval(sliderTimer); goToSlide(i); startAuto(); }));

const startAuto = () => {
    if (!wrapper) return;
    sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
};
startAuto();

// =====================================================
// NEW SEARCH OVERLAY SCRIPT
// =====================================================
/* =====================================================
   SEARCH FUNCTIONALITY - FIXED & SEO OPTIMIZED
   ===================================================== */

const searchInputs = $$('#header-search, #journal-search');
const searchDropdown = document.getElementById('search-dropdown');

// Highlight matching text in search results
const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
};

// Enhanced search matching with better SEO
const searchArticles = (query) => {
    if (!query || !articlesData) return [];

    const q = query.toLowerCase().trim();

    return articlesData.filter(art => {
        const title = art.title.toLowerCase();
        const category = art.category.toLowerCase();

        // SEO-friendly matching logic
        // 1. Exact title match (highest priority)
        if (title === q) return true;

        // 2. Title starts with query
        if (title.startsWith(q)) return true;

        // 3. Title contains query as whole word
        const words = title.split(/\s+/);
        if (words.some(word => word.startsWith(q))) return true;

        // 4. Title contains query anywhere
        if (title.includes(q)) return true;

        // 5. Category match
        if (category.includes(q)) return true;

        // 6. Special handling for common abbreviations
        const abbrevMap = {
            'ai': 'artificial intelligence',
            'ml': 'machine learning',
            'iot': 'internet of things',
            'vr': 'virtual reality',
            'ar': 'augmented reality'
        };

        if (abbrevMap[q] && title.includes(abbrevMap[q])) return true;

        return false;
    }).slice(0, 8); // Limit to top 8 results
};

// Initialize search functionality for all matching inputs
searchInputs.forEach(searchInput => {
    // Clear initial value
    searchInput.value = '';

    // Input event listener
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        // Sync other search inputs if they exist (optional, but good for UX)
        searchInputs.forEach(input => {
            if (input !== searchInput) input.value = query;
        });

        // Reset locked article
        if (typeof lockedArticleId !== 'undefined') {
            lockedArticleId = null;
        }

        // Update publications page if visible
        if (typeof pages !== 'undefined' && pages.publications && pages.publications.style.display !== 'none') {
            if (typeof renderArticles === 'function') {
                renderArticles(query);
            }
        }

        // Internal filtering for publications.html
        const publicationCards = $$('.publication-card');
        if (publicationCards.length > 0) {
            let visibleCount = 0;
            publicationCards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
                const match = title.includes(query.toLowerCase()) || desc.includes(query.toLowerCase());
                card.classList.toggle('hidden', !match);
                if (match) visibleCount++;
            });
            const noResults = $('#no-results');
            if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Show search suggestions
        const matches = searchArticles(query);
        showDropdown(matches, query, searchInput);
    });

    // Focus event - show recent searches or placeholder
    searchInput.addEventListener('focus', () => {
        const query = searchInput.value.trim();
        if (query) {
            const matches = searchArticles(query);
            showDropdown(matches, query, searchInput);
        }
    });

    // Keyboard navigation
    let highlightedIndex = -1;

    searchInput.addEventListener('keydown', (e) => {
        const items = searchDropdown.querySelectorAll('.dropdown-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
            updateHighlight(items, highlightedIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlightedIndex = Math.max(highlightedIndex - 1, -1);
            updateHighlight(items, highlightedIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0 && items[highlightedIndex]) {
                items[highlightedIndex].click();
            } else {
                // If on publications page and enter is pressed without selection, just keep filter
                searchDropdown.classList.remove('visible');
            }
        } else if (e.key === 'Escape') {
            searchDropdown.classList.remove('visible');
            searchInput.blur();
            highlightedIndex = -1;
        }
    });
});

// Refactored showDropdown to position correctly relative to trigger
const showDropdown = (matches, query, triggerEl) => {
    if (!searchDropdown) return;

    // Clear previous results
    searchDropdown.innerHTML = '';

    // If no query, hide dropdown
    if (!query || query.trim() === '') {
        searchDropdown.classList.remove('visible');
        return;
    }

    // Position dropdown under the active input if it's the header search
    if (triggerEl.id === 'header-search') {
        const rect = triggerEl.getBoundingClientRect();
        searchDropdown.style.left = `${rect.left}px`;
        searchDropdown.style.width = `${rect.width}px`;
        // In consolidated CSS, we use relative positioning in the wrapper, so no need for absolute positioning here
    }

    // If no matches found
    if (matches.length === 0) {
        searchDropdown.innerHTML = `
            <div class="dropdown-no-results">
                <i class='bx bx-search-alt'></i>
                <p>No journals found for "<strong>${query}</strong>"</p>
            </div>
        `;
        searchDropdown.classList.add('visible');
        return;
    }

    // Display matching results
    searchDropdown.innerHTML = matches.map(art => `
        <div class="dropdown-item" data-id="${art.id}">
            <i class='bx bx-book-open dropdown-item-icon'></i>
            <div class="dropdown-item-text">
                <div class="dropdown-item-title">${highlightMatch(art.title, query)}</div>
                <div class="dropdown-item-category">${art.category}</div>
            </div>
            <i class='bx bx-chevron-right' style="color: #ccc; font-size: 1.2rem;"></i>
        </div>
    `).join('');

    // Add click handlers to results
    searchDropdown.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedId = parseInt(item.dataset.id);
            // articlesData is assumed global from journals-data.js or elsewhere
            const selectedArticle = (typeof articlesData !== 'undefined' ? articlesData : JOURNALS_DATA).find(a => a.id === selectedId || a.id === item.dataset.id);

            if (selectedArticle) {
                // Update all search inputs
                searchInputs.forEach(input => input.value = selectedArticle.title);

                // Hide dropdown
                searchDropdown.classList.remove('visible');

                // Redirect to journal page with ID
                window.location.href = `journal.html?id=${selectedArticle.id}`;
            }
        });
    });

    // Show dropdown
    searchDropdown.classList.add('visible');
};

// Update highlighted item
const updateHighlight = (items, index) => {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('highlighted');
            item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
            item.classList.remove('highlighted');
        }
    });
};

// Click outside to close
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-autocomplete-wrapper')) {
        searchDropdown.classList.remove('visible');
        highlightedIndex = -1;
    }
});

// Prevent dropdown from closing when clicking inside
searchDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});



/* =====================================================
   MOBILE SEARCH (if separate element exists)
   ===================================================== */

const mobileSearchInput = document.querySelector('.mobile-search input');
if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (typeof renderArticles === 'function') {
            renderArticles(query);
        }

        // Switch to publications page
        if (query && typeof switchPage === 'function') {
            switchPage('publications');
        }
    });
}

/* ==================== BACK TO TOP ==================== */
const backToTop = $('#back-to-top');

window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==================== ANIMATED STATS COUNTER ==================== */
const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    if (isNaN(target)) return;

    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString();
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

$$('.stat-number[data-count]').forEach(el => statsObserver.observe(el));

/* ==================== PUBLICATION FILTER BUTTONS ==================== */
const filterBtns = $$('.filter-btn');
const publicationCards = $$('.publication-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        let visibleCount = 0;
        publicationCards.forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !match);
            if (match) visibleCount++;
        });

        // Show/hide no results
        const noResults = $('#no-results');
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    });
});

/* ==================== JOURNAL SEARCH FILTER ==================== */
const journalSearch = $('#journal-search');

journalSearch?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    publicationCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        const match = title.includes(query) || desc.includes(query);
        card.classList.toggle('hidden', !match);
        if (match) visibleCount++;
    });

    const noResults = $('#no-results');
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
});

/* ==================== FAQ ACCORDION ==================== */
$$('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isOpen = faqItem.classList.contains('open');

        // Close all
        $$('.faq-item.open').forEach(item => item.classList.remove('open'));

        // Open clicked if it was closed
        if (!isOpen) faqItem.classList.add('open');
    });
});

/* ==================== FORMS ==================== */
const newsletterForm = $('#newsletter-form');
const contactForm = $('#contact-form');

newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Subscribed! ✓';
    btn.style.background = '#059669';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        newsletterForm.reset();
    }, 3000);
});

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
    btn.style.background = '#059669';
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        contactForm.reset();
    }, 3000);
});

/* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */
$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#' || href === '#!') return;

        const target = $(href);
        if (target) {
            e.preventDefault();
            closeMobileMenu();
            const headerHeight = header?.offsetHeight || 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */
const revealElements = $$('.how-card, .speaker-card, .journal-card, .publication-card, .value-card, .team-card, .partner-card, .step-card, .standard-card, .contact-info-card, .partner-info-card, .faq-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    revealObserver.observe(el);
});


console.log('🚀 PeerCite Publishers — Loaded Successfully');