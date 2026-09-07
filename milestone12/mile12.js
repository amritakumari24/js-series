let name = {
    firstName: 'Amrita',
    lastName: "Pandit",
  
}

 let  printfullName = function(hometown, state){
        console.log(this.firstName+" "+ this.lastName , hometown, state)
    }


let name2 = {
    firstName: "devansh",
    lastName: "pandit"

}
// function borrowing  ,,call()   // used to directly call the function
printfullName.call(name, "baru", "hp");

// apply() //same as call(),just takes array for multiple arguments
printfullName.apply(name2, ["korba", "cg" ])

// bind() // it gives the copy of function nstead of diretly call the function to use it later 
let printMyName  = printfullName.bind(name2, "heloo" , "bye")
console.log(printMyName)
printMyName()