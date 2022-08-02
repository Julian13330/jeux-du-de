// Création du canvas dé avec résultat 3 par défaut

const canvas = document.getElementById("monCanvas");
const ctx = canvas.getContext('2d');

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

// --------------------------------------------------------------- //

