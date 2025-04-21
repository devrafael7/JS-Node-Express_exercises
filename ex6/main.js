const { totalmem } = require('os');
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
    if (num < 2) {
        console.log(`${num} is not a prime number`);
        return;
    } 

    for (let i = 2; i <= Math.sqrt(num); i ++){
        if ( num % i === 0){
            console.log(`${num} is not a prime number`);
            return;
        }
    }

    console.log(`${num} is a prime number!`)
}

//PrimeNumber(7)

//console.log(`Random number generated: ${Math.floor(Math.random() * 1) + 5}`);

function areaOfACircle(radium){
    const result = Math.PI * Math.pow(radium, 2);
    console.log(result);
}

//areaOfACircle(7)

function multipleNumber(num, multipleNum){
    if (num % multipleNum === 0) {
        console.log('its multiple');
    } else {
        console.log('its not multiple');
    }
};

//multipleNumber(8, 3)

function milesToKmConverter(miles){
    let result = miles * 1.60934
    console.log(`${result}`)
}

//milesToKmConverter(5)

function ehPerfeito(num) {
  let soma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) soma += i;
  }
  return soma === num;
}

//ehPerfeito(3)

function arithmeticMean(){
    rl.question('Enter the numbers you want with space between them: ', (input)=>{
        const numbers = input.split(" ").map(Number);

        sum = 0

        numbers.forEach(num =>{
            sum += num
        })

        const result = sum / numbers.length;
        console.log(`The result is ${result}`);
  
        rl.close();
    })
}

//arithmeticMean();

function foundANumberPositionPA(position){
    let randomTerm = Math.floor((Math.random() * 10) + 1); 
    for (let i = randomTerm; i <= 30; i += randomTerm){
        console.log(i)
    }
    let NumberFound = randomTerm + (position - 1) * randomTerm
    console.log(`The ${position} of the number in PA is ${NumberFound}`)
}

//foundANumberPositionPA(10);

function sumPA(quantity, a1, an){
    let randomTerm = Math.floor((Math.random() * 10) + 1); 
    const PA = [];
    for (let i = randomTerm; i <= 100; i += randomTerm){
        console.log(i);
        PA.push(i);
    };
    const sumOfPA = (quantity / 2) * (PA[a1 - 1] + PA[an - 1])
    console.log(`The sum between the numbers of PA is ${sumOfPA}`)
};

//sumPA(3, 1, 3);

function volumeOfSphere(r){
    result = (4/3) * Math.PI * Math.pow(r, 3);
    console.log(result);
    process.exit();
};

//volumeOfSphere(12)

function deltaCalc(a, b, c){
    const result = Math.pow(b, 2) - 4 * a * c;
    console.log(result);
}

//deltaCalc(2, 3, -2)-

function periOfACircle(radium){
    const perimeter = 2 * Math.PI * parseFloat(radium);
    console.log(perimeter);
    process.exit();
};

//periOfACircle(3)

function sumOfComplexNumbers(a, c, bi, di){
    const z1 = a + bi
    const z2 = c + di
    const separation = z1 + " " + z2;
    console.log(separation);
};

//sumOfComplexNumbers(2, 6, 2, 5);

function discountCalc(){
    const price = Math.floor(Math.random() * 1000) + 1;
    let randomDiscount = Math.floor(Math.random() * 60) + 1;
    const discount = (randomDiscount / 100);
    const finalPrice = price - (price * discount);
    console.log(`The original price is: ${price}`);
    console.log(`The discount applied is: ${discount}`);
    console.log(`The final price of the product is: ${finalPrice}`);
}

//discountCalc();

function perfectSquare(n){
    let max = 5000;
    let ps = false
    for (let i = 0; i <= max; i++){
        if (i * i === n){
            console.log(`${n} is a perfect square`);
            ps = true;
            break;
        };

        if (i === max && i != true){
            console.log(`${n} is not a perfect square`)
        }
    }

}

//perfectSquare(627)

function fiTable(){
    let numSeq = [12, 13, 14, 15, 14, 13, 12, 15, 16, 16, 14, 13, 13, 12, 13, 13, 14, 14, 13, 14, 12, 14, 15, 14, 12];

    let orgSeq = numSeq.sort();

    numSeq.forEach(num =>{
        parseInt(num)
    })

    console.log(orgSeq)

    let count = orgSeq.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let fi = Object.values(count);

    let seqSize = orgSeq.length;
    console.log(seqSize)

    console.log(fi)

    let friArray = []
    let fri = 0
    fi.forEach(num =>{
        fri = (((num / seqSize) * 100).toFixed(2))
        fri = parseFloat(fri)
        friArray.push(fri);
    })

    console.log(friArray)

    let friSum = friArray.reduce((acc, num) => num > 0 ? acc + num: acc, 0)

    console.log(friSum)

    let Fi = fi.reduce((acc, num) => num > 0 ? acc + num : acc, 0);

    console.log(Fi)

}

//fiTable();

