let inpPrecoGasolina = document.querySelector("#inpPrecoGasolina");
let inpValorPagamento = document.querySelector("#inpValorPagamento");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularLitros(){
    let precoLitro = Number (inpPrecoGasolina.value);
    let pagamento = Number (inpValorPagamento.value);
    let litros = pagamento / precoLitro;
    let resultadoFinal = "Você conseguiu colocar " + (litros).toFixed(2) + " litros no tanque.";
    resultado.textContent = resultadoFinal;
}

btCalcular.onclick = function(){
    calcularLitros();
}