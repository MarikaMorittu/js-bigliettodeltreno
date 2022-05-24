// dichiarazione variabili
let numeroKm = parseInt(prompt("Quanti chilometri vuoi percorrere"));
let eta = parseInt(prompt("Quanti anni hai?"));
let prezzo = numeroKm * 0.21;
// prima condizione
if (isNaN(numeroKm) || isNaN(eta))
  alert(`Il vaolre da te inserito non è un numero. Riprova!`);

// operatore ternario
prezzo = eta < 18 ? prezzo * 0.8 : eta >= 65 ? prezzo * 0.6 : prezzo;

// stampa del prezzo del biglietto
document.getElementById(
  "main"
).innerHTML = `Il prezzo del tuo biglietto è: ${Math.ceil(prezzo)} €`;
