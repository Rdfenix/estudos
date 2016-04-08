function mostra(f) {
    document.write(f);
    pulaLinha();
}
function pulaLinha() {
    document.write("<br>");
}
function randomNumber(x) {
    var y = Math.random(x) * 100;
    return y;
}
function verificarChute(x, y) {
    if (x == y) {
        mostra("Uau! Você acertou, pois eu pensei no numero " + y);
    }else{
        mostra("Uau! Você errou, eu tinha pensado no numero " + y);
    }
}

var numero;
var numeroPensado;
var chute;

numero = randomNumber(numeroPensado);
chute = prompt("Já pensei, qual numero voce acha que esta na minha mente ?");
verificarChute(chute, numero);