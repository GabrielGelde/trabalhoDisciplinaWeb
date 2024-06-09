let vendaPaes = document.querySelector("#vendaPaes");
let btNumPaes = document.querySelector("#btNumPaes");
let resPaesVendidos = document.querySelector("#resPaesVendidos");
let resDinheiroVenPaes = document.querySelector("#resDinheiroVenPaes");

let vendaBroas = document.querySelector("#vendaBroas");
let btNumBroas = document.querySelector("#btNumBroas");
let resBroasVendidas = document.querySelector("#resBroasVendidas");
let resDinheiroVenBroas = document.querySelector("#resDinheiroVenBroas");

let resVendasTotais = document.querySelector("#resVendasTotais");
let btCalcularLucro = document.querySelector("#btCalcularLucro");

let precoPao = 0.12;
let precoBroa = 1.50;

function adicionarValores(){
    let valorA = Number(vendaPaes.value);
    let resultadoQntPao = "Total de pães vendidas: " + valorA;
    resPaesVendidos.textContent = resultadoQntPao;
    let resultadoVendasPao = "Entrada: R$ " + valorA * precoPao;
    resDinheiroVenPaes.textContent = resultadoVendasPao;
}

function adicionarValores2(){
    let valorB = Number(vendaBroas.value);
    let resultadoQntBroa = "Total broas vendidas: " + valorB;
    resBroasVendidas.textContent = resultadoQntBroa;
    let resultadoVendasBroa = "Entrada: R$ " + valorB * precoBroa;
    resDinheiroVenBroas.textContent = resultadoVendasBroa;
}

btNumPaes.onclick = function(){
    adicionarValores();
}

btNumBroas.onclick = function(){
    adicionarValores2();
}

function calcular(){
    let valorA = Number(vendaPaes.value);
    let valorB = Number(vendaBroas.value);
    let R$pão = valorA * precoPao;
    let R$broa = valorB * precoBroa;
    let valorTotal = R$pão + R$broa;

    let resultadoVendas = "Total de vendas totais: R$ " + (R$pão + R$broa);
    resVendasTotais.textContent = resultadoVendas;

    resultadoPoupanca = "Poupança: R$ " + (valorTotal * 0.10).toFixed(2);
    resPoupanca10.textContent = resultadoPoupanca

}

btCalcularLucro.onclick = function(){
    calcular();
}





