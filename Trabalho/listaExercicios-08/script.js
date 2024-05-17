let btBuscarProduto = document.querySelector("#btBuscarProduto");
let resultado = document.querySelector("#resultado");

function buscarProduto() {
    let c001 = Text(codigoX.value);
    let c002 = Text(codigoX.value);
    let c003 = Text(codigoX.value);
    
    if (c001 === "001") {
        resultado.textContent = String ("Parafuso");
    }
    
    if (c002 === "002") {
        resultado.textContent = String ("Porca");
    }
    
    if (c003 === "003") {
        resultado.textContent = String ("Prego");
    }
}

btBuscarProduto.onclick = function() {
    buscarProduto();
}