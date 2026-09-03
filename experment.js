// // let, var ,const

// // var(ES5)
// //let const(ES6)

// // temporal dead zone 

// // type corecsion

// // quirks 

// // Sort Students by Marks 
// // Problem
// // Sort students in ascending order of marks.
// // Input
// const students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 70 },
//   { name: "C", marks: 85 }
// ];
// // Output
// // [
// //   { name: "B", marks: 70 },
// //   { name: "C", marks: 85 },
// //   { name: "A", marks: 90 }
// // ]
// // Concepts
// // Sorting
// // Objects


// for (let i=0; i<=students.length-1; i++){
//     for(let j=0; j<students.length-i-1; j++){
//         if(students[j].marks > students[j+1].marks){
//             [students[j], students[j+1]]=[ students[j+1], students[j]]

//         }
//     }
// }
// console.log(students)

//holiday 



// const students = {
//   s1: {
//     name: "Aman",
//     age: 21,
//     marks: { math: 85, js: 92, python: 78 }
//   },
//   s2: {
//     name: "Riya",
//     age: 22,
//     marks: { math: 95, js: 88, python: 91 }
//   },
//   s3: {
//     name: "Karan",
//     age: 20,
//     marks: { math: 72, js: 96, python: 85 }
//   }
// };

// // const {s1, s2, s3} = students;
// // console.log(students)
// // let total = 0
// // for(let i =0; i<students.length; i++){
    
// //     for (let j=i; j<marks.length; j++){
// //         total += students.marks[j]
// //     }
// // }
// console.log(students.s1.marks.math +students.s1.marks.python+ students.s1.marks.js)
// let total = students.find.aggregate([
// //     $sum:{
// //         s1: "$marks"
// //     }
// // ])4


// let total = students.aggregate([
//     {
//         $group: {
//             _id: null,
//             s1: { $sum: "$marks" }
//         }
//     }
// ])


// let arr = [1,2,3,4]
// const a = arr.reduce((c, i)=>{
//     return  i%2==0? c+=i : c
// }, 0)
// console.log(a)