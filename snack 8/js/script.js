// Snack8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numUtente = prompt('inserisci un n di 4 cifre');
// non uso il parse int perchè ci complica la ''separazione'' del numero nelle 4 cifre. conviene usarlo come stringa, separare le cifre con un ciclo e poi convertirle in numero con un parse int
var somma = 0;
console.log(numUtente);

for (var i = 0; i < numUtente.length; i++) {
  // console.log(numUtente[i]);
  console.log(parseInt(numUtente[i]));
  somma += parseInt(numUtente[i]);
}

console.log(somma);
