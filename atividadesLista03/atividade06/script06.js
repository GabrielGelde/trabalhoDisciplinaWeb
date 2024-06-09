let inpPesoPrato = document.querySelector("#inpPesoPrato");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularValor() {
    let pesoPrato = Number(inpPesoPrato.value);
    let precoQuilo = 12.00;
    
    let valorPagar = pesoPrato * precoQuilo;
    let resultadoValor = "Valor a pagar: R$ " + valorPagar.toFixed(2);
    
    resultado.textContent = resultadoValor;
}

btCalcular.onclick = function(){
    calcularValor();
}