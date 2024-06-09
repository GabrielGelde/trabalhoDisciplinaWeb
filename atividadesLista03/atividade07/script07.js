let inpDia = document.querySelector("#inpDia");
let inpMes = document.querySelector("#inpMes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDias() {
    let dia = Number (inpDia.value);
    let mes = Number (inpMes.value);
    
    let diasDesdeInicioDoAno = (mes - 1) * 30 + dia;
    
    resultado.textContent = "Dias desde o início do ano: " + diasDesdeInicioDoAno;
}

btCalcular.onclick = function(){
    calcularDias();
}