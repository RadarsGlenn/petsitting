function toggleAnswer(questionNumber) {
    var answerElement = document.getElementById("answer" + questionNumber);
    var imageElement = answerElement.parentNode.querySelector("img");
    var containerElement = answerElement.parentNode.parentNode;
    
    if (answerElement.style.height === "0px") {
        answerElement.style.height = "auto";
        imageElement.src = "images/picto/moins.png";
        containerElement.style.height = "auto";
    } else {
        answerElement.style.height = "0";
        imageElement.src = "images/picto/plus.png";
        containerElement.style.height = "auto"; // Ajustez la hauteur par défaut selon vos besoins
    }
}