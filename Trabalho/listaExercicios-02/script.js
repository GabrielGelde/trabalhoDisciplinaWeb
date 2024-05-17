let ipValorKG = document.querySelector("#ipValorKG");
let ipQuantidadeKG = document.querySelector("#ipQuantidadeKG");
let btPrecoKG = document.querySelector("#btPrecoKG");
let resultadoPago = document.querySelector("#resultadoPago");

function CalcularValores(){
    let valorKG = Number (ipValorKG.value);
    let quantidadeKG = Number (ipQuantidadeKG.value);
    let resultado = valorKG * quantidadeKG;
    resultadoPago.textContent = String (resultado);
}

    btPrecoKG.onclick = function(){
        CalcularValores();
    }


