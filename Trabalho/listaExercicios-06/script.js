let ipValorA = document.querySelector("#ipValorA");
let ipValorB = document.querySelector("#ipValorB");
let ipValorC = document.querySelector("#ipValorC");
let ipValorD = document.querySelector("#ipValorD");
let btExibirMenor = document.querySelector("#btExibirMenor");
let menorValor = document.querySelector("#menorValor");

function verificarMenorValor() {
    let valorA = Number(ipValorA.value);
    let valorB = Number(ipValorB.value);
    let valorC = Number(ipValorC.value);
    let valorD = Number(ipValorD.value);

    if (valorA < valorB && valorA < valorC && valorA < valorD) {
        menorValor.textContent = String(valorA);
    } else if (valorB < valorA && valorB < valorC && valorB < valorD) {
        menorValor.textContent = String(valorB);
    } else if (valorC < valorA && valorC < valorB && valorC < valorD) {
        menorValor.textContent = String(valorC);
    } else if (valorD < valorA && valorD < valorB && valorD < valorC) {
        menorValor.textContent = String(valorD);
    }
}

btExibirMenor.onclick = function () {
    verificarMenorValor();
}
