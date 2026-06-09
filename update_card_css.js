const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// 1. Add logo to publication-image
// if (!css.includes('.publication-image::after')) {
//     const logoCSS = `
// .publication-image::after {
//     content: '';
//     position: absolute;
//     top: 15px;
//     right: 15px;
//     width: 90px;
//     height: 35px;
//     background-image: url('assets/images/Peercite Logo..png');
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: right top;
//     z-index: 10;
//     background-color: rgba(255, 255, 255, 0.95);
//     padding: 4px 8px;
//     border-radius: 4px;
//     box-shadow: 0 2px 5px rgba(0,0,0,0.2);
// }
// `;
//     css = css.replace('.publication-image img {', logoCSS + '\n.publication-image img {');
// }

// 2. Move H3 into the image
const newH3CSS = `
.publication-content {
    position: relative;
    padding: 1.5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.publication-content h3 {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 40px 1.2rem 15px 1.2rem;
    color: #ffffff;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    z-index: 5;
    font-size: 1.15rem;
    line-height: 1.4;
    box-sizing: border-box;
}
`;

css = css.replace(/\.publication-content\s*\{[\s\S]*?\.publication-content h3\s*\{[\s\S]*?\}/, newH3CSS.trim());

fs.writeFileSync('style.css', css, 'utf8');
console.log('Successfully updated publication card CSS.');
