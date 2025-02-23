const readline = require('readline');
const { isNull } = require('util');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(){
    rl.question('Enter the first number: ',(num1) => {
        rl.question('Enter the second one: ', (num2) => {
            const sum = parseFloat(num1) + parseFloat(num2);
            console.log(`The result is ${sum}`);
            rl.close();
        });
    });
};

//sum();

function subtract(){
    rl.question('Enter the first number: ',(num1)=> {
        rl.question('Enther the second one: ', (num2)=>{
            const subtract = parseFloat(num1) - parseFloat(num2);
            console.log(`The result is: ${subtract}`);
            rl.close();
        });
    });
};

//subtract();

function multiply(){
    rl.question('Enter the first number: ',(num1)=>{
        rl.question('Enter the second one: ', (num2)=>{
            const multiplication = parseFloat(num1) * parseFloat(num2);
            console.log(`The result of the multiplication is: ${multiplication}`);
            rl.close();
        });
    });
};

//multiply();

function division(){
    rl.question('Enter the first number: ',(num1)=>{
        rl.question('Enter the second one: ', (num2)=>{
            const division = parseFloat(num1) / parseFloat(num2);
            console.log(`The result of the multiplication is: ${division}`);
            rl.close();
        });
    });
};

//division();

function Power(a, b){
    console.log(`The number ${a}, raised to the power of ${b} is: ${Math.pow(a, b)}`);
}

//Power(2, 3)

function squareRoot(num){
    console.log(`The squareRoot of the number is: ${Math.sqrt(num)}`);
}

//squareRoot(9)

function absoluteValue(num){
    console.log(`The absolute value of ${num} is: ${Math.abs(num)}`);
}

//absoluteValue(-8930)

function factorial(num){
    result = 1;

    for (let i = 1; i <= num; i++){
        result *= i;
        console.log(result)
    }
}

//factorial(5)

function fahrenheit(celsius){
    const result = (parseFloat(celsius) * 1.8) + 32;
    console.log(result)
}

//fahrenheit(32)

function celsius(fah){
    const result = (parseInt(fah) - 32) / 1.8;
    console.log(result)
}

//celsius(89.6)

function MaxAndMin(){
    rl.question('Enter 3 numbers separate by space: ', (input)=>{
        const numbers = input.split(" ").map(Number);
        console.log(`Largest: ${Math.max(...numbers)}, Smallest: ${Math.min(...numbers)}`)
        rl.close()
    })
}

//MaxAndMin();

function PrimeNumber(num){
    for (let i = 2; i <= num; i++){
        let multiplierNumber = num / i
        let primeNum = False
        if (multiplierNumber % 2 == 0 && i != num){
            console.log(`The number ${num} is not a prime number`);
            let primeNum = True
        } 
        if (primeNum){
            break;
        }
    }
    console.log(`The number ${num} is a prime number`)
}

PrimeNumber(8)