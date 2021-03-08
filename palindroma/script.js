// inserisco la inserireParola
var inserireParola = prompt("inserisci una parola");
console.log (inserireParola);
// mi dichiaro due var che saranno il mio ritorno della funziona e l'altra la cicla con charAt
var ritorno;
var risultato = "";
// richiamo la funzione e le passo il prompt come argomento
var richiamo = palindromo(inserireParola);


// parola è l' argomento cioè uguale a prompt
function palindromo (parola){
  // faccio un ciclo inverso in base alla lunghezza della parola inserita
for (var i = parola.length - 1; i >= 0; i--) {
  // risultato è uguale alla costruzione della parola al contrario
  risultato += parola.charAt(i);
  if (parola === risultato) {
    ritorno = "palindromo";
  }else {
    ritorno = "non palindromo";
  }
  }
  console.log(ritorno);
  return ritorno;
}
