var btntranslate = document.quarySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler(){
   outputDiv.innerText = "ugewuugewegdujgf" + textinput.values;
};

btntranslate.addEventlistener("click",clickHandler)