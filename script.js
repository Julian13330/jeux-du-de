// Déclaration des variables
let activePlayer = 'player 1';
let randomNumber = 0;
let currentScore = 0;
let reserveScore = 0;
let currentScore2 = 0;
let reserveScore2 = 0;
let loseScore = 0;
let currentText = document.getElementById("currentScore");
let reserveText = document.getElementById("reserveScore");
let current = currentScore;
let reserved = reserveScore;

const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
const logoplus = document.getElementById("logoplus");

// fonction remise à zero 
function newGame(){
  currentText.textContent = 0;
  reserveText.textContent = 0;
  current = 0;
  reserved = 0;
  document.getElementById("currentScore").textContent = 0;
  document.getElementById("reserveScore").textContent = 0;
  document.getElementById("currentScore2").textContent = 0;
  document.getElementById("reserveScore2").textContent = 0;
}

// fonction pour le changement de joueur
function switchPlayer() {
  if (activePlayer === 'player 1') {
    activePlayer = 'player 2';
  } else {
    activePlayer = 'player 1';
  }

 // Changement du joueur
 switch (activePlayer) {
  case 'player 1': {
    currentText = document.getElementById("currentScore");
    reserveText = document.getElementById("reserveScore");
    current = currentScore;
    reserved = parseInt(reserveText.innerHTML);
    break;
  }
  case 'player 2': {
    currentText = document.getElementById("currentScore2");
    reserveText = document.getElementById("reserveScore2");
    current = currentScore;
    reserved = parseInt(reserveText.innerHTML);
    break;
  }
  default: {
    console.log('erreur de sélection de joueur');
  }
}  
}

// fonction tirage du dé
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction appelée si le résultat du dé est 1
function currentScoreLose() {
  currentText.textContent = loseScore;
  current = 0;
  alert ('vous avez fait 1 vous devais passer votre tour');
}

//fonction tirage du dé
function rollDice() {
  randomNumber = getRandomInt(1, 6);
  setTimeout(function(){
    if (randomNumber === 1) {
      currentScoreLose();
      switchPlayer();
    } else {
      current += randomNumber;
      currentText.textContent = current;
    }
  }, 500)
}

// fonction du Hold = utiliser parseInt
function reserve() {
  reserved += current;
  reserveText.textContent = reserved;
  if (reserved >=100){
    alert(`${activePlayer}: vous avez remporté le match !!!!`)
  }
  switchPlayer();
  document.getElementById('currentScore').innerHTML = "CURRENT : " + 0;
  document.getElementById('currentScore2').innerHTML = "CURRENT : " + 0;
}

// Appelle des fonctions avec un listener
roll.addEventListener("click", rollDice);
hold.addEventListener("click", reserve);
roll.addEventListener("click",diceOne);
logoplus.addEventListener("click",newGame);

// -------------------------------------------------------- //
// Fonction déplacement du dé
function diceOne () {
  if (randomNumber === 1) {
    canvas;
    ctx.clearRect(10,10,100,100);
    // Commencement
      ctx.beginPath();
      // premier point : point au centre
      ctx.fillStyle = "red";
      ctx.arc(50,55,08,0, Math.PI*2);
      ctx.fill();
      // Clôture
      ctx.closePath()
  }
  else if (randomNumber === 2){
    canvas;
    ctx.clearRect(10,10,100,100);
    // Commencement
      ctx.beginPath();
      // premier point : point au centre
      ctx.fillStyle = "red";
      ctx.arc(50,25,08,0, Math.PI*2);
      ctx.fill();
      // deuxième point : point en haut à gauche
      ctx.fillStyle = "red";
      ctx.arc(50,80,08,0, Math.PI*2);
      ctx.fill();
      // Clôture
      ctx.closePath()
  }
  else if (randomNumber === 3) {
    canvas;
    ctx.clearRect(10,10,100,100);
    // Commencement
    ctx.beginPath();
    // premier point : point en haut
    ctx.fillStyle = "red";
    ctx.arc(50,20,08,0, Math.PI*2);
    ctx.fill();
    // deuxième point : point au centre
    ctx.fillStyle = "red";
    ctx.arc(50,52,08,0, Math.PI*2);
    ctx.fill();
    // troisième point : point en bas
    ctx.fillStyle = "red";
    ctx.arc(50,85,08,0, Math.PI*2);
    ctx.fill();
    // Clôture
    ctx.closePath()
    // Clôture
    ctx.closePath()

  }
  else if (randomNumber === 4){
    canvas;
    ctx.clearRect(10,10,100,100);
    // Commencement
    ctx.beginPath();
    // premier point : point en haut à gauche
    ctx.fillStyle = "red";
    ctx.arc(20,25,08,0, Math.PI*2);
    ctx.fill();
    // deuxième point : point en haut à droite
    ctx.moveTo(0,0);
    ctx.fillStyle = "red";
    ctx.arc(80,25,08,0, Math.PI*2);
    ctx.fill();
    // troisième point : point en bas à droite
    ctx.moveTo(0,0);
    ctx.fillStyle = "red";
    ctx.arc(80,85,08,0, Math.PI*2);
    ctx.fill();
    // cinquième point : point en bas à gauche
    ctx.moveTo(0,0);
    ctx.fillStyle = "red";
    ctx.arc(20,85,08,0, Math.PI*2);
    ctx.fill();
    // Clôture
    ctx.closePath()
  }
  else if (randomNumber === 5){
      canvas;
      ctx.clearRect(10,10,100,100);
    // Commencement
      ctx.beginPath();
      // premier point : point au centre
      ctx.fillStyle = "red";
      ctx.arc(50,55,08,0, Math.PI*2);
      ctx.fill();
      // deuxième point : point en haut à gauche
      ctx.fillStyle = "red";
      ctx.arc(20,25,08,0, Math.PI*2);
      ctx.fill();
      // troisième point : point en haut à droite
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(80,25,08,0, Math.PI*2);
      ctx.fill();
      // quatirème point : point en bas à droite
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(80,85,08,0, Math.PI*2);
      ctx.fill();
      // cinquième point : point en bas à gauche
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(20,85,08,0, Math.PI*2);
      ctx.fill();
      // Clôture
      ctx.closePath()
  }
  else if(randomNumber === 6){
      canvas;
      ctx.clearRect(10,10,100,100);
      // Commencement
      ctx.beginPath();
      // premier point : point en haut à gauche
      ctx.fillStyle = "red";
      ctx.arc(20,25,08,0, Math.PI*2);
      ctx.fill();
      // deuxième point : point en haut à droite
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(80,25,08,0, Math.PI*2);
      ctx.fill();
      // troisième point : point en bas à droite
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(80,85,08,0, Math.PI*2);
      ctx.fill();
      // quatrième point : point en bas à gauche
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(20,85,08,0, Math.PI*2);
      ctx.fill();
      // cinquième point : point milieu gauche
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(20,55,08,0, Math.PI*2);
      ctx.fill();
      // sixième point : point milieu gauche
      ctx.moveTo(0,0);
      ctx.fillStyle = "red";
      ctx.arc(80,55,08,0, Math.PI*2);
      ctx.fill();
      // Clôture
      ctx.closePath()
  }
}