import { createProduct } from './product-utils.js';
import { hats } from './hats.js';

const productList = document.querySelector('#product-list');

for (let i = 0; i < hats.length; i++) {
  const product = createProduct(hats[i]);
  productList.append(product);
}

