"use strict";
const userCart = [
    { product: 'shoes', price: 29.99, quantity: 1, size: '38' },
    { product: 'cap', price: 9.99, quantity: 1 },
    { product: 'earring', price: 5.99, quantity: 2 }
];
//map()
//console.log(userCart.map(i => i));
const totalPrice = userCart.map(i => i.quantity * i.price);
//console.log(totalPrice)
const userCartTotal = userCart.map(i => (Object.assign(Object.assign({}, i), { price: i.price * i.quantity })));
console.log(userCartTotal);
function RemoveItemFromCart(name) {
    return userCartTotal.map(item => {
        if (item.product === name) {
            if (item.quantity > 1) {
                return Object.assign(Object.assign({}, item), { quantity: item.quantity - 1, price: (item.price / item.quantity) * (item.quantity - 1) });
            }
            return null;
        }
        return item;
    }).filter(item => item !== null);
}
console.log(RemoveItemFromCart('cap'));
