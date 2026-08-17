const text = document.querySelector("#text");
const nhipta = document.getElementById("nhipta")
const out = document.getElementById("out");
const inputt = document.getElementById("inputt")
const changee = document.getElementById("changee")
const buttons = document.querySelectorAll(".btn");
const charshow = document.getElementById("charshow");
const livechar = document.getElementById("livechar");


text.addEventListener("dblclick", ()=>{
    text.textContent = "editing...."
});

nhipta.addEventListener("mouseover", ()=>{
    nhipta.textContent = "ho gya..."
})

out.addEventListener("mouseout", ()=>{
    out.textContent = "mouseout completed!"
})

inputt.addEventListener("input", (e)=>{
    console.log(e.target.value);
})

changee.addEventListener("change", (e)=>{
    console.log(e.target.value);
})


// two ways to add events 
// 1. addeventlistner 
// 2. onclick 
//prefer addevent ;istner 

//sunday 
//gk 




// classList



// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         console.log(event.target.textContent);
//     });
// });


charlive.addEventListener("input", (e)=>{
    charshow.textContent = e.target.value
})