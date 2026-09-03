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


function getUser (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 101,
                name: "Amrita Pandit"
            });
        }, 2000)

    })
}

function getOrders(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                "Laptop", 
                "Mobile"
            ])
        }, 2000)
    });
}

getUser()

.then((user) => {
 console.log("user:", user)
 return getOrders(user.id)
})
.then((orders)=>{
    console.log("orders:", orders)
})
.catch((error)=>{
    console.log("error:", error)
}).finally(()=>{
  console.log("process complete")
})


const payment = new Promise ((resolve, reject)=>{
 let succcess = false;
 if (succ){}
})