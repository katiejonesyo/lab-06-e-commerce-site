import renderProdcuts from '../Products/render-products.js';

const test = QUnit.test;

test('renders hats', (expect) => {
    const hats = {
        id: 'hats',
        name: 'Fancy Hat',
        image: 'fancy.png',
        description: 'This purple top hat is meant for out fanciest of occasions.',
        category: 'fancy',
        price: 20.00,
        cost: 2.00
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProdcuts(hats);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual.outerHTML);
});