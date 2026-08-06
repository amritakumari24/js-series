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

// const readline = require('readline');
// const input = readline.createInterface({
//     input: stdin,
//     output: stdout
// })

// async function jgewg(){



//     input.close()
// }

// const user = {
//   name: "Ravi",

//   greet: function () {
//     console.log(this.name);
//   }
// };

// user.greet(); // Ravi
// const greet = (name = "Guest") => {
//   return `Hello, ${name}!`;
// };

// console.log(greet("Aman"));
// console.log(greet(null));
// greet(undefined)

// const colors = [
// "red", "green", "blue"
// ]

// const [first, second, third ] = colors
// console.log(third)

// const obj = {
//    name: "amrita",
//    age: 19,
//    grade: "a" 
// }
// const {name, age} = obj
// console.log(name, age);


// const students ={
//     name:
//     "amrita",
//     address:
//     {
//         city: "korba",
//         state:"cg"
//     }
    
// };


// const {address: {city, state}} = students
// console.log(city, state)



// const fruits = ["apple", "mango"];
// const vegetables = ["Carrot", "potato"];
// const comnined = [...fruits, ...vegetables]
// console.log(comnined)

//clone OBjects 

// const originalUser = {
// name: "amrita",
// age: 19
// }

// const cloneUser = {
//    state: "cg",
//    dist: "korba",
//    ...originalUser

// }
// console.log(originalUser)

// // 
// console.log(null===undefined)
// console.log(typeof []);
// console.log([] == false);

// var a = 10;

// function test(){
//    console.log(a);
//    var a = 20;
// }

// test();

// const user={
// name:"Raj"
// }

// delete user.name




// let a=10;

// function x(){
// console.log(a);
// }

// x();

// function test(){

// console.log(a);

// var a=5;

// }

// test();
// let arr=[1,2,3];

// arr.push(4);

// console.log(arr.length);

// const obj={
// name:"John"
// }

// obj.name="Mike"

// console.log(obj)
// let arr=[1,2];

// arr=[3,4];
// console.log(arr)

// const student={
// name:"John",
// age:22
// }

// let {age}= student
// console.log(age)

let num1 = 20;
let num2 = 5;

let operation = "add"

switch (operation){
    case "add":
    console.log(`addition ${num1+num2}`)
    break;
    case "sub":
    console.log(num2-num1)  
    break 
      
}   
