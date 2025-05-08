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

function CalculateAverage(numbers : number[]) : number {
    const total = numbers.reduce((sum, current) => sum + current, 0);
    return total / numbers.length;
};

//console.log(CalculateAverage([2, 4, 6]));

function ValidateEmail(email: string) : boolean {
    return /\S+@\S+\.\S+/.test(email);
};

//console.log(ValidateEmail('rafael@gmail.com'));

class Person {
    constructor(public name: string, public age : number) {}
    
    Greeting() : string {
        return `Hi, my name is ${this.name} and i'm ${this.age}`;
    };
}

const rafa = new Person("Rafael", 19);
//console.log(rafa.Greeting());

function Divide(a: number, b: number) : number {
    if (b === 0) throw new Error("You're dividing by zero!");
    return a / b;
}

/*
try {
    console.log(Divide(10, 0));
} catch (erro) {
    console.log("Error: ", (erro as Error).message);
}
*/

function GetFirstElement<T>(list: T[]) : T | undefined {
    return list[0];
}

//console.log(GetFirstElement([1, 2, 3]));
//console.log(GetFirstElement(["a", "b"]));

type Action = "save" | "delete" | "edit";

function RunAction(action: Action) {
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

//RunAction("delete");

type UserDB = {
    email: string;
    password: string;
};

const DB: UserDB[] = [
    { email: "rafa@gmail.com", password: "123" },
    { email: "maria@gmail.com", password: "321" }
];

function SignIn(email: string, password: string) : boolean {
    return DB.some(user => user.email === email && user.password === password);
}

//console.log(SignIn("rafa@gmail.com", "123"));


function FindFactorial(n1: number) {
    let factorialN: number = n1;

    for (let i: number = (n1 - 1); i >= 1; i --){
        factorialN *= i;
        console.log(factorialN);
    };
};

//FindFactorial(6);