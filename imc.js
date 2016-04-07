var peso = 90.00;
var altura = 1.73;
var imc = 0;

var pulaLinha = function(){
  document.write("<br>");
}
var mostra = function(f){
  document.write(f);
  pulaLinha();
}
var calcularIMC = function(altura, peso){
    var imc = Math.round(peso / (altura * altura));
    return imc;
}

imc = calcularIMC(altura, peso);

mostra("IMC calculado é: " + imc);
