const celulas = document.querySelectorAll('.celula');

document.getElementById("botaoReiniciar").addEventListener('click',iniciarJogo)

let vezDoX = true;

function iniciarJogo() {
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClick, {once:true});
    })
}

function tratarClick(evento){
    evento.target.textContent = vezDoX ? "X" : "O";
    vezDoX = !vezDoX;
}

iniciarJogo();