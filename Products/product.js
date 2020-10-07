import { createProduct } from '../Products/product-utils';
import hats from '../Products/hats';

const productList = document.querySelector('#product-list');

for (let i = 0; i < hats.length; i++) {
  const product = createProduct(hats[i]);
  productList.append(product);
}