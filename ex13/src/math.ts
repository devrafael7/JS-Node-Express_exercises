//Factorial

function Factorial(n: number): number {
    return n <= 1 ? 1 : n * Factorial(n - 1);
};

//console.log(Factorial(5))

//Combination

function Combination(n: number, k: number) : number {
    return Factorial(n) / (Factorial(k) * Factorial(n - k));
};

//console.log(Combination(5,2))

//Permutation with repetition

//const result = Factorial(n) / (Factorial(p0) * Factorial(p1) * Factorial(p2)...); 




