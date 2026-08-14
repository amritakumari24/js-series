const text = document.querySelector("#text");
const nhipta = document.getElementById("nhipta")
const out = document.getElementById("out");


text.addEventListener("dblclick", ()=>{
    text.textContent = "editing...."
});

nhipta.addEventListener("mouseover", ()=>{
    nhipta.textContent = "ho gya..."
})

out.addEventListener("mouseout", ()=>{
    out.textContent = "mouseout completed!"
})

