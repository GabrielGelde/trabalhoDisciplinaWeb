let inpNumero = document.querySelector("#inpNumero");
let btImprimir = document.querySelector("#btImprimir");
let resultado = document.querySelector("#resultado");

function imprimirDigitos() {
    let numero = parseInt(inpNumero.value);

    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;

    resultado.textContent = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}

btImprimir.onclick = function (){
    imprimirDigitos();
}