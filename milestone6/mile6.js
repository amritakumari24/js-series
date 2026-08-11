const count = document.getElementById("count");
const increase = document.getElementById("increament");
const decrease = document.getElementById("decreament");
const themeBtn = document.getElementById("themeBtn");


let value = 0;

increase.addEventListener("click", function(){
value++
count.innerText = value;
});

decrease.addEventListener("click", function(){
    value--
    count.innerText = value;

})

reset.addEventListener("click", function(){
    count.innerText = 0;
})

themeBtn.addEventListener("click", function(){
    if (document.body.style.background === "white"||
         document.body.style.background === ""
    ){
       document.body.style.background = "black";
       document.body.style.color = "white";
    }else{
         document.body.style.background = "white";
         document.body.style.color = "black";
    }
})