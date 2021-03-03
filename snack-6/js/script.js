var numero;

do{
  numero = parseInt(prompt("Inserisci un numero!"));
}while(isNaN(numero));

for(var i = 1; i <= numero; i++){
  var j = i;
  j = Math.pow(j, 3);
  document.getElementById("lista").innerHTML += "<li>" + "Il numero da elevare alla terza è: " + i + ". Il risultato sarà: " + j + "</li>";
}
