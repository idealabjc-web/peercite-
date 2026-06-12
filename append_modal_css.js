const fs = require('fs');

const css = `
/* Image Modal Styles for Full Screen Viewing */
.image-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    align-items: center;
    justify-content: center;
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    animation: zoom 0.3s ease;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #f1f1f1;
    font-size: 50px;
    font-weight: bold;
    transition: color 0.3s ease;
    cursor: pointer;
    z-index: 10000;
}

.close-modal:hover,
.close-modal:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

@keyframes zoom {
    from {transform: scale(0.5); opacity: 0;} 
    to {transform: scale(1); opacity: 1;}
}
`;

fs.appendFileSync('style.css', css);
console.log('Modal CSS appended successfully');
