
const defaultOptions = {
    id: '',
    className: '',
    src: '',
    alt: '',
    value: ''
  }
  
  export function createNewElement(elementType, textContent, optionalAttributes = defaultOptions) {
    // create element and set textContent
    const element = document.createElement(elementType);
    element.textContent = textContent;
  
    Object.keys(optionalAttributes).map(property => {
      if (optionalAttributes[property]) {
        element[property] = optionalAttributes[property];
      }
    });
  
    return element;
  }
  
  export function findById(productsArray, productId) {
    return productsArray.find(product => product.id === productId);
  }