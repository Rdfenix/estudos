var segredos = [16, 34, 37, 42, , 50, 58];
var caixaNumero;
var botaoAdvinhar;

function botaoClicado() {
    for (var i = 0; i < segredos.length; i += 1) {
            if(segredos[i] == caixaNumero.value){
                alert("Parabéns! Você acertou o número secreto");
                return
            }
    }
    alert("Infelizmente você errou!");
}

caixaNumero = document.getElementById("numero");
botaoAdvinhar = document.getElementById("advinhar");
botaoAdvinhar.onclick = botaoClicado;
