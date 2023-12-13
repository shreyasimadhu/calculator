function backButton(){
    var backButton = document.calculator.display.value
    document.calculator.display.value = backButton.substring(0, backButton.length - 1);
}

function myForm(){
    var hideShow = document.getElementById('myForm');
    var mainForm = document.getElementById('allForm');

    if(hideShow.checked == true){
        mainForm.style.visibility = 'visible';
    }else{
        mainForm.style.visibility = 'hidden';
    }
}


function myOnOffFunc(){
    var onOFF = document.getElementById('onoff');
    var display = document.getElementById('dsply');
    var mainForms = document.getElementById('allForm');

    if(onOFF.checked == true){
        display.name = "display";
        mainForms.name = 'calculator';
    }else{
        // display.name = location.reload();
        display.name = "displays";
        mainForms.name = null;
    }
}




