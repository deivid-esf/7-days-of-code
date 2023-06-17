const numeroSorteado = Math.round(Math.random() * 50);
let tentativas = 2;
let erros = 0;

while (erros <= tentativas) {
  let numeroPensado = parseInt(prompt("Advinhe o número que estou pensando: "));

  let tentativasRestantes = tentativas - erros;

  if (numeroPensado != numeroSorteado) {
    if (tentativasRestantes != 0) {
      alert(`Restam ${tentativasRestantes} tentativas.`);
    } else {
      alert(
        `As tentativas acabaram! O número que eu pensei foi o ${numeroSorteado}`
      );
    }
  } else {
    alert("Parabéns! Você acertou!");
    break;
  }
  erros++;
}
