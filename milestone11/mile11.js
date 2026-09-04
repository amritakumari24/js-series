// const order = new Promises((resolve, reject)=>{
//     let resturantAccept = true;
//     if (resturantAccept){
//         resolve("order accepted")
//     }else{
//         reject("order rejeced ")
//     }
// });
// order
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("order process finished")
// })
// function getUser() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve({
//                 id: 101,
//                 name: "Rahul"
//             });
//         }, 2000);

//     });
// }

// function getOrders(userId) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve([
//                 "Laptop",
//                 "Mobile"
//             ]);
//         }, 2000);

//     });
// }

// getUser()

//     .then((user) => {
//         console.log("User:", user);

//         return getOrders(user.id);
//     })

//     .then((orders) => {
//         console.log("Orders:", orders);
//     })

//     .catch((error) => {
//         console.log("Error:", error);
//     })

//     .finally(() => {
//         console.log("Process completed");
//     });


// function getUser (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 id: 101,
//                 name: "Amrita Pandit"
//             });
//         }, 2000)

//     })
// }

// function getOrders(userId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([
//                 "Laptop", 
//                 "Mobile"
//             ])
//         }, 2000)
//     });
// }

// getUser()

// .then((user) => {
//  console.log("user:", user)
//  return getOrders(user.id)
// })
// .then((orders)=>{
//     console.log("orders:", orders)
// })
// .catch((error)=>{
//     console.log("error:", error)
// }).finally(()=>{
//   console.log("process complete")
// })


// const payment = new Promise ((resolve, reject)=>{
//  let succcess = false;
//  if (succ){}
// })

// const user = {
//     name :"Amrita",
//     age: 19,
//     city: "Korba"
// }

// // console.log(Object.keys(user))

// // console.log(Object.keys(user).length)

// console.log()

// map = iterate over the loop and creates new array 
// foreach= iterat over the loop , do not create new array 

// const numbers = [10,20,30,40]
// numbers.forEach((i)=>{

// })


// const arr = [1,2,3,4]
// const a = arr.map((i) =>{
//    return  i *2
// })
// console.log(a)


// const users = [
//   { name: "Rahul", age: 22 },
//   { name: "Aman", age: 25 },
//   { name: "Priya", age: 21 }
// ];

// users.forEach((user)=>{
// console.log(user.age)
// })



// working with objects 

// const user = {
//     name :"Amrita",
//     age: 19,
//     city: "Korba"
// }
// console.log(Object.values(user))

// console.log(Object.entries(user))

// const user = {
//     name: "AMrita"
// }
// const details = {
//     age : 19,
//     city: "korba"

// }

// const result = Object.assign([],user, details)
// console.log(result);
// console.log(user)

// assign() = assign ka use object copy and merge krne k liye hota 
// agr ye nhi nnatya ki object ya rray me value return krno hain to by default yeh first vale object ko modify kr deta hian
// Object.assign(target, source)



// Object.freeze() // kuchh nhi kr skte 
// Object.seal() // only exiting value modify kr skte hain 

// const config = {
//   apiUrl: "https://example.com",
//   version: 1
// };

// Object.freeze(config);

// config.version = 2;
// config.newProperty = "Hello";
// delete config.apiUrl;

// const user = {
//   name: "Rahul",
//   age: 22
// };

// Object.seal(user);

// user.age = 30;

// console.log(user.age);


// Agar teeno operations independent hain, toh sequentially wait karna unnecessary ho sakta hai.

// const [user, orders, products] = await Promise.all([
//   getUser(),
//   getOrders(),
//   getProducts()
// ]);

// Yahan // Promise.all() //useful hai.

// try
// catch 
// throw
// finally 


// const id = Symbol("id");
// const user = {
//     name :" amrita",
//     [id]: 100
// };


// SYmbol is used to create unique property keys in janavascript and avoid naming conflicts 