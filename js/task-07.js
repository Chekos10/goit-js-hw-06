const size = document.getElementById("font-size-control");
const spanEl = document.getElementById("text")
size.addEventListener("input", sizeChange)
function sizeChange(event){
    spanEl.style.fontSize = `${event.currentTarget.value}px`
}