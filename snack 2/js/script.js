// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
var parolaUno = prompt('inserisci una parola');
console.log(parolaUno);
var parolaDue = prompt('Bene, inserisci un altra parola');
console.log(parolaDue);
if (parolaUno.length > parolaDue.length) {
  console.log('parola più corta' + ' ' + parolaDue);
  console.log('parola più lunga' + ' ' +parolaUno);
} else if (parolaUno.length < parolaDue.length) {
  console.log('parola più corta' + ' ' + parolaUno);
  console.log('parola più lunga' + ' ' + parolaDue);
} else {
  console.log('hai inserito parole della stessa lunghezza');
}
