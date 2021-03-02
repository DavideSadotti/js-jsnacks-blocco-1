var numeroUno;
var numeroDue;

numeroUno = prompt("Inserisci un numero da 1 a 100");
numeroDue = prompt("Inserisci un altro numero da 1 a 100");

if(numeroUno == isNaN || numeroDue == isNaN){
  alert("Inserisci un numero a cifre e non con le lettere, capra!");
  numeroUno = prompt("Inserisci un numero da 1 a 100");
  numeroDue = prompt("Inserisci un altro numero da 1 a 100");
}

if(numeroUno > 100 || numeroUno < 1 || numeroDue > 100 || numeroDue < 1){
  alert("Inserisci un numero compreso tra 1 e 100, capra!");
  numeroUno = prompt("Inserisci un numero da 1 a 100");
  numeroDue = prompt("Inserisci un altro numero da 1 a 100");
}

if(numeroUno > numeroDue){
  document.getElementById("numeroMaggiore").innerHTML = "Il Numero Uno ha inserito un numero maggiore";
} else if(numeroUno < numeroDue){
  document.getElementById("numeroMaggiore").innerHTML = "Il Numero Due ha inserito un numero maggiore";
}else{
  document.getElementById("numeroMaggiore").innerHTML = "Avete entrambi inserito lo stesso numero!"
}
