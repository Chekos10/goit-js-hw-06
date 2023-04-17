const minusBtn = document.querySelector('button[data-action="decrement"]')
const plusBtn = document.querySelector('button[data-action="increment"]')
const counter = document.getElementById("counter")
const counterValue = document.querySelector("#value");
let value = 0;
const increaseOp = () =>{
    value +=1
    counterValue.textContent = value;
}
const decrementOp = () =>{
    value -=1
    counterValue.textContent = value;
}
minusBtn.addEventListener("click",decrementOp);
plusBtn.addEventListener("click",increaseOp);


