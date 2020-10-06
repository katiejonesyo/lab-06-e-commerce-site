import hats from '../Data/data.js';
import renderProducts from './render-products.js';

const unorderedListElements = document.getElementById('hat');

for (let i = 0; i < hats.length; i++) {
    const hats = hat[i];
    const el = renderProducts(hats);
    unorderedListElements.appendChild(el);
};



