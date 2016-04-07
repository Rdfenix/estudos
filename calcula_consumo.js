var pulaLinha = function(){
  document.write("<br>");
}
var tracoLinha = function(){
  document.write("<hr>");
}
var mostra = function(f){
  document.write(f);
}
var dividi = function(x, y){
    return x / y;
}
var multiplica = function(x, y){
  return x * y;
}
var transform = function(x){
    return x.toFixed(2);
}

var tanque = 40;
var caminhoComGasolina = 480;
var caminhoComAlcool = 300;
var consumoDeGasolina = 0;
var consumoDeAlcool = 0;
var gasolina = 0;
var alcool = 0;

var precoGasolina = 2.90;
var precoAlcool  = 2.40;
var precoG = 0;
var precoA = 0;

consumoDeGasolina = dividi(caminhoComGasolina, tanque);
consumoDeAlcool = dividi(caminhoComAlcool, tanque);

gasolina = transform(consumoDeGasolina);
alcool = transform(consumoDeAlcool);

precoPorKilometroGasolina = multiplica(precoGasolina, gasolina);
precoPorKilometroAlcool = multiplica(precoAlcool, alcool);

precoG = transform(precoPorKilometroGasolina);
precoA = transform(precoPorKilometroAlcool);

mostra("Consumo de Gasolina: " + gasolina);
pulaLinha();
mostra("Consumo de Alcool: " + alcool);
tracoLinha();
mostra("<h3>Preço Por Quilometro:</h3>");
mostra("R$: " + precoG);
pulaLinha();
mostra("R$: " + precoA);
