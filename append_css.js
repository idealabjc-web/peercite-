const fs = require('fs');
let css = fs.readFileSync('style.backup.css', 'utf8');

const newCSS = `
/* ==================== SPEAKERS MARQUEE ==================== */
.speakers-marquee-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 2rem 0;
    background: transparent;
}

.speakers-marquee-track {
    display: flex;
    gap: 2rem;
    width: max-content;
    will-change: transform;
}

.speaker-card {
    flex: 0 0 auto;
    width: 250px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    border: 1px solid rgba(0,0,0,0.05);
}

.speaker-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.speaker-img-wrapper {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: #f8fafc;
}

.speaker-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.speaker-card:hover .speaker-img-wrapper img {
    transform: scale(1.05);
}

.speaker-info {
    padding: 1.5rem;
    background: #fff;
}

.speaker-info h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #0f172a;
    font-weight: 700;
}

.speaker-info span {
    display: block;
    font-size: 0.9rem;
    color: #059669;
    font-weight: 500;
}
`;

fs.writeFileSync('style.css', css + newCSS, 'utf8');
console.log('Successfully appended CSS to style.css from backup');
