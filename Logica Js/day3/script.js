const nome = prompt("Qual seu nome?");
const area = prompt(
  `Olá ${nome}, qual área da programação você deseja estudar?\nDigite 1 para FRONTEND ou 2 para BACKEND`
);

switch (area) {
  case "1":
    let linguagem = prompt(
      `${nome}, qual linguagem você deseja estudar?\nDigite 1 para REACT ou 2 para VUE`
    );
    break;
  case "2":
    linguagem = prompt(
      `${nome}, qual linguagem você deseja estudar?\nDigite 1 para C# ou 2 para JAVA`
    );
    break;
}

let especializacao = prompt(
  `Se você pretende se especializar na área digite 1, caso queira seguir como Fullstack, digite 2`
);
let tecnologia = prompt("Quais tecnologias você deseja estudar?");

let resposta = prompt(
  "Você quer adicionar outra linguagem?\nDigite 'ok' para adicionar ou 'sair' para encerrar o programa."
);

while (resposta != "sair") {
  prompt("Quais tecnologias você deseja estudar?");
  resposta = prompt(
    "Você quer adicionar outra linguagem?\nDigite 'ok' para adicionar ou 'sair' para encerrar o programa."
  );
}