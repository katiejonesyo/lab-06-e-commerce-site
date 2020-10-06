function renderProducts(hats) {
    const li = document.createElement('li');
    li.classList.add(hats.category);
    li.title = hats.description;

    const h3 = document.createElement('h3');
    h3.textContent = hats.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + hats.image;
    img.alt = `${hats.name}image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${hats.price.toFixed(2)}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = hats.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;

