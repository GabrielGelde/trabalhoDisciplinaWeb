let ipValorA = document.querySelector("#ipValorA");
let ipValorB = document.querySelector("#ipValorB");
let ipValorC = document.querySelector("#ipValorC");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Calcular (){
    let valorA = Number (ipValorA.value);
    let valorB = Number (ipValorB.value);
    let valorC = Number (ipValorC.value);

    let mediaAritmetica = (valorA + valorB + vlr3) / 3; 
    let somaValoresPesos = (valorA * 3) + (valorB * 2) + (valorC * 5);
    
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;
    let somaMedias = mediaAritmetica + mediaPonderada;
    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
    "Media Aritmetica: "+mediaAritmetica+"<br>"+
     "MediaPonderada: "+mediaPonderada+"<br>"+
     "Soma das Medias: "+somaMedias+"<br>"+
     "Media das Medias "+mediaMedias+"<br>"
}

btCalcular.onclick = function (){
    Calcular()
}