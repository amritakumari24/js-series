//variable scope 
// let a = 10;

// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);

// var a = 10;

// {
//     var a = 20;
// }

// console.log(a);

// var a = 10;

// {
//     var a = 20;
// }

// console.log(a);

// let a = 100;

// function test() {
//     let a = 50;
//     console.log(a);
// }

// test();

// console.log(a);

// let a = 100;

// function test() {
//     let a = 50;
//     console.log(a);
// }

// test();

// console.log(a);

// let name = "Global";

// function outer() {

//     let name = "Outer";

//     function inner() {
//         console.log(name);
//     }

//     inner();
// }

// outer();
// const x = 5;

// {
//     const x = 15;
//     console.log(x);
// }

// console.log(x);

// const x = 5;

// {
//     const x = 15;
//     console.log(x);
// }

// console.log(x);
// let a = 1;

// function one() {

//     let a = 2;

//     function two() {
//         console.log(a);
//     }

//     two();
// }

// one();

// console.log(a);

// const a = 50;
// {
//     console.log(age);

//     let age = 20;
// }

// {
//     var age = 20;
// }

// console.log(age);

// {
//     console.log(age);

//     let age = 20;
// }

// const add = (a, b) => a + b;

// console.log(add(5, 6));

// const square = n => n * n;

// console.log(square(4));

// const square = n => n * n;

// console.log(square(4));

// const greet = () => "Hello";

// console.log(greet());

// const sum = (a, b) => {

//     return a + b;

// }

// console.log(sum(10, 20));
// const person = {

//     name: "Rahul",

//     show() {
//         console.log(this.name);
//     }

// }

// person.show();
// const person = {

//     name: "Rahul",

//     show: () => {
//         console.log(this.name);
//     }

// }

// person.show();
// function greet(name = "Guest") {
//     console.log(name);
// }

// greet("Rahul");
// const arr = [10,20,30];

// console.log(...arr);

// const obj = {
//     name:"Rahul"
// };

// const copy = {...obj};

// console.log(copy);
// const arr = [10,20,30];

// const [a,b,c] = arr;

// console.log(a,b,c);

// const arr = [5,10,15];

// const [a,,c] = arr;

// console.log(a,c);
// const student = {

//     name:"Rahul",

//     age:21

// }

// const {name,age}=student;

// console.log(name,age);
// const student = {

//     name:"Rahul"

// }

// const {name:studentName}=student;

// console.log(studentName);

// const user = {

//     address:{

//         city:"Delhi"

//     }

// }

// const {

//     address:{city}

// }=user;

// console.log(city);

// const user = {};

// console.log(user?.address?.city);

// const user = {

//     address:{
//         city:"Delhi"
//     }

// }

// // console.log(user?.address?.city);
// let value = null;

// console.log(value ?? "Default");

// console.log(value ?? 100);
// let value = 0;
// console.log(false && "Hello");

// console.log(true && "Hello");

// console.log("" || "Guest");

// console.log("Rahul" || "Guest");
// let a = 10;

// function test() {

//     console.log(a);

//     let a = 20;

// }

// test();
// const arr1 = [1,2];

// const arr2 = arr1;

// arr2.push(3);

// console.log(arr1);
// const arr1 = [1,2];

// const arr2 = [...arr1];

// arr2.push(3);

// console.log(arr1);

// console.log(arr2);
// const person = {

// name:"Rahul",

// age:20

// };

// const {age} = person;

// console.log(age);