// let name = "Rahul";

// function test(){

// console.log(name);

// }

// console.log(name);

// function findFactorial(n){
//     let fact =1
//     for (let i=1; i <=n;i++){
//         fact *= i
//     }
//     console.log(fact)

// }
// findFactorial(5);

// function fibonacci(n){
//    let a = 0;
//    let b = 1;
//    for(let i=0; i<n; i++){

//     let c = a+b;
//       a=b;
//       b=c;
//    }
//    console.log(a)
// }

// fibonacci(5)

// let a=0,b=1;

// for(let i=1;i<=10;i++){

// let c=a+b;

// a=b;

// b=c;

// }
// console.log(a);

// sayHi();

// const sayHi = function () {
//     console.log("Hello");
// };

// greet();

// function greet() {
//     console.log("Hello");
// }

// function test() {

//     console.log("Hello");
// }

// console.log(test());

// var name = "Rahul";

// let age = 25;

// const city = "Delhi";

// console.log(window.name);
// console.log(window.age);
// console.log(window.city);

// console.warn("learn as much as u can")
// console.error("distraction")
// console.table("hello,qwjgdiu")

// Why are var variables added to the window object but let/const are not?

// Best answer:

// In browsers, variables declared with var in the global scope become properties of the global window object because of older JavaScript behavior. Variables declared with let and const are stored in the global lexical environment and do not become window properties to avoid global namespace pollution and provide better scoping.



// alert("helo")

// Is alert() JavaScript ka part hai?

// Answer:

// No, alert() is not a core JavaScript function. It is a browser-provided Web API method.

// JavaScript engine itself doesn't know about alert().




//prime number 

// const readline = require("readline/promises");
// const input = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
// })

// async function checkPrime(){
//     const number = Number(await input.question("Enter number: "));

//     if (number <= 1){
//         console.log("not prime")
//     }else{
//         let count = 0
//         for(let i=1; i<=number; i++ ){
//             if(number%i===0){
//                 count += 1 
//             }
//         }
//         if (count === 2){
//             console.log("prime")
//         }else{
//             console.log("not prime")
//         }
//     }
//     input.close()
    
// }

// checkPrime();



// reverse 


// const readline = require("readline/promises");
// const input = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
// })

// async function reverseNumber(){
//     let  num = Number(await input.question("enter number: "))
//     let rev = 0;
//     while(num > 0){
//         digit = num%10
//         rev = rev*10+digit
//         num = Math.floor(num/10)
//     }
//     console.log(rev)
//     input.close()
// }
// reverseNumber()


// const readline = require("readline/promises");
// const input = readlin.createInterface({
//     input:process.stdin,
//     output: process.stdout
// })

// async function sumDigit() {
//     let num = Number(await input.question("enter number:"))
//     let summ = 0
//     while(num >0){
//    digit = num%10
//    summ += digit
//    num = Math.floor(num/10)

//     }
//     console.log(summ)
//     input.close()
// }
// sumDigit()




// let ecxpenses = [];
// function addExpense(name, amount, category ){
//     let expense = {
//         name: name,
//         amount: amount,
//         category: category
//     }
//     expenses.push(expense)
//     console.log("Expense Added:", expense)
// }

// function getTotalExpense(){
//     let total = 0;
//     for(let expense of expenses){
//         total += expense.amount
//     }
//     console.log("total EXpense:", total)
// }

// function getCategoryWIseExpense(){
//     let categoryExpense ={}
//     for (let expense of expenses){
//         if (categoryExpense[expense.category]){
//             categoryExpense[expense.category] += expense.amount;
//         }else{
//             categoryExpense[expense.category] = expense.amount;
//         }
//     }

//     console.log("category wise expense:")
//     console.log(categoryExpense);
// }

// addExpense("burger", 200, "food");
// addExpense("bus ticket", 100, "travel");
// addExpense("movie", 300, 'entertainment')
// addExpense("pizza", 400, "food")

// getTotalExpense();
// getCategoryWIseExpense()


// function gcd(a,b){
//     while(b!=0){
//         let temp =b 
//         b= a%b;
//         a = temp
//     }
//     return a;
// }
// console.log(gcd(4,8))


function gcd (a,b){
    while(b){
        [a,b] = [b,a%b]
    }
    return a 
}
function lcm(a,b){
    return a*b/gcd(a,b)
}

console.log(lcm(12,18))