import { calcLineItem, renderLineItem, calcOrderTotal } from '../pages/data/cart-utils.js';
import { hats } from "../products/hats.js"

const test = QUnit.test;

test('calcLineItem should return 50 if supplied 2 and 25', (expect) => {

    const expected = 50;
    const actual = calcLineItem(2, 25);

    expect.equal(actual, expected);
});

test('renderLineItem should return the expected line item as a html tr element', (expect) => {

    const mockedCartData = [
        {
            id: "fancyHat",
            quantity: 5
        }
    ];

    const expected = `<tr><td>Fancy Hat</td><td>5</td><td>$20.00</td><td>$100.00</td></tr>`;

    const actual = renderLineItem(mockedCartData[0], hats[0]);

    expect.equal(actual.outerHTML, expected);
});

test('calcOrderTotal should return the subtotal for all cart line items', (expect) => {

    const mockedCartData = [
        {
            id: "fancyHat",
            quantity: 5
        },
        {
            id: "casualHat",
            quantity: 2
        },
        {
            id: "rodeoHat",
            quantity: 3
        },
    ];

    const expected = 100 + 25 + 75;

    const actual = calcOrderTotal(mockedCartData, hats);

    expect.equal(actual, expected);
});