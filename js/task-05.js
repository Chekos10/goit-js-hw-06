const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");
textInput.addEventListener("input", (event)=>{
    textOutput.textContent = event.target.value;
    if(textInput.value.trim() === ""){
        textOutput.textContent = "Anonymous"
    }else{
        textOutput.textContent = textInput.value
    }
})

