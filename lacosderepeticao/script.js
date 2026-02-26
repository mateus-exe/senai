const carros = ["Uno", "Fusca", "Escort", "Gol"];
let i = 0;
let dados = "";
const conteudo = document.getElementById("conteudo");

function criaSecao(titulo, dadosF) {
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  conteudo.appendChild(secao);
}

while (i < 4) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

criaSecao("Loop while", dados);

dados = "";
i = 0;

while (i < carros.length) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

criaSecao("Loop while melhorado", dados);

dados = "";
i = 0;

do {
  dados += "<p>" + carros[i] + "</p>";
  i++;
} while (i < carros.length);

criaSecao("Loop while invertido", dados);

dados = "";
for (i = 0; i < carros.length; i++) {
  dados += "<p>" + carros[i] + "</p>";
}
criaSecao("For", dados);

dados = "";
i = 0;
for (let carro of carros) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

criaSecao("For of", dados);

let carro1 = {marca: "Ford", modelo: "Ka", ano: "2015"};
let carro2 = {marca: "Fiat", modelo: "Uno", ano: "2000"};
let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

dados = "";

for(let carro of carros2) {
    let propriedades = "";
    for(let prop in carro){
         propriedades += carro[prop] + " | ";
    }
    dados += "<p>"+propriedades+"</p>";
}
criaSecao("For in", dados);

dados = "";

carros.forEach((carro) =>{
    dados += "<p>"+carro+"</p>"
})
criaSecao("For each", dados);