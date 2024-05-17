let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarValores(){
    let valor1 = Number (ipValor1.value);
    let valor2 = Number (ipValor2.value);
    let resultado = valor1 + valor2;
    h3Resultado.textContent = String (resultado);
}

btSomar.onclick = function(){
    somarValores();
}

let ipValorPago = document.querySelector("#ipValorPago");
let ipValorProduto = document.querySelector("#ipValorProduto");
let btSubtrair = document.querySelector("#btSubtrair");
let h3Troco = document.querySelector("#h3Troco");

function subtrairValores(){
    let valorPago = Number (ipValorPago.value);
    let valorProduto = Number (ipValorProduto.value);
    let troco = valorPago - valorProduto;
    h3Troco.textContent = String (troco);
}

btSubtrair.onclick = function(){
    subtrairValores();
}