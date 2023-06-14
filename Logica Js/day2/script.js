const form = document.getElementById("form");
const divOutput = document.getElementById("output");
const divPergunta = document.getElementById("div-quest");
const divResposta = document.getElementById("div-resposta");
const nome = form.name;
const age = form.age;
const language = form.programming;
const pergunta = document.getElementById("quest");
const resposta = document.getElementById("resposta");
const respostaSaida = document.getElementById("resposta-text");
const mensagemSaida = document.getElementById("saida");

function exibirElemento(elemento, display) {
  elemento.style.display = display;
}
function definirTexto(element, text) {
  element.textContent = text;
}
function exibirMensagem() {
  if (nome.value != "" && age.value != "" && language.value != "") {
    exibirElemento(form, "none");
    exibirElemento(divOutput, "flex");
    definirTexto(mensagemSaida, `Olá ${nome.value}, você tem ${age.value} anos e já está aprendendo ${language.value}!`)
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
function exibirPergunta() {
  exibirElemento(divOutput, "none");
  exibirElemento(divPergunta, "flex");
  definirTexto(pergunta, `Você gosta de estudar ${language.value}?`)
}
function exibirResposta() {
  exibirElemento(divPergunta, "none");
  exibirElemento(divResposta, "flex");
  if (resposta.value == "1") {
    definirTexto(respostaSaida, "Muito bom! Continue estudando e você terá muito sucesso.")
  } else {
    definirTexto(respostaSaida, "Ahhh, que pena... Já tentou aprender outras linguagens?")
  }
}