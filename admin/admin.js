import { PRODUCTS } from '../constants.js';
import { getLocalStorageHats } from '../utils.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();


    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const imagePath = data.get('imagePath');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');


    const newHat = {
        id: id,
        name: name,
        imagePath: imagePath,
        description: description,
        category: category,
        price: Number(price),
    };

    const localStorageHats = getLocalStorageHats();
    localStorageHats.push(newHat);

    const stringyLocalHats = JSON.stringify(localStorageHats);
    localStorage.setItem(PRODUCTS, stringyLocalHats);
});