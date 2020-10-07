import cart from '../pages/data/cartData';
import hats from '../Products/hats';
import { findById, createNewElement } from 'utils.js';
import { renderLineItem, calcOrderTotal } from '../pages/data/cart-utils';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

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