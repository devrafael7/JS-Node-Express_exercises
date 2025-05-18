"use strict";
const userCart = [
    { product: 'shoes', price: 29.99, quantity: 1, size: '38' },
    { product: 'cap', price: 9.99, quantity: 2 },
    { product: 'earring', price: 5.99, quantity: 2 }
];
//map()
//console.log(userCart.map(i => i));
const totalPrice = userCart.map(i => i.quantity * i.price);
console.log(totalPrice);
const userCartTotal = userCart.map(i => (Object.assign(Object.assign({}, i), { price: i.price * i.quantity })));
console.log(userCartTotal);
