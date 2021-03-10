var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("voice").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("voice").innerHTML = Content;
    console.log(Content);
}



