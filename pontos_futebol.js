//======================================================================================

function pulaLinha() {
    document.write("<br>");
}
function mostra(f) {
    document.write(f);
    pulaLinha();
}
function calculoDePontos(x, y, z) {
    return (x * 3) + y - z;
}
function transformInt(x) {
    var y = parseInt(x);
    return y;
}
function verificarPontos(x, y) {
    if (x > y) {
        mostra("Nosso Time esta melhor que o Livros Velhos");
    }else if (x < y) {
        mostra("Nosso Time esta indo pior que o Livros Velhos");
    }else if (x == y) {
        mostra("Nosso Time esta empatado com Livros Velhos");
    }
}

//===================================================================================

var vitorias;
var empates;
var derrota;
var vitoriasADV;
var empatesADV;
var derrotaADV;

var pontosVitoria = 0;
var pontosEmpate = 0;
var pontosDerrota = 0;
var pontos = 0;

var pontosVitoriaADV = 0;
var pontosEmpateADV = 0;
var pontosDerrotaADV = 0;
var pontosADV = 0;

//==================================================================================

vitorias = prompt("Quantos jogos o CDC Futebol Clube Venceu ?");
empates = prompt("Quantos jogos o CDC Futebol Clube Empatou ?");
derrota = prompt("Quantos jogos o CDC Futebol Clube perdeu ?");
vitoriasADV = prompt("Quantos jogos o Livros Velhos venceu ?");
empatesADV = prompt("Quantos jogos o Livros Velhos empatou ?");
derrotaADV = prompt("Quantos jogos o Livros Velhos perdeu ?");

pontosVitoria = transformInt(vitorias);
pontosEmpate = transformInt(empates);
pontosDerrota = transformInt(derrota);
pontosVitoriaADV = transformInt(vitoriasADV);
pontosEmpateADV = transformInt(empatesADV);
pontosDerrotaADV = transformInt(derrotaADV);

pontos = calculoDePontos(pontosVitoria, pontosEmpate, pontosDerrota);
pontosADV = calculoDePontos(pontosVitoriaADV, pontosEmpateADV, pontosDerrotaADV);

mostra("Nosso time tem " + pontos + " pontos !");
mostra("Time Livros Velhos " + pontosADV + " pontos !");
verificarPontos(pontos, pontosADV);