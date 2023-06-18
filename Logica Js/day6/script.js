let comidas = [
  { tipo: "Frutas", lista: [] },
  { tipo: "Laticinios", lista: [] },
  { tipo: "Congelados", lista: [] },
  { tipo: "Doces", lista: [] },
];
let frutas = comidas[0];
let laticinios = comidas[1];
let congelados = comidas[2];
let doces = comidas[3];
let pergunta = true;

function formatoExibicao(array) {
  let lista = array.lista.join(", ");

  return `${array.tipo}: ${lista}`;
}

function selecionarElementos() {
  return comidas.map(formatoExibicao).join("\n");
}

function encontrarElemento(elemento, array) {
  let palavraEncontrada = false;

  for (let i = 0; i < array.length; i++) {
    const lista = array[i].lista;

    if (lista.includes(elemento)) {
      palavraEncontrada = true;
    }
  }
  return palavraEncontrada;
}

function removerElemento(elemento, array) {
  for (let i = 0; i < array.length; i++) {
    const lista = array[i].lista;

    if (lista.includes(elemento)) {
      let posicao = lista.indexOf(elemento);
      lista.splice(posicao, 1);
    }
  }
}

while (pergunta !== false) {
  if (
    frutas.lista.length !== 0 ||
    laticinios.lista.length !== 0 ||
    congelados.lista.length !== 0 ||
    doces.lista.length !== 0
  ) {
    pergunta = prompt(
      "Deseja adicionar uma comida na sua lista de compras?\nResponda com 'sim' ou 'nao'\nCaso queira remover algum item digite 1"
    );
  } else {
    pergunta = prompt(
      "Deseja adicionar uma comida na sua lista de compras?\nResponda com 'sim' ou 'nao'"
    );
  }

  if (pergunta == "nao") {
    pergunta = false;
    break;
  }

  if (pergunta == 1) {
    let alimentoRemove = prompt(
      `Qual o alimento você quer remover?\n${selecionarElementos()}`
    );

    if (encontrarElemento(alimentoRemove, comidas) === true) {
      removerElemento(alimentoRemove, comidas);
    } else {
      alert(
        "Este alimento não está na lista. Tem certeza que informou o alimento correto?"
      );
    }
  } else {
    let comida = prompt("Qual comida você quer adicionar?");
    comida = comida.toLowerCase();
    let categoria = parseInt(
      prompt(
        "Em qual dessas categorias essa comida se encaixa?\n1. Frutas;\n2. Laticineos;\n3. Congelados;\n4. Doces\n"
      )
    );

    switch (categoria) {
      case 1:
        frutas.lista.push(comida);
        break;
      case 2:
        laticinios.lista.push(comida);
        break;
      case 3:
        congelados.lista.push(comida);
        break;
      case 4:
        doces.lista.push(comida);
      default:
        alert("Você escolheu uma categoria inválida.");
        break;
    }
  }
}
alert(selecionarElementos());
