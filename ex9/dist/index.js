"use strict";
function Sum(num1, num2) {
    return num1 + num2;
}
;
//console.log(Sum(1,2))
function IsEven(num) {
    if (num % 2 === 0) {
        return num + ' is an even number!';
    }
    else if (num % 2 != 0) {
        return num + ' is an odd number!';
    }
    else {
        return 'there was an error with your number';
    }
    ;
}
;
//console.log(IsEven(1));
function IsEvenBooleanMode(num) {
    return num % 2 === 0;
}
;
const randomUser = {
    name: "Maria",
    age: 21
};
//console.log(randomUser);
const fruitArray = ['banana', 'apple', 'lemon', 'strawberry'];
//fruitArray.forEach(fruit => console.log(fruit));
const numberArray = [1, 2, 3, 4, 5];
//numberArray.forEach(num => console.log(num));
//for (let i = 1; i <= 5; i++){
//    console.log(i);
//};
function VerifySignOfTheNumber(num) {
    if (num === 0) {
        return `${num} just equals 0!`;
    }
    else if (num > 0) {
        return `${num} is a positive number!`;
    }
    else if (num < 0) {
        return `${num} is a negative number`;
    }
    else {
        return "something went wrong with your number, i'm sorry :(";
    }
    ;
}
;
//console.log(VerifySignOfTheNumber(-1));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Sent"] = "SENT";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
const order = {
    id: 13,
    status: OrderStatus.Delivered
};
;
const notebook = {
    name: "Notebook",
    price: 1200,
    applyDiscount(percentage) {
        return this.price - (this.price * percentage) / 100;
    }
};
console.log(notebook.applyDiscount(50));
