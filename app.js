var btntranslate = document.quarySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");

console.log(textInput)

function clickHandler(){
    console.log("clicked!");
    console.log("input", txtInput.value);
};

btntranslate.addEventlistener("click",clickHandler)