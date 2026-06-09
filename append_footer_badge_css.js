const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const footerBadgeCSS = `

/* ==================== FOOTER INDEXING STRIP ==================== */
.footer-indexing-strip {
    background: #0f172a;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-indexing-strip .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.footer-indexing-label {
    color: #94a3b8;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.footer-indexing-logos {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.footer-indexing-logo {
    height: 30px;
    width: auto;
    object-fit: contain;
    background: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.footer-indexing-logo:hover {
    opacity: 1;
}

@media (max-width: 768px) {
    .footer-indexing-strip .container {
        flex-direction: column;
        gap: 1rem;
    }
}
`;

if (!css.includes('.footer-indexing-strip')) {
    fs.writeFileSync('style.css', css + footerBadgeCSS, 'utf8');
    console.log('Appended footer indexing CSS');
} else {
    console.log('Footer CSS already exists');
}
