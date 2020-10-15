import { createNewElement, findById } from '../utils.js';
import { hats } from './hats.js';

export function createProduct(productObject) {
  const { id, name, imagePath, description, category, price, alt } = productObject;

  const li = createNewElement("li", '', { id, className: "product" });
  const h4 = createNewElement("h4", name, { className: "product--name" });
  const img = createNewElement("img", null, {
    src: `../${imagePath}`,
    className: "product--image",
    alt,
  });
  const descriptionP = createNewElement('p', description, { className: "product--description" });
  const priceP = createNewElement('p', `Price: $${price.toFixed(2)}`, { className: "product--price" });
  const button = createNewElement('button', 'Add to cart', { id, value: id });

  button.addEventListener('click', () => {
    console.log('button was clicked')

  const myCart = []
  const itemInCart = findById(hats, hats.id)
  
  if (itemInCart === undefined) {
    const newItemInCart = { 
      id: hats.id, 
      quantity: 1
    };
  
    myCart.push(newItemInCart);
  } else {
      itemInCart.quantity++;

  }

  });


  li.append(h4, img, descriptionP, priceP, button);

  return li;
}