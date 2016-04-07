var mostra = function(f){
  document.write(f);
  pulaLinha();
}
var pulaLinha = function(){
  document.write("<br>");
}
var diasVividos = function(x){
   return x * 365;
}
var batimentosCardiacos = function(x){
  return x * 24 * 60 * 80;
}

var idade = 0;
var dias = 0;
var batimentos = 0;

idade = prompt("Quantos anos você tem ?");
dias = diasVividos(idade);
batimentos = batimentosCardiacos(dias);

mostra("Você já viveu " + dias + " anos");
mostra("Seu coração já bateu " + batimentos + " vezes.");
console.log(idade);
console.log(batimentos);
