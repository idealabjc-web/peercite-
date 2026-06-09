const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Center the hero badge
css = css.replace('.hero-crossref-badge {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-top: 2rem;', 
                  '.hero-crossref-badge {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    margin: 2rem auto 0 auto;');

// Also add styles for indexing-logo-img
if (!css.includes('.indexing-logo-img')) {
    css += `\n
/* ==================== JOURNAL PAGE INDEXING LOGOS ==================== */
.journal-indexing {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.journal-indexing > span {
    color: #94a3b8;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.indexing-logos {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.indexing-logos span {
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
}

.indexing-logo-img {
    height: 25px;
    width: auto;
    object-fit: contain;
    background: #fff;
    padding: 2px 6px;
    border-radius: 4px;
}
`;
}

fs.writeFileSync('style.css', css, 'utf8');
console.log('Updated style.css for center alignment and journal page logos.');
