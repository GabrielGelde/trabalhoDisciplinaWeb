let ipValorA = document.querySelector("#ipValorA");
let btVerificarImpar = document.querySelector("#btVerificarImpar");
let resultado = document.querySelector("#resultado");

function verificarParidade() {
    let numero = Number(ipValorA.value);

    if (numero % 2 !== 0) {
        resultado.textContent = String ("O número é ímpar!!!!!!");
    } else {
        resultado.textContent = String ("O número é par!!!!!!!");
    }
}

btVerificarImpar.onclick = function () {
    verificarParidade();
}