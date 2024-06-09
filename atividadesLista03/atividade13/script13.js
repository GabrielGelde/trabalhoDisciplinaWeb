let inpRaio = document.querySelector("#inpRaio");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularAreaPizza(raio) {
    const pi = 3.14;
    let area = pi * raio ** 2;
    return area;
}

btCalcular.onclick = function (){
    let raio = parseFloat(inpRaio.value);
    let area = calcularAreaPizza(raio);
    resultado.textContent = "A área da pizza é: " + area.toFixed(2) + " cm²";
}