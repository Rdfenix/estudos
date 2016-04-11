var caixaNumero;
var botaoAdvinhar;

function botaoClicado() {
    alert(caixaNumero.value);
}

caixaNumero = document.getElementById("numero");
botaoAdvinhar = document.getElementById("advinhar");
botaoAdvinhar.onclick = botaoClicado;
