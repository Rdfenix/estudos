var pulaLinha = function(){
  document.write("<br>");
}
var mostra = function(f){
  document.write(f);
  pulaLinha();
}
var transformFloat = function(x){
  var y = parseFloat(x);
  return y;
}
var calcularIMC = function(altura, peso){
    var imc = Math.round(peso / (altura * altura));
    return imc;
}
function verificaIMC(x) {
    if (x < 18.5) {
        mostra("Seu IMC indica que você esta abaixo do peso");
    }else if (x > 35) {
        mostra("Seu IMC indica que você esta acima do peso");
    }else if (x >= 18.5 && x <= 35) {
        mostra("OK! Seu IMC esta entre os dois limites.");
    }
}

var alturaDoUsuario = prompt("Qual a sua altura ?");
var pesoDoUsuario = prompt(" e qual o seu peso  ?");
var imc = 0;
var altura = 0;
var peso = 0;

altura = transformFloat(alturaDoUsuario);
peso = transformFloat(pesoDoUsuario);
imc = calcularIMC(alturaDoUsuario, pesoDoUsuario);

mostra("<h1>Pesos e Medidas</h1>");
mostra("<hr>");
mostra("Altura: " + altura);
mostra("Peso: " + peso);
mostra("IMC: " + imc);

verificaIMC(imc);

console.log("Altura " + altura);
console.log("peso " + peso);
console.log("calculo " + imc);
