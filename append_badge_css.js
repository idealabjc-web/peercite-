const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const badgeCSS = `

/* ==================== HERO CROSSREF BADGE ==================== */
.hero-crossref-badge {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    background: rgba(255, 255, 255, 0.15);
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    width: max-content;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-crossref-badge span {
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.hero-crossref-logo {
    height: 35px;
    width: auto;
    object-fit: contain;
    border-radius: 4px;
    background: #ffffff;
    padding: 4px 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    .hero-crossref-badge {
        margin-top: 1.5rem;
        padding: 0.6rem 1.2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    .hero-crossref-logo {
        height: 28px;
    }
}
`;

if (!css.includes('.hero-crossref-badge')) {
    fs.writeFileSync('style.css', css + badgeCSS, 'utf8');
    console.log('Appended hero crossref badge CSS');
} else {
    console.log('CSS already exists');
}
