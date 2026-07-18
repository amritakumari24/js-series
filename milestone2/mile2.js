// console.log(10 + "5" - 2 * 3);
// console.log("10" + 5 - "2" + 1);

// console.log(true + true);
// console.log(false + 10);
// console.log(true + "10");

// let a = 5;

// console.log(a++);
// console.log(++a);
// console.log(a);

// let num = 18;

// if(num / 2 === parseInt(num / 2)){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(null == undefined);
// console.log(null === undefined);

// let age = 20;
// let citizen = false;

// if(age >= 18 && citizen || age > 60){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }

// && and || can return other values as well rather than only returning true and false.

// console.log(10&&20) it stops when value is false and then return and if both values are true then return last one

// console.log(0||20) it return true value always

// var x = 10;

// function test(){
//     console.log(x);
//     var x = 20;
// }

// test();

// var x = 1;

// function outer(){

//     var x = 2;

//     function inner(){
//         console.log(x);
//     }

//     inner();
// }

// outer();

// console.log("Start");

// function first(){
//     console.log("First");
//     second();
// }

// function second(){
//     console.log("Second");
// }

// first();

// console.log("End");

// function outer(){

//     let name = "Rahul";

//     function inner(){
//         console.log(name);
//     }

//     inner();
// }

// outer();

// closure = A closure is a JavaScript feature where an inner function remembers and maintains access to the variables of its outer lexical scope, even after the outer function has finished its execution.

//How to identify Closure:-
// 1.)inner function reference to the outer function by lexical scope 
// return or wait for run the outer function means no immediate call to inner function.



// function outer(){

//     let count = 0;

//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }

// let counter = outer();

// counter();
// counter();

// function outer(){

//     let x = 10;

//     return function inner(){
//         console.log(x);
//     }
// }

// let fn = outer();

// let x = 20;

// fn();


// for(let i = 1; i <= 3; i++){

//     setTimeout(function(){
//         console.log(i);
//     },1000);

// }

// function create(){

//     let x = 10;

//     return function(){
//         console.log(x);
//     }
// }

// let a = create();
// let b = create();

// a();
// b();

// function create(){

//     let x = 10;

//     return function(){
//         x++;
//         console.log(x);
//     }
// }

// let a = create();

// a();
// a();

// let b = create();

// b();

// function outer(){

//     let x = 1;

//     return {
//         first: function(){
//             x++;
//             console.log(x);
//         },

//         second: function(){
//             x++;
//             console.log(x);
//         }
//     }
// }

// let obj = outer();

// obj.first();

// obj.second();

// obj.first();

// Closure Master Rule:
// Same outer function call → inner functions same closure share kar sakte hain
// Different outer function calls → separate closure environments bante hain



// Logic Practice


// Even Odd
// Leap Year
// Largest of Three Numbers
// Electricity Bill
// Login Validation
// Age Eligibility


// Even Odd

// const readline = require("readline/promises")
// const input = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout
// })

// async function oddEven(){
//     const num = Number(await input.question("Enter number: "));
//     if(num%2===0){
//         console.log(`${num} is Even`)
//     }else{
//         console.log(`${num} is odd`)
//     }
//input.closee()
// }
// oddEven();



// Leap Year
// const readline = require("readline/promises");
// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// async function leapYear(){
//     const year = Number( await input.question("Enter year: "));
//     if(year%400===0 || year%4==0 && year%100!=0){
//         console.log("leap year")
//     }else{
//         console.log("not a leap year")
//     }
//     input.close()
// }

// leapYear();

// Largest of three Numbers

const readline = require("readline/promises");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

// async function largestOfThreeNums(){
//     const num1 = Number(await input.question("enter num1: "))
//     const num2 = Number(await input.question("enter num2: "))
//     const num3 = Number(await input.question("enter num3: "))

//     if (num1>=num2 && num1>=num3){
//        console.log(`${num1} is largest number`)
//     }else if(num2>=num3 && num2 >=num1){
//        console.log(`${num2} is largest number`)
//     }else{
//       console.log(num3)
//     }
//     input.close()
// }

// largestOfThreeNums();



//Electricity bill

// async function electircityBill(){

//     const units = Number(await input.question("enter rawbill: "))
//     if(units >=0 && units<=100){
//         const finalBill = units*5
//         console.log(`${finalBill} is final bill`)
//     }else if(units>=101 && units<=200){
//         const finalBill = 8*(units-100)+(100*5)
//         console.log(`${finalBill} is final bill`)
//     }else{
//        const a = (units-200)
//        const b = ((units-100)-a)*8
//        const finalBill = b+(100*5)+ (a*10)
//        console.log(`${finalBill} is final bill`)
//     }
//     input.close()
// }

// electircityBill();



