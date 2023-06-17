let comidas = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
};
let frutas = comidas.frutas;
let laticinios = comidas.laticinios;
let congelados = comidas.congelados;
let doces = comidas.doces;

let pergunta = true;

while (pergunta !== false) {
  pergunta = prompt(
    "Deseja adicionar uma comida na sua lista de compras?\nResponda com 'sim' ou 'nao'"
    );

    if (pergunta == "nao") {
      pergunta = false;
      break;
    }
    
  let comida = prompt("Qual comida você quer adicionar?");
  let categoria = prompt(
      "Em qual dessas categorias essa comida se encaixa?\n1. Frutas;\n2. Laticineos;\n3. Congelados;\n4. Doces\n"
      );

  if (categoria == 1) {
    frutas.push(comida);
  } else if (categoria == 2) {
    laticinios.push(comida);
  } else if (categoria == 3) {
    congelados.push(comida);
  } else if (categoria == 4) {
    doces.push(comida);
  } else {
    alert("Você escolheu uma categoria inválida.")
  }

}

alert(`Frutas: ${frutas}\nLaticinios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);

