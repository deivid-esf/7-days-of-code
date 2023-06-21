function soma(number1, number2) {
  return number1 + number2;
}

function subtracao(number1, number2) {
  return number1 - number2;
}

function divisao(number1, number2) {
  if (number2 == 0) {
    return "Valor inválido";
  } else {
    return number1 / number2;
  }
}

function multiplacao(number1, number2) {
  return number1 * number2;
}

let operacao = "";

while (operacao.toLowerCase !== 5) {
  operacao = parseInt(
    prompt(
      "Escolha uma das opões de operação:\n1. Soma;\n2. Subtração;\n3. Multiplicação;\n4. Divisão;\n5. Sair"
    )
  );
  if(operacao === 5){
    alert("Até a próxima");
    break;
  }
  let number1 = parseInt(prompt("Digite o primeiro valor:"));
  let number2 = parseInt(prompt("Digite o segundo valor:"));

  switch (operacao) {
    case 1:
      alert(soma(number1, number2));
      break;
    case 2:
      alert(subtracao(number1, number2));
      break;
    case 3:
      alert(multiplacao(number1, number2));
      break;
      case 4:
      alert(divisao(number1, number2));
      break;
    default:
      alert("Você selecionou uma opção inexistente")
      break;
  }
}
