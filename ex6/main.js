const readline = require('readline');
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