let nCavalos  = document.querySelector("#nCavalos");
let btAddNumCavalos  = document.querySelector("#btAddNumCavalos");
let resultadoNumCavalos  = document.querySelector("#resultadoNumCavalos");
let resultadoFerraduras = document.querySelector("#resultadosFerraduras");


function adicionarValores(){
    let valorA = Number(nCavalos.value);
    resultadoNumCavalos.textContent = valorA;
    let valorNumFerraduras = valorA * 4;
    resultadoFerraduras.textContent = valorNumFerraduras;
}

btAddNumCavalos.onclick = function(){
    adicionarValores();
}


