var lista = ["Davide", "John", "Miller", "Hartman", "Fabio", "Arthur"];
var nomeUtente;

nomeUtente = prompt("Dimmi il tuo nome così controllo in lista se ci sei o no!");

for (var i = 0; i < lista.length; i++) {
  console.log(lista[i]);
  if(nomeUtente = lista[i]){
    document.getElementById("lista").innerHTML = "Sei in lista, adesso puoi entrare alla Grande Festa del Grande Gatsby";
  }else{
    document.getElementById("lista").innerHTML = "Fuori dalle balle!!!";
  }
}
