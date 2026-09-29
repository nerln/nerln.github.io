// La chat di mimo è in pausa. Questo file cancella soltanto quello che la
// vecchia pagina aveva salvato in questo browser: il nome (mimo_username) e
// le chiavi mimo_chat_*. Non tocca theme né altre chiavi, e non fa richieste.
try {
  var daCancellare = [];
  for (var i = 0; i < localStorage.length; i++) {
    var chiave = localStorage.key(i);
    if (chiave === "mimo_username" || (chiave && chiave.indexOf("mimo_chat_") === 0)) {
      daCancellare.push(chiave);
    }
  }
  for (var j = 0; j < daCancellare.length; j++) {
    localStorage.removeItem(daCancellare[j]);
  }
} catch (e) {
  // localStorage non disponibile: non c'è niente da cancellare.
}
