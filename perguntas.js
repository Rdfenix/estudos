var pulaLinha = function(){
  document.write("<br>");
}

var mostra = function(f){
  document.write(f);
  pulaLinha();
}

var nome = prompt("Qual o seu nome ?");
mostra("Bem Vindo "  + nome);
var idade = prompt(nome + "qual a sua idade ?");
mostra(nome + " tem " + idade + " anos.");
