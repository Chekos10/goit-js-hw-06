const size = document.getElementById("font-size-control");
const spanEl = document.getElementById("text")
spanEl.style.fontSize = size.value +'px'
size.addEventListener("input", sizeChange)
function sizeChange(event){
    spanEl.style.fontSize = `${event.currentTarget.value}px`
}
