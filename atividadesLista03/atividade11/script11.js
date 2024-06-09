let inpSalario = document.querySelector("#inpSalario");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularSalario() {
    let salario = parseFloat(inpSalario.value);

    let salarioComAumento = salario * 1.15;
    let salarioFinal = salarioComAumento * 0.92; // desconto de 8% de impostos

    resultado.textContent = "Salário inicial: R$ " + salario.toFixed(2) + 
                            "\nSalário com aumento: R$ " + salarioComAumento.toFixed(2) + 
                            "\nSalário final (com desconto de impostos): R$ " + salarioFinal.toFixed(2);
}

btCalcular.onclick = function (){
    calcularSalario();
}