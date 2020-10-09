import { createNewElement, findById } from '../../utils.js';
import { getLocalStorageHats } from 'admin/admin.js';

export function calcLineItem(quantity, amount) {
  return quantity * amount;
}

export function renderLineItem(cartItem, productObject) {
  const subTotalNumber = calcLineItem(cartItem.quantity, productObject.price);
  const subTotalString = `$${subTotalNumber.toFixed(2)}`;
  const priceString = `$${productObject.price.toFixed(2)}`

  

  const tr = createNewElement('tr');
  const name = createNewElement('td', productObject.name);
  const quantity = createNewElement('td', cartItem.quantity);
  const price = createNewElement('td', priceString);
  const subTotal = createNewElement('td', subTotalString);

  tr.append(name, quantity, price, subTotal);

  return tr;
}

export function calcOrderTotal(cart, products) {
  return cart.reduce((subTotal, currentItem) => {
    const bookInData = findById(products, currentItem.id);
    const lineItemTotal = bookInData.price * currentItem.quantity;
    return subTotal += lineItemTotal;
  }, 0)
}