function pulaLinha() {
    document.write("<br>");
}
function mostra(f) {
    document.write(f);
    pulaLinha();
}
function transformInt(x) {
    var y = parseInt(x);
    return y;
}
function multiplicacao(x) {
    var multiplicador = 1;
    while(multiplicador <= 10){
        mostra(x + " x " + multiplicador + " = " + x * multiplicador);
        multiplicador +=1;
    }
}

var numero;
var numeroPassado;

numeroPassado = prompt("Numero para ser calculado");

numero = transformInt(numeroPassado);
multiplicacao(numero);
