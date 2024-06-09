let inpx1 = document.querySelector("#inpx1");
let inpy1 = document.querySelector("#inpy1");
let inpx2 = document.querySelector("#inpx2");
let inpy2 = document.querySelector("#inpy2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado")

function calcularDistancia() {
    let Vx1 = Number(inpx1.value);
    let Vy1 = Number(inpy1.value);
    let Vx2 = Number(inpx2.value);
    let Vy2 = Number(inpy2.value);

    let distancia = ((Vx2 - Vx1) ** 2 + (Vy2 - Vy1) ** 2) ** 0.5;
    
    resultado.textContent = "A distância entre os pontos é: " + distancia.toFixed(2);
}

btCalcular.onclick = function (){
    calcularDistancia();
}