const order = new Promises((resolve, reject)=>{
    let resturantAccept = true;
    if (resturantAccept){
        resolve("order accepted")
    }else{
        reject("order rejeced ")
    }
});
order
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("order process finished")
})

