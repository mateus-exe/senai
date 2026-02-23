function verificaAprovacao() {
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ", nota);
    if (nota >= 7) {
        document.getElementById("resultado").innerHTML = "Aluno Aprovado";
        alert("Aluno(a) aprovado(a)");
    } else {
        document.getElementById("nota").innerHTML = "Aluno Reprovado";
        alert("Aluno(a) reprovado(a)");
    }

    console.log(nota);
}