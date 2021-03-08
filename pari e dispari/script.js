// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

do {
  var utenteNumero = parseInt(prompt("inserisci un numero da 1 a 5"));

} while ((isNaN(utenteNumero))|| (utenteNumero > 5) || (utenteNumero < 1));

do {

var utentePariDispari = prompt("inserisci pari o dispari");

} while (utentePariDispari != "pari" && utentePariDispari != "dispari");

console.log(utenteNumero, utentePariDispari);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var nRandom = numeroRandom(1,6);
console.log(nRandom);

// Sommiamo i due numeri

// function risultato (totale){
// return somma;
// }
var somma = utenteNumero + nRandom;
// console.log(somma);
var  evenEodd;
var risultatoFinale = pariDispari(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari (granTotale){
  console.log(granTotale);
  if (granTotale  %2 == 0) {
    evenEodd = "pari";
  }else {
    evenEodd = "dispari";
  }
   return evenEodd;
}
console.log(risultatoFinale);
// Dichiariamo chi ha vinto.
if (risultatoFinale == utentePariDispari) {
console.log ( "hai vinto");
}else
console.log("hai perso");
