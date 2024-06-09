let inpValorTotal = document.querySelector("#inpValorTotal");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function racharConta(valorTotal) {
    let valorCarlos = Math.floor(valorTotal / 3);
    let valorAndre = Math.floor(valorTotal / 3);
    let valorFelipe = valorTotal - valorCarlos - valorAndre;

    resultado.textContent = "Carlos: R$ " + valorCarlos.toFixed(2) + 
                            ", Andre: R$ " + valorAndre.toFixed(2) + 
                            ", Felipe: R$ " + valorFelipe.toFixed(2);
}

btCalcular.onclick = function (){
    let valorTotal = parseFloat(inpValorTotal.value);
    racharConta(valorTotal);
}
