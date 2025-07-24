"use strict";
class Product {
    //Instance
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    ;
    //Method
    show() {
        console.log(this.name + this.price + this.quantity);
    }
    totalValue() {
        return this.price * this.quantity;
    }
    ;
}
;
const prod1 = new Product("Notebook", 850.90, 4);
prod1.show();
console.log("Total value in stock" + prod1.totalValue());
