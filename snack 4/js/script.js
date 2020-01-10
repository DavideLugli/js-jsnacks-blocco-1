// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['Paolo', 'Maolo', 'Tyler Dicey', 'Beltram', 'Guido'];
console.log(invitati);
var nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);
var invitato = false;
for (var i = 0; i < invitati.length; i++) {
  console.log(invitati[i]);
  if (nomeUtente == invitati[i]) {
    invitato = true;
  }
}
console.log(invitato);

if (invitato == true) {
  console.log('puoi entrare alla festa del grande gatsby');
} else {
  console.log('lei non è invitato, si sta imbucando! portatelo fuori!');
}

// col while

// var i = 0;
// var invitato = false;
// var messaggio = 'lei non è invitato, si sta imbucando! portatelo fuori!';
// while (invitato == false && i < invitati.length;) {
//   console.log(invitati[i]);
//   if (nomeUtente == invitati[i]) {
//     messaggio = 'puoi entrare alla festa del grande gatsby';
//     invitato = true;
//   }
//
//   i++
// }
