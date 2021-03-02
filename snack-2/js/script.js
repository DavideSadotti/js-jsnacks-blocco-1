var parolaUno;
var parolaDue;

parolaUno = prompt("Inserisci una qualsiasi parola");
parolaDue = prompt("Inserisci un'altra qualsiasi parola");

if(!isNaN(parolaUno) || !isNaN(parolaDue)){
  alert("Inserisci una parola a lettere, capra!");
  parolaUno = prompt("Inserisci una qualsiasi parola");
  parolaUno = prompt("Inserisci un'altra qualsiasi parola");
}

if(parolaUno.length > parolaDue.length){
  document.getElementById("parolaMaggiore").innerHTML = "La Parola Uno è più lunga";
} else if(parolaUno.length < parolaDue.length){
  document.getElementById("parolaMaggiore").innerHTML = "La Parola Due è più lunga";
}else{
  document.getElementById("parolaMaggiore").innerHTML = "Avete entrambi inserito una parola della stessa lunghezza!"
}
