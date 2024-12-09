var btntranslate = document.quarySelector("#btn-translate");
var textinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co./translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(text){
   return serverURL + "?" + "text=" + input
}

function erroeHandler(erroe){
   console.log("error occured", erroe);
   alert("something wrong with server. try after some time.")
}


function clickHandler(){
   //outputDiv.innerText = "ugewuugewegdujgf" + textinput.values;
   var inputText = txtInput.value;   //taking input

   //calling server for processing
   fetch(getTranslationURL(text))
   .then(responce => responce.json())
   .then(json => {
      var translatedText = json.contents.translated
      outputDiv.innerText = translatedText;
      })
   .catch(erroeHandler)
};

btntranslate.addEventlistener("click",clickHandler)