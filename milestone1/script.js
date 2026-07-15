/* Logic Practice
 Print Name
 Swap Two Numbers
 Area of Circle
Celsius to Fahrenheit
Age Calculator
Simple Interest
 Perimeter of Square */

const name = "Amrita Pandit";
console.log(name)


let a = 2;
let b = 5;
let c;
temp = a
a = b
b= temp

console.log(a,b)


const r = 2 ;
const pi = 22/7;
const areaOfCircle = pi*(r**2)
console.log(`${areaOfCircle}cm²`)

const celsius = 37;
const fahrenheit = (celsius*(9/5))+32
console.log(`${fahrenheit}°F`)


// const dateOfBirth = new Date("30-10-2006");
// const todayDate = new Date()
// let age = todayDate.getFullYear() - dateOfBirth.getFullYear()
// const monthDifference = todayDate.getMonth() - dateOfBirth.getMonth()
// if (monthDifference<0 || (monthDifference === 0 && todayDate.getDate()< dateOfBirth.getDate())){

// }{
//     age--
// }
// console.log(age)

const dateOfBirth = new Date("2006-10-30");
const todayDate = new Date();

let age = todayDate.getFullYear() - dateOfBirth.getFullYear();

const monthDifference = todayDate.getMonth() - dateOfBirth.getMonth();

if (
  monthDifference < 0 ||
  (monthDifference === 0 && todayDate.getDate() < dateOfBirth.getDate())
) {
  age--;
}

console.log(age);


const P = 1000;
const R = 10;
const T = 2;
const simpleInterest =( P*R*T)/100
console.log(simpleInterest)


const side = 2;
const perimeterofSquare = side*4
console.log(perimeterofSquare)