// let, var ,const

// var(ES5)
//let const(ES6)

// temporal dead zone 

// type corecsion

// quirks 

// Sort Students by Marks 
// Problem
// Sort students in ascending order of marks.
// Input
const students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 70 },
  { name: "C", marks: 85 }
];
// Output
// [
//   { name: "B", marks: 70 },
//   { name: "C", marks: 85 },
//   { name: "A", marks: 90 }
// ]
// Concepts
// Sorting
// Objects


for (let i=0; i<=students.length-1; i++){
    for(let j=0; j<students.length-i-1; j++){
        if(students[j].marks > students[j+1].marks){
            [students[j], students[j+1]]=[ students[j+1], students[j]]

        }
    }
}
console.log(students)


