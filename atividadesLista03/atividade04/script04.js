let iptNome = document.querySelector("#iptNome");
let iptIdade = document.querySelector("#iptIdade");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDiasDeVida() {
    let nome = String (iptNome.value);
    let idade = Number (iptIdade.value);
    let diasDeVida = idade * 365;
    let resultadoFinal = (nome) + ", VOCE JA VIVEU " + (diasDeVida) + " DIAS.";
    resultado.textContent = resultadoFinal
}

btCalcular.onclick = function(){
    calcularDiasDeVida()
}