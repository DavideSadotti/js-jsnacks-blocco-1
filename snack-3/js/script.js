var numero;
var somma = 0;

for(var i = 0; i < 10; i++){
  numero = parseInt(prompt("Inserisci un qualsiasi numero!"));
  if(isNaN(numero)){
    numero = parseInt(prompt("Inserisci un qualsiasi numero ma questa volta a cifre!"));
  }
  somma += numero;
}

document.getElementById("numero").innerHTML = "La somma totale è di: " + somma;
