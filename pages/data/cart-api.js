import { findById } from '../../js/utils.js'

const CART = "CART";

export function getCart() {
  const retrievedCart = localStorage.getItem(CART) || [];
  const parsedCart = retrievedCart.length ? JSON.parse(retrievedCart) : retrievedCart;
  return parsedCart;
}

export function addToCart(productObject, quantity) {
  let cart = getCart();
  const lineItem = findById(cart, productObject.id);
  
  if (lineItem) {
    lineItem.quantity += quantity;
  } else {
    const newLineItem =
      {
        id: productObject.id,
        quantity
      };
    cart.push(newLineItem);
  }
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem(CART, stringifiedCart);
}

export function clearCart() {
  localStorage.removeItem(CART);
}