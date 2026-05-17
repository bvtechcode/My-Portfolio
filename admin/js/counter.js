const decrease = document.getElementById("decrease_btn");
const reset = document.getElementById("reset_btn");
const increase = document.getElementById("increase_btn");
const label = document.getElementById("label_btn");
let count = 0;

decrease_btn.onclick = function(){
    count-=1;
    label_btn.textContent = count;
}

increase_btn.onclick = function(){
    count+=1;
    label_btn.textContent = count;
}

reset_btn.onclick = function(){
    count = 0;
    label_btn.textContent = count;
}