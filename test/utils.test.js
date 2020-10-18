import { findById, createNewElement } from '../utils.js';
import { hats }from '../products/hats.js';

const test = QUnit.test;

test('createNewElement can create a table data element as expected', (expect) => {

    const expected = `<td id="fancyHat-item" class="line-item">Fancy Hat</td>`;

    const actual = createNewElement('td', 'Fancy Hat', { id: "fancyHat-item", className: "line-item" });

    expect.equal(actual.outerHTML, expected);
});

test('createNewElement can create an image element as expected', (expect) => {

    const expected = `<img class="product--image" src="../../assets/fancy.png">`;

    const actual = createNewElement('img', '', { className: "product--image", src: "../../assets/fancy.png" });

    expect.equal(actual.outerHTML, expected);
});

test('createNewElement can create an table data element with colspan as optional arg', (expect) => {

    const expected = `<td id="fancyHat-item" class="line-item" colspan="3">Fancy Hat</td>`;

    const actual = createNewElement('td', 'Fancy Hat', { id: "fancyHat-item", className: "line-item", colSpan: 3 });

    expect.equal(actual.outerHTML, expected);
});


test('findById will return the fancyHat product if supplied products and "fancyHat"', (expect) => {

    const expected = {
        id: "fancyHat",
        name: "Fancy Hat",
        imagePath: "../assets/fancy.png",
        description: "Fancy purple top hat accompanied with a purple vegan feather. Wear this for special occasions.",
        category: "Fancy",
        price: 20,
    };

    const actual = findById(hats, "fancyHat");

    expect.deepEqual(actual, expected);
});
