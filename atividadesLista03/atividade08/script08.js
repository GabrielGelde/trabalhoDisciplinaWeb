let inpQtdPequenas = document.querySelector("#inpQtdPequenas");
let inpQtdMedias = document.querySelector("#inpQtdMedias");
let inpQtdGrandes = document.querySelector("#inpQtdGrandes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularValor() {
    let qtdPequenas = Number(inpQtdPequenas.value);
    let qtdMedias = Number(inpQtdMedias.value);
    let qtdGrandes = Number(inpQtdGrandes.value);
    
    let precoPequena = 10.00;
    let precoMedia = 12.00;
    let precoGrande = 15.00;
    
    let valorTotal = (qtdPequenas * precoPequena) + (qtdMedias * precoMedia) + (qtdGrandes * precoGrande);
    
    resultado.textContent = "Valor total da venda: R$ " + valorTotal.toFixed(2);
    
}

btCalcular.onclick = function (){
    calcularValor();
}