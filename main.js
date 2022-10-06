const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
$checkbox.addEventListener('change',function() {
    $html.classList.toggle('dark-mode');
})

document.querySelector('#nome').focus()
var resultado = document.querySelector(".texto")

function startImc() {
    if (document.querySelector('#altura').value != "") {
        const name = document.querySelector("#nome").value;
        const weight = parseInt(document.querySelector("#peso").value);
        const height = parseFloat(document.querySelector("#altura").value);
        const imc = weight/(height * height);
        
        const result = ` ${name}, o seu IMC é ${imc.toFixed(1)}`;
        resultado.innerText = result;
        document.querySelector("#nome").focus();
        document.querySelector("#nome").value="";
        document.querySelector("#peso").value="";
        document.querySelector("#altura").value="";
    }
}

const botao = document.querySelector("#start");
botao.addEventListener("click", startImc);
onkeydown = function (evento) {
    if (evento.code === "Enter") {
    startImc();
    }
}

const botaoReset = document.querySelector("#reset");
botaoReset.addEventListener("click", (evento) => {
    resultado.innerText = "";
    document.querySelector('#nome').focus();
});