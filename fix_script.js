const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Remove the weird syntax error block at line 132
code = code.replace(/const authorsData = \[\s*\{ name: 'Anu Ramchandran Nair'[\s\S]*?\];\s*/, '');

// Also remove the second accidental authorsData near line 144
code = code.replace(/const authorsData = \[\s*\{ name: 'Anu Ramchandran Nair'[\s\S]*?\];\s*/, '');

// Now fix the actual marquee authorsData near the bottom
code = code.replace(
    /const authorsData = \[\s*\{ name: 'Anu Ramchandran Nair'[^\]]*\];/,
    `const authorsData = [
        { name: 'Anu Ramchandran Nair',       role: 'Featured Author', img: 'assets/images/a1.png' },
        { name: 'Donnette Martelle',           role: 'Featured Author', img: 'assets/images/a2.png' },
        { name: 'Dr. Ignacio Bonasa Alzuria',  role: 'Featured Author', img: 'assets/images/a3.png' },
        { name: 'Mike Ike',                    role: 'Featured Author', img: 'assets/images/a4.png' },
        { name: 'Vana McCreary',               role: 'Featured Author', img: 'assets/images/a5.png' },
        { name: 'Shimul Rajput',               role: 'Featured Author', img: 'assets/images/a6.png' },
        { name: 'Ann Johanna Sam',             role: 'Featured Author', img: 'assets/images/a7.png' },
    ];`
);

// Fallback in case it's still the old version without my marquee code
if (!code.includes('animateMarquee')) {
    code = code.replace(
        /\/\* ==================== SCROLL REVEAL ANIMATIONS ==================== \*\/[\s\S]*?animate\(\);/,
        `/* ==================== AUTHORS MARQUEE ==================== */
(function () {
    const authorsData = [
        { name: 'Anu Ramchandran Nair',       role: 'Featured Author', img: 'assets/images/a1.png' },
        { name: 'Donnette Martelle',           role: 'Featured Author', img: 'assets/images/a2.png' },
        { name: 'Dr. Ignacio Bonasa Alzuria',  role: 'Featured Author', img: 'assets/images/a3.png' },
        { name: 'Mike Ike',                    role: 'Featured Author', img: 'assets/images/a4.png' },
        { name: 'Vana McCreary',               role: 'Featured Author', img: 'assets/images/a5.png' },
        { name: 'Shimul Rajput',               role: 'Featured Author', img: 'assets/images/a6.png' },
        { name: 'Ann Johanna Sam',             role: 'Featured Author', img: 'assets/images/a7.png' },
    ];

    const marqueeTrack = document.getElementById('speakers-marquee-track');
    if (!marqueeTrack) return;

    // Build cards and duplicate for seamless loop
    const buildCards = (list) => list.map(author => {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.innerHTML = \`
            <div class="speaker-img-wrapper">
                <img src="\${author.img}" alt="\${author.name}" loading="lazy"
                     onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#1e293b,#0f172a)'">
            </div>
            <div class="speaker-info">
                <h4>\${author.name}</h4>
                <span>\${author.role}</span>
            </div>\`;
        return card;
    });

    // Populate with two sets so the loop is seamless
    [...buildCards(authorsData), ...buildCards(authorsData)].forEach(card => marqueeTrack.appendChild(card));

    // JS scroll animation
    let position = 0;
    let speed = 0.6;
    let paused = false;

    marqueeTrack.addEventListener('mouseenter', () => paused = true);
    marqueeTrack.addEventListener('mouseleave', () => paused = false);

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
            marqueeTrack.style.transform = \`translateX(\${position}px)\`;
        }
        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
})();`
    );
}

fs.writeFileSync('script.js', code);
console.log('script.js fixed');
