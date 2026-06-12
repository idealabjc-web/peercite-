const fs = require('fs');

const css = `
/* Authors Grid Styling added to align three per row */
.authors-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.author-card {
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    border: 1px solid #eaeaea;
}

.author-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.author-img-wrapper {
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #00A651; /* Using their primary green color */
}

.author-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.author-info h3 {
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: #333;
}

.author-role {
    color: #00A651;
    font-size: 0.9rem;
}

@media (max-width: 992px) {
    .authors-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .authors-grid {
        grid-template-columns: 1fr;
    }
}
`;

fs.appendFileSync('style.css', css);
console.log('Appended successfully');
