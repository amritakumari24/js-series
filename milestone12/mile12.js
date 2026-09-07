let name = {
    firstName: 'Amrita',
    lastName: "Pandit",
    printfullName : function(){
        console.log(this.firstName+" "+ this.lastName)
    }
}
name.printfullName();

let name2 = {
    firstName: "devansh",
    lastName: "pandit"

}
// function borrowing 
name.printfullName.call(name2)