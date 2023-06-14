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
const textoSaida = document.getElementById("saida");

function msg(name, age, language) {
  textoSaida.textContent = `Olá ${name.value}, você tem ${age.value} anos e já está aprendendo ${language.value}!`;
}
function display(div, display) {
  div.style.display = display;
}
function escrever(element, text) {
  element.textContent = text;
}
function mensagem() {
  if (nome.value != "" && age.value != "" && language.value != "") {
    display(form, "none");
    display(divOutput, "flex");
    msg(nome, age, language)
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
function perguntaOn() {
  display(divOutput, "none");
  display(divPergunta, "flex");
  escrever(pergunta, `Você gosta de estudar ${language.value}?`)
}
function respostaDiv() {
  display(divPergunta, "none");
  display(divResposta, "flex");
  if (resposta.value == "1") {
    escrever(respostaSaida, "Muito bom! Continue estudando e você terá muito sucesso.")
  } else {
    escrever(respostaSaida, "Ahhh, que pena... Já tentou aprender outras linguagens?")
  }
}