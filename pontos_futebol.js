//======================================================================================

function pulaLinha() {
    document.write("<br>");
}
function mostra(f) {
    document.write(f);
    pulaLinha();
}

function calculoDePontos(x, y) {
    return (x * 3) + y;
}

function transformInt(x) {
    var y = parseInt(x);
    return y;
}

function verificarPontos(x) {
    if (x > 28) {
        mostra("Nosso Time esta melhor que o Livros Velhos");
    }else if (x < 28) {
        mostra("Nosso Time esta indo pior que o Livros Velhos");
    }else if (x == 28) {
        mostra("Nosso Time esta empatado com Livros Velhos");
    }
}

//===================================================================================

var vitorias;
var empates;
var pontosVitoria = 0;
var pontosEmpate = 0;
var pontos = 0;

//==================================================================================

vitorias = prompt("Quantos jogos o CDC Futebol Clube Venceu ?");
empates = prompt("Quantos jogos o CDC Futebol Clube Empatou ?");

pontosVitoria = transformInt(vitorias);
pontosEmpate = transformInt(empates);

pontos = calculoDePontos(pontosVitoria, pontosEmpate);

mostra("Nosso time tem " + pontos + " pontos !");
verificarPontos(pontos);