const count = document.getElementById("count");
const increase = document.getElementById("increament");
const decrease = document.getElementById("decreament");

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