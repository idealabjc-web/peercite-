const fs = require('fs');
let data = fs.readFileSync('journals-data.js', 'utf8');
data = data.replace(/pdf:\s*['"]([^'"]+)['"]/g, (match, p1) => {
    if (!p1.startsWith('assets/pdfs/')) {
        return 'pdf: \'' + p1 + '\'';
    }
    return match;
});
fs.writeFileSync('journals-data.js', data);
console.log('Fixed PDF paths!');
