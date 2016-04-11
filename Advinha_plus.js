var caixaNumero;
var botaoAdvinhar;
var numero;
var numeroPensado;

function randomNumber(x) {
    var y = Math.random(x) * 100;
    return y;
}

function botaoClicado() {
    if (numeroPensado == caixaNumero.value) {
        alert("Parabéns! Você acertou o número secreto");
    }else{
        alert("Infelizmente você errou!");
    }
}

numeroPensado = randomNumber(numero);
caixaNumero = document.getElementById("numero");
botaoAdvinhar = document.getElementById("advinhar");
botaoAdvinhar.onclick = botaoClicado;
