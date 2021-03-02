var listaDispari = [];
var numero;

for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt("Inserisci un numero"));

  if(isNaN(numero)){
    numero = parseInt(prompt("Inserisci un numero con le cifre!!"));
  }

  if(numero %2 == 1){
    listaDispari.push(numero);
    document.getElementById("listaDispari").innerHTML += "<li>" + numero + "</li>";
  }
}
