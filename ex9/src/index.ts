function Sum(num1: number, num2: number) : number {
    return num1 + num2
};

//console.log(Sum(1,2))

function IsEven(num: number) : any{
    if (num % 2 === 0){
        return num + ' is an even number!';
    } else if (num % 2 != 0) {
        return num + ' is an odd number!';
    } else {
        return 'there was an error with your number' ;
    };
};

//console.log(IsEven(1));

function IsEvenBooleanMode(num: number) : boolean {
    return num % 2 === 0;
};

//console.log(IsEvenBooleanMode(2))

type User = {
    name: string;
    age: number;
};

const randomUser: User = {
    name: "Maria",
    age: 21
};

//console.log(randomUser);

const fruitArray: string[] = ['banana', 'apple', 'lemon', 'strawberry'];
//fruitArray.forEach(fruit => console.log(fruit));

const numberArray: number[] = [1,2,3,4,5];
//numberArray.forEach(num => console.log(num));

//for (let i = 1; i <= 5; i++){
//    console.log(i);
//};

function VerifySignOfTheNumber(num: number) : any {
    if (num === 0){
        return `${num} just equals 0!`;
    } else if (num > 0) {
        return `${num} is a positive number!`;
    } else if (num < 0) {
        return `${num} is a negative number`;
    } else {
        return "something went wrong with your number, i'm sorry :(";
    };
};

//console.log(VerifySignOfTheNumber(-1));

enum OrderStatus {
    Pending = "PENDING",
    Sent = "SENT",
    Delivered = "DELIVERED"
}

const order = {
    id: 13,
    status: OrderStatus.Delivered
};

//console.log(order);

interface Product {
    name: string;
    price: number;
    applyDiscount(percentage: number) : number;
};

const notebook: Product = {
    name: "Notebook",
    price: 1200,
    applyDiscount(percentage) {
        return this.price - (this.price * percentage) / 100;
    }
};

//console.log(notebook.applyDiscount(50));

