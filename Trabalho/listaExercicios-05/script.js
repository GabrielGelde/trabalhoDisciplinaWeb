let ipValorA = document.querySelector("#ipValorA");
let ipValorB = document.querySelector("#ipValorB");
let btExibirMaior = document.querySelector("#btExibirMaior");
let maiorValor = document.querySelector("#maiorValor");

function verificarMaiorValor(){
    let valorA = Number(ipValorA.value);
    let valorB = Number(ipValorB.value);

    //desvio condicional
    if(valorA > valorB){
        maiorValor.textContent = String (valorA); 
    }else{(valorA < valorB) 
        maiorValor.textContent = String (valorB); 
}

}

btExibirMaior.onclick = function(){
    verificarMaiorValor();

}

