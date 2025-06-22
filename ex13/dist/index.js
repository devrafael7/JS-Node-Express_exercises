"use strict";
//console.log("hello world!")
//1
function describeUser(name, age, isAdmin) {
    return `${name} is ${age} years old and admin: ${isAdmin}`;
}
const ShoppingCart = [];
function AddProduct(p) {
    ShoppingCart.push(p);
}
function ProductType(ProductName, ProductPrice) {
    const Product = { name: ProductName, price: ProductPrice };
    AddProduct(Product);
    console.log(ShoppingCart);
}
ProductType('Mouse', 50);
