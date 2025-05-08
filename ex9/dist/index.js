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
//console.log(notebook.applyDiscount(50));
function CalculateAverage(numbers) {
    const total = numbers.reduce((sum, current) => sum + current, 0);
    return total / numbers.length;
}
;
//console.log(CalculateAverage([2, 4, 6]));
function ValidateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
;
//console.log(ValidateEmail('rafael@gmail.com'));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Greeting() {
        return `Hi, my name is ${this.name} and i'm ${this.age}`;
    }
    ;
}
const rafa = new Person("Rafael", 19);
//console.log(rafa.Greeting());
function Divide(a, b) {
    if (b === 0)
        throw new Error("You're dividing by zero!");
    return a / b;
}
/*
try {
    console.log(Divide(10, 0));
} catch (erro) {
    console.log("Error: ", (erro as Error).message);
}
*/
function GetFirstElement(list) {
    return list[0];
}
function RunAction(action) {
    switch (action) {
        case "save":
            console.log("Saving it...");
            break;
        case "delete":
            console.log("Deleting it...");
            break;
        case "edit":
            console.log("Editing it...");
            break;
    }
}
const DB = [
    { email: "rafa@gmail.com", password: "123" },
    { email: "maria@gmail.com", password: "321" }
];
function SignIn(email, password) {
    return DB.some(user => user.email === email && user.password === password);
}
//console.log(SignIn("rafa@gmail.com", "123"));
function FindFactorial(n1) {
    let factorialN = n1;
    for (let i = (n1 - 1); i >= 1; i--) {
        factorialN *= i;
        console.log(factorialN);
    }
    ;
}
;
FindFactorial(6);
