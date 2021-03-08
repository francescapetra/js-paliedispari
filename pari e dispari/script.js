// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var utenteNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
var utentePariDispari = prompt("inserisci pari o dispari");
console.log(utenteNumero, utentePariDispari);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var nRandom = numeroRandom(1,6);
console.log(nRandom);

// Sommiamo i due numeri


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
