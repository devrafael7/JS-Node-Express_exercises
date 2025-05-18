"use strict";
const userCart = [
    { product: 'shoes', price: 109.99, quantity: 1, size: '38' },
    { product: 'cap', price: 9.99, quantity: 2 },
    { product: 'earring', price: 5.99, quantity: 2 }
];
//map()
//console.log(userCart.map(i => i));
const totalPrice = userCart.map(i => i.quantity * i.price);
//console.log(totalPrice)
const userCartTotal = userCart.map(i => (Object.assign(Object.assign({}, i), { price: i.price * i.quantity })));
console.log(userCartTotal);
//filter()
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
//forEach()
userCartTotal.forEach(i => console.log(i.price * i.quantity));
//find()
function FindItem(nameSearch) {
    console.log(userCartTotal.find(i => i.product == nameSearch));
}
;
FindItem('earring');
function FindIndexOfItem(nameSearch) {
    console.log(userCartTotal.findIndex(i => i.product === nameSearch));
}
;
FindIndexOfItem('earring');
function IsItMoreThan50() {
    userCartTotal.forEach(i => console.log(`${i.product}: ${i.price >= 50}`));
    const hasItemMoreThan50 = userCartTotal.some(i => i.price >= 50);
    console.log(`Is There some value more or equals 50? ${hasItemMoreThan50}`);
}
IsItMoreThan50();
