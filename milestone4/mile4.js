// let arr = [10,20,30,40];

// console.log(arr.slice(1,3));
// console.log(arr)

// let arr = [10,20,30,40];

// console.log(arr.splice(1,2));
 
// console.log(arr);

// let arr = ['amrita', 'aliya', 'dolly']
// console.log(arr.includes('amrita'))

// let = [10,20,30]
// console.log(let.indexOf(20))


// let = "amrita";
// console.log(let.length)


// let text = "  Hello  ";

// console.log(text.trim());

// let text = "A,B,C";
// console.log(text.split(","))


// const arr = [1, 2, 3];
// const result = arr.push(4);

// console.log(result);

// let arr = [1,2,3];
// arr.splice(1,1,10,20);

// console.log(arr);

// let arr = [1,2,3];
// arr.splice(1,1,10,20);

// console.log(arr);
// let arr = ["A","B","C"];

// console.log(arr.indexOf("D"));


// const str = " JavaScript ";

// console.log(str.trim().length);

// const obj = {
//     a:1,
//     b:2
// };

// delete obj.a;

// console.log(obj);

// const user = {
//     profile:{
//         name:"Aman"
//     }
// };

// console.log(user.profile.name);

12


const { stdin } = require('process')
// `let arr = ["A","B","C"];

// let x = arr.slice(1);

// arr.splice(0,1);

// console.log(x);
// console.log(arr);`



// let str = "hello";
// re = ""
// for(let i=(str.length)-1; i>=0;i--){
//     re += str[i]
    
// }
// console.log(re)


// let str = "Amrita"
// count = 0
// vowel = "aeiou"

// for(let i of str){
//     if ((vowel.includes(i))){
//         count++
//     }
// }
// console.log(count)

// let a = [1,2]
// let b = [40,12]
// let c = [...b,...a]
// console.log(c)

// let arr = [1,2,2,3,3,41,11,1,1,3]
// let u = [...new Set(arr)]
// console.log(u)

// let arr =[12,3,4]
// console.log(Math.max(...arr))




// let str= "apple";
// let freq = {}
// for(let i of str){
//     if (freq[i]){
//         freq[i]++
//     }else{

//         freq[i] = 1
//     }
// }
// console.log(freq)

// let student = {
//     name : "Amrita",
//     marks: [90,99,98]
// };
// let total = 0;
// for (let mark of student.marks){
//     total += mark;
// }

// let avg = total/student.marks.length;

// console.log(`Name of student ${student.name}, average ${avg}`)


// const prompt = require("prompt-sync")();

// let name = prompt("Enter your name: ");
// console.log(name);


// const readline = require("readline/promises");

// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function calculatorEngine() {
//   let equation = await input.question("Enter equation: ");

//   let result = eval(equation);

//   console.log("Result:", result);

//   input.close();
// }

// calculatorEngine();


// const readline = require("readline/promises");

// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function wordAnalyzer(){
//     const str = await input.question("enter str: ")
//     let vowelCount = 0
//     let consotantCount = 0
//     for(let ch of str ){
//         if("aeiou".includes(ch)){
//             vowelCount++
//         }else if ("bcdfghjklmnpqrstvwxyz".includes(ch)){
//     consotantCount++
//         }
//     }
//     console.log(`NUmber of vowels ${vowelCount}`)
//    let words = str.split(" ");
//    console.log(`Count of words ${words.length}`)
//    console.log(`Count of characters ${str.trim().length}`)
//    console.log(`Count of consonants ${consotantCount}`)

//     input.close()
// }
// wordAnalyzer();


//expense tracker 

// const readline = require("readline/promises");

// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let expenses = [];

// async function expenseTracker() {
//   let name = await input.question("Enter expense name: ");
//   let amount = Number(await input.question("Enter amount: "));
//   let category = await input.question("Enter category: ");

//   let expense = {
//     name,
//     amount,
//     category
//   };

//   expenses.push(expense);

//   let total = 0;

//   for (let i = 0; i < expenses.length; i++) {
//     total += expenses[i].amount;
//   }
//   let categoryWiseExpense = {}
// for(let i=0; i< expenses.length; i++){
//     let category = expenses[i].category;
//     if (categoryWiseExpense[category]){
//         categoryWiseExpense[category] += expenses[i].amount
//     }else{
//         categoryWiseExpense[category] = expenses[i].amount
//     }
// }


//   console.log("Expenses:", expenses);
//   console.log(`Total amount of expenses: ${total}`);
//   console.log("Category Wise Expense:", categoryWiseExpense);

//   input.close();
// }

// expenseTracker();


const readline = require("readline/promises");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function guessNumber(){
    
    const acutalNumber = Math.floor(Math.random()*10 )+1;
    let number = 0;
    while(number !== acutalNumber){
        const number = Number(await input.question("guess the number: "))
        if (number=== acutalNumber){
        console.log("Congratulations ! you guessed right")}else{
 console.log("try again")
        }
    }
   
    input.close()
}
guessNumber()