var numero;
var cifra;
var somma = 0;

numero = prompt("Inserisci un numero a 4 cifre!");
if(numero.length > 4 || numero.length < 4){
  numero = prompt("RIPROVACI! Inserisci un numero a 4 cifre!");
}

for(var i = 0; i < 4; i++){
  cifra = parseInt(numero.charAt(i));
  console.log(cifra);
  somma += cifra;
}

document.getElementById("somma").innerHTML += "La somma delle cifre del numero che hai inserito è di: " + somma;
