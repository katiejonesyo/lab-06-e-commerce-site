// IMPORT MODULES under test here:
import { createProduct } from '../Products/product-utils.js';
import hats from '../Products/hats.js';

const test = QUnit.test;

test('createProduct can create a fancyHat <li>', (expect) => {

    const expected = `<li id="fancyHat" class="product"><h4 class="product--name">Fancy Hat</h4><img src="../../assets/fancy.png" class="product--image"><p class="product--description">Fancy purple top hat accompanied with a purple vegan feather. Wear this for special occasions.</p><p class="product--price">Price: $20.00</p><button id="fancyHat" value="fancyHat">Add to cart</button></li>`;

    const fancyHat = hats[0];

    const actual = createProduct(fancyHat).outerHTML;

    expect.equal(actual, expected);
});

test('createProduct can create a casualHat <li>', (expect) => {

    const expected = `<li id="casualHat" class="product"><h4 class="product--name">Casual Hat</h4><img src="../../assets/Casual.png" class="product--image"><p class="product--description">Need day to day casual wear? We've got you covered. This hat will work with just about any outfit.</p><p class="product--price">Price: $20.00</p><button id="casualHat" value="casualHat">Add to cart</button></li>`;

    const casualHat = hats[5];

    const actual = createProduct(casualHat).outerHTML;

    expect.equal(actual, expected);
});