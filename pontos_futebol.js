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

//----------- CDC -------------------------------------------
var vitorias;
var empates;
var derrota;

//----------- Livros Velhos ----------------------------------
var vitoriasADV;
var empatesADV;
var derrotaADV;

//----------- CDC -------------------------------------------
var pontosVitoria = 0;
var pontosEmpate = 0;
var pontosDerrota = 0;
var pontos = 0;

//----------- Livros Velhos ----------------------------------
var pontosVitoriaADV = 0;
var pontosEmpateADV = 0;
var pontosDerrotaADV = 0;
var pontosADV = 0;

//==================================================================================

//----------- CDC -------------------------------------------
vitorias = prompt("Quantos jogos o CDC Futebol Clube Venceu ?");
empates = prompt("Quantos jogos o CDC Futebol Clube Empatou ?");
derrota = prompt("Quantos jogos o CDC Futebol Clube perdeu ?");

//----------- Livros Velhos ----------------------------------
vitoriasADV = prompt("Quantos jogos o Livros Velhos venceu ?");
empatesADV = prompt("Quantos jogos o Livros Velhos empatou ?");
derrotaADV = prompt("Quantos jogos o Livros Velhos perdeu ?");

//----------- CDC -------------------------------------------
pontosVitoria = transformInt(vitorias);
pontosEmpate = transformInt(empates);
pontosDerrota = transformInt(derrota);

//----------- Livros Velhos ----------------------------------
pontosVitoriaADV = transformInt(vitoriasADV);
pontosEmpateADV = transformInt(empatesADV);
pontosDerrotaADV = transformInt(derrotaADV);

//----------- CDC -------------------------------------------
pontos = calculoDePontos(pontosVitoria, pontosEmpate, pontosDerrota);

//----------- Livros Velhos ----------------------------------
pontosADV = calculoDePontos(pontosVitoriaADV, pontosEmpateADV, pontosDerrotaADV);

//----------- CDC -------------------------------------------
mostra("Nosso time tem " + pontos + " pontos !");

//----------- Livros Velhos ----------------------------------
mostra("Time Livros Velhos " + pontosADV + " pontos !");

//----------pontos calculados --------------------------------
verificarPontos(pontos, pontosADV);