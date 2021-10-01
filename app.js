var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var YodaURL = "https://api.funtranslations.com/translate/yoda.json"

function getTheTranslationURL(input) {
    return YodaURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured".error);
    alert("Something Went wrong! Please try again after some time")
}

function clickHandler() {
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTheTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)