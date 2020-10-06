import hats from '../Data/data.js';
import renderProducts from './render-products.js';

const unorderedListElements = document.getElementById('hats');

for (let i = 0; i < hats.length; i++) {
    const hats = hats[i];
    const el = renderProducts(hats);
    unorderedListElements.appendChild(el);
};