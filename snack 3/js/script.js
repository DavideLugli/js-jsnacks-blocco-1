// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.
// Esegui questo programma in due versioni, con il for e while


// con for
var somma = 0;

for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  console.log(numero);
  somma += numero;
}
console.log(somma);

// con while
// var i = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma += numero;
//   i++;
// }
// console.log(somma);

// senza for o while
// var numero1 = parseInt(prompt('inserisci il numero 1'));
// var numero2 = parseInt(prompt('inserisci il numero 2'));
// var numero3 = parseInt(prompt('inserisci il numero 3'));
// var numero4 = parseInt(prompt('inserisci il numero 4'));
// var numero5 = parseInt(prompt('inserisci il numero 5'));
// var numeriUtente = [numero1, numero2, numero3, numero4, numero5];
// console.log('hai inserito i numeri' + ' ' + numeriUtente);
// var numSomma = numero1 + numero2 + numero3 + numero4 + numero5;
// console.log('la somma dei numeri inseriti è' + ' ' + numSomma);
