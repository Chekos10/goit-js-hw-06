const textInput = document.getElementById("validation-input")
const dataLength = textInput.getAttribute('data-length');
textInput.addEventListener("blur", colorBorder)

function colorBorder(event){
    const textLength = event.target.value.trim().length;
    if(Number(dataLength) === textLength){
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }else{
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}
    

