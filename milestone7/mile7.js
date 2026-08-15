const text = document.querySelector("#text");
const nhipta = document.getElementById("nhipta")
const out = document.getElementById("out");
const inputt = document.getElementById("inputt")
const changee = document.getElementById("changee")

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