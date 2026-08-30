// console.log(this)
// console.log(this === module.exports);

// revised event loop with diagram 
// micro queue 
//macro queue
// micro queue starvation 
// broswer api
// fetch() [network  ]
// dom api  [mutation Observer]
// setTimeout() [timer]

 // difference between not defined and undefined
//  var a;
//  console.log(a); // undefined
//  console.log(b); // ReferenceError: b is not defined7

//  a = undefined; // bad practice to assign undefined to a variable




// function a(){
//     console.log(b);
   
// }
// var b = 10; 
// a()//10

//high order function

// function greet(name) {
//     return "Hello " + name;
// }

// function process(fn) {
//     return fn("Rahul");
// }

// console.log(process(greet));

// function calculate(a, b, fn) {
//     return fn(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculate(10, 5, add));

// function operation(a, b, fn) {
//     return fn(a, b);
// }

// console.log(operation(6, 3, function(x, y) {
//     return x - y;
// }));

// function multiplyByTwo(num) {
//     return num * 2;
// }

// function process(arr, fn) {
//     return arr.map(fn);
// }

// console.log(process([1, 2, 3], multiplyByTwo));

// function test(fn) {
//     return fn(5);
// }

// console.log(test(function(x) {
//     return x * 2;
// }) + 10);

// function outer(fn) {
//     return fn(10);
// }

// function inner(x) {
//     return x + 5;
// }

// console.log(outer(inner));


// function calculate(num, fn) {
//     return fn(num);
// }

// function double(x) {
//     return x * 2;
// }

// function addFive(x) {
//     return x + 5;
// }

// console.log(calculate(10, double));
// console.log(calculate(10, addFive));

// function process(num, fn) {
//     return fn(num);
// }

// function square(x) {
//     return x * x;
// }

// console.log(process(4, square) + process(3, square));

// function calculate(a, b, fn) {
//     return fn(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// console.log(calculate(2, 3, add) * calculate(2, 3, multiply));

// function process(num, fn) {
//     return fn(num);
// }

// function double(x) {
//     return x * 2;
// }

// function addTen(x) {
//     return x + 10;
// }

// console.log(process(process(5, double), addTen))






//(closures in loop + setTimeOut)


// solution without let (using IIFE (immedietly invoked function expression)) 
// function x(){
//     for(var i=1; i<=5; i++){
//         function close(i){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }
// close(i);
// } 
// }
// x();



//var + closure + IIFE + setTimeout + event loop

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("A", i);
  }, 0);

  (() => {
    const x = i;
    setTimeout(() => {
      console.log("B", x);
    }, 0);
  })();
}



