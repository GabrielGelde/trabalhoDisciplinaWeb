let inpDias = document.querySelector("#inpDias");
let btConverter = document.querySelector("#btConverter");
let resultado = document.querySelector("#resultado");

function converterTempo() {
    let diasSemAcidentes = parseInt(inpDias.value);

    let anos = parseInt(diasSemAcidentes / 365);
    let meses = parseInt((diasSemAcidentes % 365) / 30);
    let dias = diasSemAcidentes % 30;

    resultado.textContent = "Tempo sem acidentes: " + anos + " anos, " + meses + " meses e " + dias + " dias.";
}

btConverter.onclick = function (){
    converterTempo();
}
