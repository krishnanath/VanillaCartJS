 'use strict';
 let cart = [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
 addToCartButtonsDOM.forEach(addToCartButtonDOM => {
     addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        
     const product = {
        image: productDOM.querySelector('.product__image').getAttribute('src'),
         name: productDOM.querySelector('.product__name').innerText,
         price: productDOM.querySelector('.product__price').innerText,

        quantity: 1,

     };
//   cart.forEach(cartItem => {
//       console.log(cartItem.name === product.name);
//   });
const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
if (!isInCart) {
cartDOM.insertAdjacentHTML('beforeend', `
<div class="cart__item">
<img class="cart__item__image" src="${product.image}" alt="${product.name}">
<h3 class="class_item_name">${product.name}</h3>
<h3 class="class__item_price">${product.price}</h3>
<button class="btn btn--primary btn--small" data-action="DECREASE_ITEM">&minus;</button>
<h3 class="cart__item__quantity">${product.quantity}</h3>
<button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
<button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>

</div>
`);   
cart.push(product);
addToCartButtonDOM.innerText = 'In Cart';

const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
cartItemsDOM.forEach(cartItemDOM => {
cartItemDOM.querySelector('[data-action="INCREASE_ITEM]').addEventListener('click', () => {
 console.log(cartItemDOM);
});
});

}
      
    });
 });