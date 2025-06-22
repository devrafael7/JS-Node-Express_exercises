"use strict";
//1
const totalSides = 6;
const greaterThan4 = [5, 6];
//console.log((greaterThan4.length/totalSides) * 100 + "%");
//2
const coinsSides = ['heads', 'tails'];
const headsProbability = 1 / coinsSides.length;
//console.log(headsProbability * 100 + "%");
//3
const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
//console.log(factorial(5));
//4
const combinationOf5By2 = (n, interval) => {
    return (factorial(n) / (factorial(interval) * factorial(n - interval)));
};
console.log(combinationOf5By2(5, 2));
