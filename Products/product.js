import { createProduct } from './product-utils';
import hats from '../../js/hatsData.js';

const productList = document.querySelector('#product-list');

for (let i = 0; i < hats.length; i++) {
  const product = createProduct(hats[i]);
  productList.append(product);
}