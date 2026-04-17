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

// search.js - Smart Search for PeerCite Publishers

document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchBtn = document.getElementById('search-btn');

    // Comprehensive searchable data (Add more as needed)
    const searchData = [
        { title: "Home", url: "index.html", category: "Page", icon: "bx bx-home" },
        { title: "Publications", url: "publications.html", category: "Section", icon: "bx bx-book-open" },
        { title: "Authors Hub", url: "authors.html", category: "Section", icon: "bx bx-feather" },
        { title: "About Us", url: "about.html", category: "Page", icon: "bx bx-building-house" },
        { title: "Contact", url: "contact.html", category: "Page", icon: "bx bx-envelope" },

        // Journals & Topics
        { title: "AI & Machine Learning in Modern Research", url: "journal.html", category: "Journal", icon: "bx bx-chip" },
        { title: "Mental Health & Neuroscience Research Journal", url: "journal.html", category: "Journal", icon: "bx bx-heart-circle" },
        { title: "Climate & Environmental Sustainability Studies", url: "journal.html", category: "Journal", icon: "bx bx-leaf" },
        { title: "Quantum Computing & Advanced Physics Review", url: "journal.html", category: "Journal", icon: "bx bx-atom" },
        { title: "Biotechnology & Genomics Frontiers", url: "journal.html", category: "Journal", icon: "bx bx-test-tube" },
        { title: "Data Science & Analytics Quarterly", url: "journal.html", category: "Journal", icon: "bx bx-bar-chart-alt-2" },

        // Popular Keywords
        { title: "Artificial Intelligence", url: "journal.html", category: "Topic", icon: "bx bx-brain" },
        { title: "Neuroscience", url: "journal.html", category: "Topic", icon: "bx bx-brain" },
        { title: "Climate Change", url: "journal.html", category: "Topic", icon: "bx bx-leaf" },
        { title: "Mental Health Research", url: "journal.html", category: "Topic", icon: "bx bx-heart-circle" },
        { title: "Global Health Summit", url: "journal.html", category: "Conference", icon: "bx bx-calendar-event" },
        { title: "AI World Congress", url: "journal.html", category: "Conference", icon: "bx bx-calendar-event" }
    ];

    function showSuggestions(query) {
        searchDropdown.innerHTML = '';

        if (query.length < 2) {
            searchDropdown.classList.remove('show');
            return;
        }

        const filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            searchDropdown.innerHTML = `
                <div class="suggestion-item">
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

    // Input Event
    searchInput.addEventListener('input', function () {
        showSuggestions(this.value.trim());
    });

    // Search Button Click
    searchBtn.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query) {
            // You can later create a dedicated search results page
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    });

    // Enter Key Support
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('show');
        }
    });

    // Optional: Show popular searches when focused and empty
    searchInput.addEventListener('focus', function () {
        if (this.value.trim() === '') {
            // You can show trending searches here if you want
        }
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
/* ===== CURSOR GLOW ===== */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

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