function typeOfVariation(){
    let numSeq = [0, 50, 50, 100, 100, 150, 150, 200, 200, 250, 250, 300]
    let numSeqResult = []

    for (let i = 0; i < numSeq.length - 1; i += 2) {
        numSeqResult.push((numSeq[i] + numSeq[i + 1])/ 2);
    };

    console.log(numSeqResult)

    let fi = [3, 8, 28, 57, 90, 14]

    let sumArray = []
    sumArray = numSeqResult.map((num, i) => num * fi[i]);

    console.log(sumArray)

    let sumResult = sumArray.reduce((acc, num) => acc + num, 0);

    console.log(sumResult)

    let sumFi = fi.reduce((acc, i) => acc + i, 0)
    console.log(sumFi)

    const averageResult = Number((sumResult / (sumFi - 1)).toFixed(2));
    console.log(averageResult);

    let varianceArray = numSeqResult.map((f, i) => fi[i] * (f - averageResult) ** 2);
    console.log(varianceArray);

    let sumVA = varianceArray.reduce((acc, i) => acc + i, 0);
    console.log(sumVA)

    const varianceResult = sumVA / (sumFi);
    console.log(varianceResult);

    const defaultDeviation = Number(Math.sqrt(varianceResult).toFixed(1))
    console.log(defaultDeviation)

    const finalResult = ((defaultDeviation / averageResult) * 100).toFixed(0) + "%";
    console.log(finalResult);
}

//typeOfVariation();


function FindCV(){
    const mainNumbers = [148, 170, 155, 131];

    let numbersSum = 0;
    for (i of mainNumbers){
        numbersSum += i;
    };
    console.log(numbersSum);

    const average = numbersSum / mainNumbers.length;
    console.log(average);

    let squareOfDeviation = 0;
    for (i of mainNumbers){
        squareOfDeviation += (i - average)**2;
    };
    console.log(squareOfDeviation);

    const AverageOfsquareOfDeviation = squareOfDeviation / mainNumbers.length;
    console.log(AverageOfsquareOfDeviation);

    const standartDeviation = Math.sqrt(AverageOfsquareOfDeviation).toFixed(0);
    console.log(standartDeviation);

    const CV = ((standartDeviation / average) * 100).toFixed(0);
    console.log(`${CV}% - Small variation`);
}

//FindCV();

function CVWClass (){
    const numbersClass = [1,2,3,4,5];
    const numbersInteval = [70,80,90,100,110,120];
    const fi = [8,14,12,16,10];

    let midPoint = [];
    for (i of numbersInteval){
        if (i != 120){
            midPoint.push((i + (i + 10))/2);
        };
    };

    console.log(midPoint);

    let soloAverage = [];
    for (let i = 0; i < fi.length; i++){
        soloAverage.push(fi[i] * midPoint[i]);
    };
    console.log(soloAverage);

    let sumAverage = 0;
    for (i of soloAverage){
        sumAverage += i;
    };
    console.log(sumAverage);

    let soloSumOfFi = [];

    let sumOfFi = 0;
    for (i of fi){
        sumOfFi += i;
        soloSumOfFi.push(sumOfFi);
    };

    console.log(soloSumOfFi);

    const average = sumAverage / sumOfFi;
    console.log(`${average}Km/h`);

    function findMedian(){
        const medianLocation = sumOfFi / 2;
        let nearestNumber = soloSumOfFi[0];

        for (let i = 1; i <= soloSumOfFi.length; i++){
            if (Math.abs(soloSumOfFi[i] - medianLocation) < (Math.abs(nearestNumber - medianLocation))){
                nearestNumber = soloSumOfFi[i];
            };
        };

        return nearestNumber
    };

    findMedian();

    console.log(findMedian());
    
    const medianClass = numbersInteval[2];
    console.log(medianClass);

    function FindMd(){
        const Li = medianClass;
        const n = sumOfFi;
        const F = soloSumOfFi[1];
        const f = fi[2];
        const h = numbersInteval[3] - medianClass;
    
        const Md = (Li + ((((n / 2) - F) / f) * h)).toFixed(2);
        return Md;
    };
    console.log(FindMd());

    function FindMo(){
        const higherFrequency = Math.max(...fi);
        const Li = numbersInteval[3];
        const hf = fi[3];
        const previousHf = fi[2];
        const posteriorHf = fi[4];
        const h = numbersInteval[4] - numbersInteval[3];

        const Mo = (Li + (((hf - previousHf) / (2 * hf -  previousHf - posteriorHf))*h));
        
        return `${Mo}Km/h`;
    };
    console.log(FindMo());

    function FindS(){
        let soloSumOfS = [];

        let stepsToFindS = 0;
        for(let i = 0; i <= fi.length; i++){
            stepsToFindS += fi[i] * ((midPoint[i] - average)**2);
            if (!isNaN(stepsToFindS)){
                soloSumOfS.push(stepsToFindS);
            }
        };
        const totalSumOfS = Math.max(...soloSumOfS);

        S = totalSumOfS / sumOfFi;
        return S;
    };
    console.log(FindS());

    const standartDeviationOfS = Math.sqrt(FindS());
    console.log(standartDeviationOfS);

    const CV = ((standartDeviationOfS / FindMd()) * 100).toFixed(2);
    console.log(`CV${CV}`);
};

//CVWClass();

function FindstandartDeviation(){
    const numbers = [1, 8, 3, 255, 46, 78, 9, 12, 3, 5, 125, 277, 289, 485, 589, 234, 67, 89].sort();

    console.log(numbers)

    let sumOfNumbers = 0;
    for (i of numbers){
        sumOfNumbers += i;
    };
    const avg = sumOfNumbers / numbers.length;

    let numbersSquared = 0;
    for (i of numbers){
        numbersSquared += (i - avg)**2;
    };

    const numbersSquaredAvg = numbersSquared / numbers.length;

    const populationStandartDeviation = Math.sqrt(numbersSquaredAvg);
    console.log(populationStandartDeviation.toFixed(2));
};

//FindstandartDeviation(0);


