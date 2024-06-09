let dimensaoA  = document.querySelector("#dimensaoA");
let dimensaoB  = document.querySelector("#dimensaoB");
let btAdicionarDimensoes  = document.querySelector("#btAdicionarDimensoes");
let cmpValores = document.querySelector("#cmpValores");
let area = document.querySelector("#area");

function adicionarValores(){
    let valorA = Number(dimensaoA.value);
    let valorB = Number(dimensaoB.value)
    let cmpValoress = valorA + "X" + valorB;
    cmpValores.textContent = cmpValoress
    let ValorArea = valorA * valorB;
    area.textContent = ValorArea
}

btAdicionarDimensoes.onclick = function(){
    adicionarValores();
}



