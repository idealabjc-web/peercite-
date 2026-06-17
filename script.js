/* =====================================================
   PEERCITE PUBLISHERS - COMPLETE JAVASCRIPT
   ===================================================== */

'use strict';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ==================== 3D GLOBE PRELOADER ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const isFirstVisit = !sessionStorage.getItem('preloaderShown');
    sessionStorage.setItem('preloaderShown', 'true');

    const preloader = document.getElementById('preloader');

    if (!preloader) return;

    if (!isFirstVisit) {
        preloader.remove();
        return;
    }

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
        }, 1000); // Show for 2 seconds after load
    });

    // Fallback: force hide after 5 seconds
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.remove();
            }
        }, 1000);
    }, 1000);
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
        { title: "Publications", url: "index.html#publications-filter", category: "Section", icon: "bx bx-book-open", type: "static" },
        { title: "Authors Hub", url: "authors.html", category: "Section", icon: "bx bx-feather", type: "static" },
        { title: "About Us", url: "about.html", category: "Page", icon: "bx bx-building-house", type: "static" },
        { title: "Contact", url: "contact.html", category: "Page", icon: "bx bx-envelope", type: "static" },
    ];

    // Dynamically build from JOURNALS_DATA if available
    if (typeof JOURNALS_DATA !== 'undefined') {
        Object.entries(JOURNALS_DATA).forEach(([slug, journal]) => {
            // Add Journal
            searchData.push({
                title: journal.title,
                url: `journal.html?id=${slug}`,
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
                    window.location.href = `index.html?q=${encodeURIComponent(query)}`;
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
                window.location.href = `index.html?q=${encodeURIComponent(query)}`;
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

    // Handle search query from URL on the homepage
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get('q');
    if (urlQuery) {
        const journalSearch = document.getElementById('journal-search');
        if (journalSearch) {
            journalSearch.value = urlQuery;
            // Trigger input event to filter the list
            journalSearch.dispatchEvent(new Event('input'));
            // Scroll to the filter section
            setTimeout(() => {
                const filterSection = document.getElementById('publications-filter');
                if (filterSection) {
                    filterSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
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

    // Get form values
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('message')?.value || '';

    // TODO: Replace with your Web3Forms Access Key
    // Get a free key at https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        // Fallback to mailto if no API key is provided
        alert("Please add your Web3Forms Access Key in script.js to enable seamless form submissions.\n\nFor now, we will open your default email client to send the message.");

        const mailtoSubject = encodeURIComponent(`PeerCite Inquiry: ${subject}`);
        const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:contact@peercite.org?subject=${mailtoSubject}&body=${mailtoBody}`;

        btn.innerHTML = '<i class="bx bx-check"></i> Opening Email...';
        btn.style.background = '#059669';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
        return;
    }

    // Process with Web3Forms if API key is set
    btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';

    const formData = new FormData(contactForm);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    }).then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            btn.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
            btn.style.background = '#059669';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        } else {
            console.log(response);
            btn.innerHTML = '<i class="bx bx-x"></i> Error Sending';
            btn.style.background = '#ef4444';
            setTimeout(() => { btn.innerHTML = originalHTML; btn.style.background = ''; }, 3000);
        }
    }).catch(error => {
        console.log(error);
        btn.innerHTML = '<i class="bx bx-x"></i> Error Sending';
        btn.style.background = '#ef4444';
        setTimeout(() => { btn.innerHTML = originalHTML; btn.style.background = ''; }, 3000);
    });
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

/* ==================== AUTHORS MARQUEE ==================== */
(function () {
    const authorsData = [
        { name: 'Dr. Ruchi Mishra Sharma', img: 'assets/images/a1.png' },
        { name: 'Vana McCreary', img: 'assets/images/a2.png' },
        { name: 'Noreen Palmer', img: 'assets/images/a3.png' },
        { name: 'Dr.Wendy Muhlahauser', img: 'assets/images/a4.png' },
        { name: 'Deborah Dickinson', img: 'assets/images/a5.png' },
        { name: 'Fatim Zaman', img: 'assets/images/a6.png' },
        { name: 'Mary Catherine McKenzie', img: 'assets/images/a7.png' },
        { name: 'Naomi Riley', img: 'assets/images/a8.png' },
        { name: 'Kusum Gandhi Vig', img: 'assets/images/a9.png' },
        { name: 'Michele LaFemina', img: 'assets/images/a10.png' },
        { name: 'Nicole S Brown', img: 'assets/images/a11.png' },
        { name: 'Parveen Smith', img: 'assets/images/a12.png' },
        { name: 'Ai West', img: 'assets/images/a13.png' },
        { name: 'Dr.Elsa Wagdy', img: 'assets/images/a14.png' },
        { name: 'Ella Asnin', img: 'assets/images/a15.png' },
    ];

    const marqueeTrack = document.getElementById('speakers-marquee-track');
    if (!marqueeTrack) return;

    // Build cards and duplicate for seamless loop
    const buildCards = (list) => list.map(author => {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.innerHTML = `
            <div class="speaker-img-wrapper">
                <img src="${author.img}" alt="${author.name}" loading="lazy"
                     onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#1e293b,#0f172a)'">
            </div>
            <div class="speaker-info">
                <h4>${author.name}</h4>
                <!-- <span>${author.role}</span> -->
            </div>`;
        return card;
    });

    // Populate with two sets so the loop is seamless
    [...buildCards(authorsData), ...buildCards(authorsData)].forEach(card => marqueeTrack.appendChild(card));

    // JS scroll animation
    let position = 0;
    let speed = 0.6;
    let paused = false;


    function animateMarquee() {
        if (!paused) {
            position -= speed;
            const firstCard = marqueeTrack.children[0];
            if (firstCard) {
                const firstWidth = firstCard.offsetWidth + 32;
                if (Math.abs(position) >= firstWidth) {
                    position += firstWidth;
                    marqueeTrack.appendChild(firstCard);
                }
            }
            marqueeTrack.style.transform = `translateX(${position}px)`;
        }
        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
})();


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

/* ==================== CITATION NETWORK CANVAS BACKGROUND ==================== */
class CitationNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Balance node count with performance across screen sizes
        this.maxParticles = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 22000));
        if (this.particles.length > 0) this.init();
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            // Assign a depth layer (0 = background/faint, 1 = mid, 2 = foreground/prominent)
            const depth = Math.floor(Math.random() * 3);
            let radius, baseOpacity, speedFactor;
            
            if (depth === 0) {
                radius = Math.random() * 1.0 + 1.0;
                baseOpacity = Math.random() * 0.12 + 0.08;
                speedFactor = 0.3;
            } else if (depth === 1) {
                radius = Math.random() * 1.5 + 2.0;
                baseOpacity = Math.random() * 0.15 + 0.18;
                speedFactor = 0.55;
            } else {
                radius = Math.random() * 2.0 + 3.5;
                baseOpacity = Math.random() * 0.2 + 0.35;
                speedFactor = 0.85;
            }

            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * speedFactor * 0.6,
                vy: (Math.random() - 0.5) * speedFactor * 0.6,
                radius: radius,
                depth: depth,
                baseOpacity: baseOpacity,
                currentOpacity: baseOpacity,
                // Assign pulsing properties to some foreground particles
                pulse: depth === 2 && Math.random() > 0.4,
                pulseTime: Math.random() * 100,
                // Soft glow shadow settings for foreground particles
                glow: depth === 2,
                color: depth === 2 
                    ? 'rgba(16, 185, 129, 0.8)' 
                    : depth === 1 
                        ? 'rgba(52, 211, 153, 0.45)' 
                        : 'rgba(16, 185, 129, 0.2)'
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const time = Date.now();
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Pulse opacity if pulsing enabled
            if (p.pulse) {
                p.pulseTime += 0.015;
                p.currentOpacity = p.baseOpacity + Math.sin(p.pulseTime) * 0.12;
            } else {
                p.currentOpacity = p.baseOpacity;
            }

            // Boundary checks
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Move particle
            p.x += p.vx;
            p.y += p.vy;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            
            // Set glowing properties if foreground particle
            if (p.glow) {
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
            } else {
                this.ctx.shadowBlur = 0;
            }

            // Use correct opacity
            const match = p.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
            if (match) {
                this.ctx.fillStyle = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${p.currentOpacity})`;
            } else {
                this.ctx.fillStyle = p.color;
            }
            this.ctx.fill();

            // Reset shadow blur for connection lines
            this.ctx.shadowBlur = 0;

            // Draw links between nodes
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                // Only connect nodes of similar/adjacent depth for layered parallax effect
                if (Math.abs(p.depth - p2.depth) > 1) continue;

                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const connectLimit = 160;

                if (dist < connectLimit) {
                    // Line opacity depends on distance and layers
                    const depthFactor = (p.depth + p2.depth) / 4; // 0 to 1
                    const alpha = ((connectLimit - dist) / connectLimit) * (0.05 + depthFactor * 0.15);
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
                    this.ctx.lineWidth = 0.5 + depthFactor * 1.2;
                    this.ctx.stroke();

                    // Information citation packets: draw glowing signal moving along connection lines
                    if (p.depth > 0 && dist > 40) {
                        // Progression speed scales with particle velocity
                        const progress = (time * 0.0006 + (i * 0.05)) % 1.0;
                        const px = p.x + (p2.x - p.x) * progress;
                        const py = p.y + (p2.y - p.y) * progress;

                        this.ctx.beginPath();
                        this.ctx.arc(px, py, 1.2 + p.depth * 0.4, 0, Math.PI * 2);
                        this.ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 3.5})`;
                        this.ctx.shadowBlur = 4;
                        this.ctx.shadowColor = '#10B981';
                        this.ctx.fill();
                        this.ctx.shadowBlur = 0;
                    }
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* ==================== PROFESSIONAL BACKGROUND SYSTEM ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Make body transparent so background is visible
    document.body.style.background = 'transparent';

    // Inject background animation container if it doesn't exist
    let bgContainer = document.querySelector('.site-bg-animation');
    if (!bgContainer) {
        bgContainer = document.createElement('div');
        bgContainer.className = 'site-bg-animation';
        bgContainer.innerHTML = `
            <div class="bg-blob blob-1"></div>
            <div class="bg-blob blob-2"></div>
            <div class="bg-blob blob-3"></div>
            <div class="bg-grid"></div>
            <canvas class="bg-canvas"></canvas>
        `;
        document.body.prepend(bgContainer);
    }

    const canvas = bgContainer.querySelector('.bg-canvas');
    if (canvas) {
        const network = new CitationNetwork(canvas);
        network.animate();
    }
});

console.log('🚀 PeerCite Publishers — Loaded Successfully');
