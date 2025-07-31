"use strict";
const cartValue = [
    { item: "keyboard", price: 30 },
    { item: "monitor", price: 180 },
    { item: "coat", price: 70 },
    { item: "bracelet", price: 17 },
];
//map
const discount = cartValue.map((i) => {
    return {
        item: i.item,
        price: i.price - i.price / 2,
    };
});
//filter
const greaterThan50 = cartValue.filter(i => i.price > 50);
//find
const FindValue = cartValue.find(i => i.item == "keyboard");
//reduce
const totalSum = cartValue.reduce((acc, i) => acc + i.price, 0);
//some
const someValue = cartValue.some(i => i.price > 20);
//every
const everyValue = cartValue.every(i => i.price > 20);
console.log(everyValue);
