let ipSaldo = document.querySelector("#ipSaldo");
let btImprimir = document.querySelector("#btImprimir");
let resultadoSaldoUmPorCento = document.querySelector("#resultadoSaldoUmPorCento");

function CalcularValores() {
    let numero = Number(ipSaldo.value);
    let resultado = numero * (1*0.01);
    resultadoSaldoUmPorCento.textContent = String(resultado);
}

btImprimir.onclick = function() {
    CalcularValores();
}





