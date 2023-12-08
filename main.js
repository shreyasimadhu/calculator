// For Back Button
function backspace(){
    var backspace = document.cform.calculatorDisplay.value
    document.cform.calculatorDisplay.value = backspace.substring(0, backspace.length - 1);
}
