var btnTranslated = document.querySelector("#btn-translate");
var txtInput = decodeURIComponent.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", errer );
    alert("something wrong with server! plese try again after somr timr")
}


function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(responce => responce.json())
    .then(json => console.log(json.content.translated))
    .catch(errorHandler)
};

btnTranslated.addEventListener("click",clickHandler``)