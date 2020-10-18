//import cart from '../pages/data/cartData.js';
import { hats } from '../products/hats.js';
import { findById, createNewElement } from '../utils.js';
import { renderLineItem, calcOrderTotal } from '../pages/data/cart-utils.js';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const stringyCart = localStorage.getItem('HATS');
const cart = JSON.parse(stringyCart);


for (let i = 0; i < cart.length; i++) {
  const product = findById(hats, cart[i].id);
  const lineItem = renderLineItem(cart[i], product);

  tbody.append(lineItem);
}

// create order total
const subTotalPrice = calcOrderTotal(cart, hats);
const subTotalString = `$${subTotalPrice.toFixed(2)}`

const subTotalFooter = createNewElement('tfoot');
const subTotalTr = createNewElement('tr');
const spacerTh = createNewElement('th');
const totalTextTh = createNewElement('th', 'Total: ');
const subTotalTh = createNewElement('th', subTotalString);

spacerTh.colSpan = 2;

subTotalFooter.append(subTotalTr);
subTotalTr.append(spacerTh, totalTextTh, subTotalTh);

table.append(subTotalFooter);


