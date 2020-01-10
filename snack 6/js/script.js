// Snack6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var n = parseInt(prompt('Inserisci un numero'));
console.log(n);

for (var i = 1; i<=n; i++) {
  console.log(Math.pow(i,3));
}
