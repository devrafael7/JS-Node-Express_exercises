"use strict";
//Factorial
function Factorial(n) {
    return n <= 1 ? 1 : n * Factorial(n - 1);
}
;
//console.log(Factorial(5))
//Combination
function Combination(n, k) {
    return Factorial(n) / (Factorial(k) * Factorial(n - k));
}
;
console.log(Combination(5, 2));
