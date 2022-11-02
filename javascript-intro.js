let a = 10;
let b = 20;
const c = 40;
let d = 1.45;

let s1 = "This is a string.";
let s2 = 'This is another string';

const True = true;
const Flase = false;

const sum1 = a + b * c - d * c / a;

let s3 = `This is a string with computed values. ${sum1}.`;
console.log(s3);

const isS1EqualToS2 = s1 == s2;
console.log(isS1EqualToS2);



function sumUntilN(N=10) {
    let s = 0;
    for (let i = 0; i < N; i++) {
        s = s + i;
    }
    return s;
}

function productUntilN(N=20) {
    let p = 1;
    for (let i = 1; i < N; i++) {
        p = p * i;
    }
    return p;
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isDivisible(num, divisor) {
    const quotient = num % divisor;
    if (quotient == 0) {
        return true;
    } 

    return false;
}

const listOfNumbers = [1, 2, 3, 4, 21, 25, 50];
const divisor = 3;

for (let i = 0; i < listOfNumbers.length; i++) {
    let isEvenNumber = isEven(listOfNumbers[i]);
    if (isEvenNumber == true) {
        console.log(`${listOfNumbers[i]} is even.`);
    }
}

const divisibleBy3 = [];
for (const el of listOfNumbers) {
    let isDivisibleBy3 = isDivisible(el, divisor);
    if (isDivisibleBy3 == true) {
        divisibleBy3.push(el);
    }
}
console.log(`List of numbers divisble by ${divisor}: ${divisibleBy3}.`);