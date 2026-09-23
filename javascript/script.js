//  Question 1 : Create a program to reverse a given number using a loop.

let num1 = 123;

document.getElementById('num1').innerHTML = `Number 1 => ${num1}`;

let rev_clone = num1;
let rev_number = 0;

while (rev_clone != 0) {
    let reminder = rev_clone % 10;
    rev_number = (rev_number * 10) + reminder;
    rev_clone = Math.floor(rev_clone / 10);
}

document.getElementById('rev_number').innerHTML = `Reverse Number of ${num1} is ${rev_number}`;

// Question 2 : Develop a program to check whether a number is a palindrome.

let num2 = 2501;

document.getElementById('num2').innerHTML = `Number 1 => ${num2}`;

let rev_clone2 = num2;
let rev_number2 = 0;

while (rev_clone2 != 0) {
    let reminder2 = rev_clone2 % 10;
    rev_number2 = (rev_number2 * 10) + reminder2;
    rev_clone2 = Math.floor(rev_clone2 / 10);
}

if (rev_number2 === num2) {
    document.getElementById('palindrome_number').innerHTML = `${num2} is a Palindrome Number..`;
}
else {
    document.getElementById('palindrome_number').innerHTML = `${num2} is not a Palindrome Number..`;
}

// Question 3 : Write a program to print the Fibonacci series up to n terms using a loop.

let num3 = 6;

document.getElementById('num3').innerHTML = `Number 1 => ${num3}`;

let a = 0;
let b = 1;

let Fibonacci_str = '';
Fibonacci_str += a + ' ';
Fibonacci_str += b + ' ';

for (let i = 3; i <= num3; i++) {
    let Fibonacci_sum = a + b;
    a = b;
    b = Fibonacci_sum;
    Fibonacci_str += Fibonacci_sum + ' ';
}

document.getElementById('Fibonacci_str').innerHTML = `Fibonacci series : ${Fibonacci_str}`;

// Question 4 : Create a program to find the factorial of a number using a loop.

let num4 = 5;

document.getElementById('num4').innerHTML = `Number 1 => ${num4}`;

let factorial = 1;
for (let i = 1; i <= num4; i++) {
    factorial *= i;
}

document.getElementById('factorial').innerHTML = `The Factorial of ${num4} is ${factorial}`;

// Question 5 : Develop a program to check whether a number is a prime number.

let num5 = 17;

document.getElementById('num5').innerHTML = `Number 1 => ${num5}`;

let num5_clone5 = num5;
let prime_count = 0;

for (let i = 2; i < num5; i++) {
    if (num5 % i === 0) {
        prime_count++;
    }
}

if (prime_count === 0) {
    document.getElementById('prime_count').innerHTML = `${num5} is a Prime Number..`;
}else {
    document.getElementById('prime_count').innerHTML = `${num5} is not a Prime Number..`;
}

// Question 6 : Write a program to count the total number of digits in a given number.

let num6 = 4567;

document.getElementById('num6').innerHTML = `Number 1 => ${num6}`;

let num6_clone = num6;
let count_digits = 0;

while (num6_clone != 0) {
    let reminder6 = num6_clone % 10;
    count_digits++;
    num6_clone = Math.floor(num6_clone / 10);
}

document.getElementById('count_digits').innerHTML = `Total Digits in ${num6} is ${count_digits}`;

// Question 7 : Create a program to calculate the sum of digits of a number

let num7 = 7896;

document.getElementById('num7').innerHTML = `Number 1 => ${num7}`;

let num7_clone = num7;
let sum_of_digits = 0;

while (num7_clone != 0) {
    let reminder7 = num7_clone % 10;
    num7_clone = Math.floor(num7_clone / 10);
    sum_of_digits += reminder7;
}

document.getElementById('sum_of_digits').innerHTML = `Sum of Digits in ${num7} is ${sum_of_digits}`;

// Question 8 : Develop a program to check whether a number is an Armstrong number.

let num8 = 123;

document.getElementById('num8').innerHTML = `Number 1 => ${num8}`;

let num8_clone = num8;
let armstrong_numbers = 0;
let count = 0;

while (num8_clone != 0) {
    num8_clone = Math.floor(num8_clone / 10);
    count++;
}

num8_clone = num8;

while (num8_clone != 0) {
    let reminder8 = num8_clone % 10;
    num8_clone = Math.floor(num8_clone / 10);
    armstrong_numbers += Math.pow(reminder8, count);
}

if (armstrong_numbers === num8) {
    document.getElementById('armstrong_numbers').innerHTML = ` ${num8} is Armstrong Numbers`;
}else {
    document.getElementById('armstrong_numbers').innerHTML = `${num8} is not a Armstrong Numbers`;
}

// Question 9 : Write a program to calculate the power of a number using a loop.

let num9 = 2;

document.getElementById('num9').innerHTML = `Number 1 => ${num9}`;

let num9_clone = num9;
let base_num = 4;

document.getElementById('base_num').innerHTML = `Base Number => ${base_num}`;

let base_num_clone = base_num;
let power = 1;

while (base_num_clone > 0) {
    power *= num9_clone;
    base_num_clone--;
}

document.getElementById('power').innerHTML = ` Power of ${num9} ^ ${base_num} is ${power}`;

// Question 10 : Create a program to print the following number pattern:

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

let pattern1 = document.getElementById('pattern1');

let pattern_str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern_str += j + ' ';
    }
    pattern_str += "<br/>";
}

pattern1.innerHTML = pattern_str;

// Question 11 : Create a program to print the following number pattern:

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2   
// 1 

let pattern2 = document.getElementById('pattern2');

let pattern_str2 = '';

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern_str2 += j + ' ';
    }
    pattern_str2 += "<br/>";
}

pattern2.innerHTML = pattern_str2;

// Question 12 : Create a program to print the following number pattern:

// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2   
//         1 

let pattern3 = document.getElementById('pattern3');

let pattern_str3 = '';
for (let i = 5; i >= 1; i--) {
    for (let s = i; s <= 4; s++) {
        pattern_str3 += '_' + ' ';
    }
    for (let j = 1; j <= i; j++) {
        pattern_str3 += j + ' ';
    }
    pattern_str3 += "<br/>";
}

pattern3.innerHTML = pattern_str3;

// Question 12 : Create a program to print the following number pattern:

//         1 
//       1 2 
//     1 2 3 
//   1 2 3 4 
// 1 2 3 4 5

let pattern4 = document.getElementById('pattern4');

let pattern_str4 = '';

for (let i = 1; i <= 5; i++) {
    for (let s = i; s < 5; s++) {
        pattern_str4 += '_' + ' ';
    }
    for (let j = 1; j <= i; j++) {
        pattern_str4 += j + ' ';
    }
    pattern_str4 += "<br/>";
}
pattern4.innerHTML = pattern_str4;

