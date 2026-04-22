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

// search.js - Smart Search for PeerCite Publishers

document.addEventListener('DOMContentLoaded', function () {

    const searchInputs = document.querySelectorAll('#search-input, .mobile-search input');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchBtns = document.querySelectorAll('#search-btn, .mobile-search i.bx-search');
    let selectedSuggestionIndex = -1;

    // Comprehensive searchable data
    let searchData = [
        { title: "Home", url: "index.html", category: "Page", icon: "bx bx-home", type: "static" },
        { title: "Publications", url: "publications.html", category: "Section", icon: "bx bx-book-open", type: "static" },
        { title: "Authors Hub", url: "authors.html", category: "Section", icon: "bx bx-feather", type: "static" },
        { title: "About Us", url: "about.html", category: "Page", icon: "bx bx-building-house", type: "static" },
        { title: "Contact", url: "contact.html", category: "Page", icon: "bx bx-envelope", type: "static" },
    ];

    // Dynamically build from JOURNALS_DATA if available
    if (typeof JOURNALS_DATA !== 'undefined') {
        Object.values(JOURNALS_DATA).forEach(journal => {
            // Add Journal
            searchData.push({
                title: journal.title,
                url: `journal.html?id=${journal.id}`,
                category: "Journal",
                icon: "bx bx-book",
                type: "journal"
            });

            // Add Proceedings
            if (journal.proceedings && Array.isArray(journal.proceedings)) {
                journal.proceedings.forEach((proc, index) => {
                    const procId = proc.id || (proc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + (index + 1));
                    searchData.push({
                        title: proc.title,
                        url: `proceeding.html?journal=${journal.id}&proceeding=${procId}`,
                        category: "Proceeding",
                        icon: "bx bx-file",
                        type: "proceeding"
                    });
                });
            }
        });
    }

    function showSuggestions(query, inputElement) {
        if (!searchDropdown) return;
        searchDropdown.innerHTML = '';
        selectedSuggestionIndex = -1;

        if (query.length < 2) {
            searchDropdown.classList.remove('show');
            return;
        }

        let filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        // Sort: Priority to Journals (1), then Proceedings (2), then Static (3)
        filtered.sort((a, b) => {
            const types = { 'journal': 1, 'proceeding': 2, 'static': 3 };
            return (types[a.type] || 4) - (types[b.type] || 4);
        });

        // Position dropdown relative to the active input if it's the mobile one
        if (inputElement.closest('.mobile-search')) {
            // For mobile search, we might want to attach it differently, 
            // but for now let's just show it in the fixed wrapper if possible.
            // Actually, the search-dropdown is usually fixed or absolute in the header.
            // On mobile, it might need to be under the mobile input.
            const mobileSearch = inputElement.closest('.mobile-search');
            if (mobileSearch && !mobileSearch.contains(searchDropdown)) {
                mobileSearch.appendChild(searchDropdown);
            }
        } else {
            // Re-attach to desktop wrapper if needed
            const desktopWrapper = document.querySelector('.search-autocomplete-wrapper');
            if (desktopWrapper && !desktopWrapper.contains(searchDropdown)) {
                desktopWrapper.appendChild(searchDropdown);
            }
        }

        if (filtered.length === 0) {
            searchDropdown.innerHTML = `
                <div class="suggestion-item no-results">
                    <i class='bx bx-info-circle'></i>
                    <span>No results found for "<strong>${query}</strong>"</span>
                </div>`;
            searchDropdown.classList.add('show');
            return;
        }

        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';

            const highlightedTitle = item.title.replace(
                new RegExp(`(${query})`, 'gi'),
                '<span class="suggestion-highlight">$1</span>'
            );

            div.innerHTML = `
                <i class='${item.icon}'></i>
                <div>
                    <div>${highlightedTitle}</div>
                    <small style="color:#6b7280; font-size:12px;">${item.category}</small>
                </div>
            `;

            div.addEventListener('click', () => {
                window.location.href = item.url;
            });

            searchDropdown.appendChild(div);
        });

        searchDropdown.classList.add('show');
    }

    function updateSelection() {
        const items = searchDropdown.querySelectorAll('.suggestion-item:not(.no-results)');
        items.forEach((item, index) => {
            if (index === selectedSuggestionIndex) {
                item.classList.add('active');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Input Events
    searchInputs.forEach(input => {
        input.addEventListener('input', function () {
            showSuggestions(this.value.trim(), this);
        });

        // Keyboard Support (Arrows & Enter)
        input.addEventListener('keydown', function (e) {
            const items = searchDropdown.querySelectorAll('.suggestion-item:not(.no-results)'); // Target actual results
            const query = this.value.trim();

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (items.length > 0) {
                    selectedSuggestionIndex = (selectedSuggestionIndex + 1) % items.length;
                    updateSelection();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (items.length > 0) {
                    selectedSuggestionIndex = (selectedSuggestionIndex - 1 + items.length) % items.length;
                    updateSelection();
                }
            } else if (e.key === 'Enter') {
                if (searchDropdown.classList.contains('show')) {
                    // 1. If an item is highlighted via arrows
                    if (selectedSuggestionIndex >= 0 && items[selectedSuggestionIndex]) {
                        e.preventDefault();
                        items[selectedSuggestionIndex].click();
                        return;
                    }

                    // 2. If exactly 2 letters and Enter is pressed, pick the first suggestion if available
                    if (query.length === 2 && items.length > 0) {
                        e.preventDefault();
                        items[0].click();
                        return;
                    }
                }

                // 3. Default search behavior
                if (query) {
                    window.location.href = `publications.html?q=${encodeURIComponent(query)}`;
                }
            } else if (e.key === 'Escape') {
                searchDropdown.classList.remove('show');
            }
        });
    });

    // Search Button Clicks
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.parentElement.querySelector('input');
            const query = input ? input.value.trim() : '';
            if (query) {
                window.location.href = `publications.html?q=${encodeURIComponent(query)}`;
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        let isClickInside = false;
        searchInputs.forEach(input => {
            if (input.contains(e.target)) isClickInside = true;
        });
        if (searchDropdown && searchDropdown.contains(e.target)) isClickInside = true;

        if (!isClickInside && searchDropdown) {
            searchDropdown.classList.remove('show');
        }
    });

    // Optional: Show popular searches when focused and empty
    searchInputs.forEach(input => {
        input.addEventListener('focus', function () {
            if (this.value.trim() === '') {
                // You can show trending searches here if you want
            }
        });
    });
});
/* =====================================================
   MOBILE SEARCH (if separate element exists)
   ===================================================== */

// const mobileSearchInput = document.querySelector('.mobile-search input');
// if (mobileSearchInput) {
//     mobileSearchInput.addEventListener('input', (e) => {
//         const query = e.target.value.trim();

//         if (typeof renderArticles === 'function') {
//             renderArticles(query);
//         }

//         // Switch to publications page
//         if (query && typeof switchPage === 'function') {
//             switchPage('publications');
//         }
//     });
// }

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
/* ===== REVEAL ANIMATION (FIXED) ===== */
const track = document.querySelector('.speakers-track');

let position = 0;
let speed = 0.5; // adjust speed here

function animate() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    const firstCard = track.children[0];
    const firstWidth = firstCard.offsetWidth + 32; // card + gap

    // when first card fully moved out
    if (Math.abs(position) >= firstWidth) {
        position += firstWidth;
        track.appendChild(firstCard);
    }

    requestAnimationFrame(animate);
}

animate();


/* ===== CURSOR GLOW ===== */
const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

/* ===== CARD 3D TILT ===== */
// document.querySelectorAll(".journal-card").forEach(card => {
//     card.addEventListener("mousemove", e => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const rotateX = (y / rect.height - 0.5) * -10;
//         const rotateY = (x / rect.width - 0.5) * 10;

//         card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
//     });

//     card.addEventListener("mouseleave", () => {
//         card.style.transform = "";
//     });
// });


console.log('🚀 PeerCite Publishers — Loaded Successfully');