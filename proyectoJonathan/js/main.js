"use strict";

//se guarda en una variable el JSON
const url = "./JSON/quiz.json";

//se captura y parsea el JSON a objeto literal de js
async function getAndParseJSON() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error al obetner o parsear el JSON", error);
  }
}
const finalData = [];

let cuestionsRamdonArray = [];

//mezclar el array obtenido
async function filterQuestions() {
  const finalData = await getAndParseJSON();
  if (finalData) {
    finalData.sort(() => Math.floor(Math.random() - 0.5));
    cuestionsRamdonArray = finalData;
  }
}

const cuestionHtmlSelector = document.getElementById("sectionCuestions");
const selectorNumeroPregunta = document.getElementById("numeroPregunta");

//inserta en el DOM el la pregunta random
async function insertRandomQuestion() {
  await filterQuestions();

  if (cuestionsRamdonArray != null) {
    cuestionsRamdonArray.forEach((element) => {
      let arrayString = element.question.replace(/\\/g, " ");
      cuestionHtmlSelector.innerHTML = `
      
      <p class="textAltered">${arrayString}
      `;
    });

    selectorNumeroPregunta.innerHTML = `
    <p class="textAltered">
    Question number: ${numOfCuestion}
    </p>
    `;
  } else {
    console.log(
      "Error : esto no funciona, no se ha podido acceder a los datos"
    );
  }
}

//se guardan los botones en variables
const firstAnswerButton = document.getElementById("answerButton1");
const secondAnswerButton = document.getElementById("answerButton2");
const thirdAnswerButton = document.getElementById("answerButton3");
const fourthAnswerButton = document.getElementById("answerButton4");

let answerArray;
let correctAnswer;

//inserta en el DOM las respuestas
async function insertAnswers() {
  await insertRandomQuestion();
  if (cuestionsRamdonArray != null) {
    cuestionsRamdonArray.forEach((element) => {
      answerArray = element.answers;
      correctAnswer = element.correct;

      firstAnswerButton.innerHTML = `
      
      <p>${answerArray[0]}</p>
      `;
      secondAnswerButton.innerHTML = `
      
      <p>${answerArray[1]}</p>
      `;
      thirdAnswerButton.innerHTML = `
      
      <p>${answerArray[2]}</p>
      `;
      fourthAnswerButton.innerHTML = `
      
      <p>${answerArray[3]}</p>
      `;
    });
  }
}

//se llaman los botones colocandoles un evento donde se llama checkAnswers como callback
firstAnswerButton.addEventListener("click", () =>
  checkAnswers(answerArray[0], correctAnswer)
);
secondAnswerButton.addEventListener("click", () =>
  checkAnswers(answerArray[1], correctAnswer)
);
thirdAnswerButton.addEventListener("click", () =>
  checkAnswers(answerArray[2], correctAnswer)
);
fourthAnswerButton.addEventListener("click", () =>
  checkAnswers(answerArray[3], correctAnswer)
); 


/**
 * tendria que a ver utilizado la tecnica DELEGACION DE EVENTOS que en definitiva en vez de agregarle cada evento a cada boton siendo estos elementos hijos, se los agregas al padre una unica vez:

 <div id="botonesContainer">
    <button data-id="btn1">Botón 1</button>
    <button data-id="btn2">Botón 2</button>
    <button data-id="btn3">Botón 3</button>
  </div>

// Delegar el manejo de eventos en el contenedor

    container.addEventListener('click', function(event) {
      // Verifica si el clic ocurrió en un <button>
      if (event.target.tagName === 'BUTTON') {
        // Obtén el valor del atributo data-id
        const buttonId = event.target.getAttribute('data-id');
        alert('Hiciste clic en el ' + buttonId);
      }
    });
LI tiene que ir en mayusculas porque en el dom esta asi
getAtribute es muy importante en esta funcion coje el atributo data-id si se presiona un boton

 */

let numOfCorrectAnwers = 0;
let numOfIncorrectAnwers = 0;
let numOfCuestion = 1;

//guardarmos la etiqueta score
const selectorNumOfCorrectAnwers = document.getElementById("score");

//cargar audios
const correctAudio = new Audio("./audio/correct.mp3");
const incorrectAudio = new Audio("./audio/incorrect.mp3");
const winAudio = new Audio("./audio/win.mp3");
const loseAudio = new Audio("./audio/lose.mp3");

//funcion que se encarga de comparar la seleccion del usuario, comprobando si es correcta o incorrecta
async function checkAnswers(selectedAnswer, correctAnswer) {
  disableEnableButtons(true);
  if (selectedAnswer === correctAnswer) {
    numOfCorrectAnwers += 1;
    selectorNumOfCorrectAnwers.innerHTML = `
    <p class = "textAltered">
    Correct, POINTS: ${numOfCorrectAnwers}
    
    </p>
    `;
    numOfCuestion++;
    correctAudio.play(); // Reproduce el audio para la respuesta correcta
  } else {
    numOfIncorrectAnwers += 1;
    selectorNumOfCorrectAnwers.innerHTML = `
    <p class = "textAltered">
    You failed, MISTAKES: ${numOfIncorrectAnwers}
    
    </p>
    `;
    numOfCuestion++;
    incorrectAudio.play(); // Reproduce el audio para la respuesta incorrecta
  }

  if (numOfCorrectAnwers === 10) {
    //se llama a la funcion
    disableEnableButtons(true);

    selectorNumOfCorrectAnwers.innerHTML = `
    <p id="questionNum" class = "textAltered">
    WON, POINTS: ${numOfCorrectAnwers}
    
    </p>
    `;
    numOfCuestion++;
    winAudio.play(); //reproduce el audio de victoria

    return;
  }
  if (numOfIncorrectAnwers === 3) {
    //se llama a la funcion
    disableEnableButtons(true);

    console.log(document.querySelector("main"));

    document.querySelector("main").innerHTML = `
    <div id="idGameOver"><p class = "textAltered">GAME OVER, MISTAKES: ${numOfIncorrectAnwers}
    
    </p> 
    
    <button type="submit" id="loadBtn">Restart</button>
    </div>`;

    //se crea evento de boton de reinicio del juego
    const selectorLoad = document.getElementById("loadBtn");
    selectorLoad.addEventListener("click", () => {
      location.reload();
    });
    numOfCuestion++;
    loseAudio.play(); //reproduce el audio de perder

    return;
  }
  setTimeout(() => {
    disableEnableButtons(false);
    insertRandomQuestion();
    insertAnswers();
  }, 500);
}

//se crea funcion  para ser llamada dentro de las condiciones
function disableEnableButtons(status) {
  firstAnswerButton.disabled = status;
  secondAnswerButton.disabled = status;
  thirdAnswerButton.disabled = status;
  fourthAnswerButton.disabled = status;
}

//boton mute para silenciar o resproducir la musica
let selectorBtnMute = document.getElementById("btnMute");
const audio = new Audio();
audio.src = "./musica/musicaDeFondo.mp3";

selectorBtnMute.innerHTML = `
   <p class="texAltered">Music:</p> 
`;
selectorBtnMute.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    selectorBtnMute.innerHTML = `
<p class="texAltered">Music:   ▶ </p> 
`;
  } else {
    audio.pause();
    selectorBtnMute.innerHTML = `
       <p class="texAltered">Music:   ||</p> 
    `;
  }
});

insertRandomQuestion();
insertAnswers();
