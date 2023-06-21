# Logica Js
Esta pasta contém as resoluções dos desafios "#7DaysOfCode - Lógica JS 4/7".

## Dia 1 - 12/06
- Desafio:
O primeiro desafio foi para testar os conhecimentos dos sinais de igualdades. O comando foi o seguinte:

Sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

- Resolução:
Meu primeiro passo foi renomear as variáveis. Troquei "numeroX" por "numX" e "stringZ" por "strZ". No resultado final, isso não interfere em nada, mudei apenas por preferência. Após isso, observei os resultados esperados e, então, apliquei meus conhecimentos para solucionar o desafio.

No JavaScript há três usos do sinal de igual, sendo eles:

"=": que não se lê como "igual", mas como "atribuição". Geralmente usado para atribuir valores a variáveis.
"==": este é a igualdade entre valores. Há diferença entre os tipos de 10(Number) e "10"(String). Ao usar-se este tipo de igualdade, a comparação desconsidera o tipo, e compara apenas o valor.
"===": este é a igualdade estrita. Diferentemente da anterios, essa igualdade faz a comparação entre o valor E o tipo. Ou seja, apesar de 10 e "10" possuirem o mesmo valor, são tipos diferentes.

Ao usar corretamente os sinais de igualdade a saída esperada é a seguinte:

  As variáveis numUm e strUm tem o mesmo valor, mas tipos diferentes
  As variáveis numTrinta e strTrinta não tem o mesmo tipo
  As variáveis numDez e strDez tem o mesmo valor, mas tipos diferentes

Para conferir, basta executar o arquivo "day1.js" com o node.js ou até mesmo copiando o código e executando-o no console de um navegador.

## Dia 2 - 13/06
O desafio do dia 2 aborda variáveis e interação com o usuário. O desafio consiste no seguinte:


O programa deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

A resolução deste desafio está no arquivo "day2".

## Dia 3 - 14/06
O desafio do 3º dia aborda tomadas de decisões. 
- Desafio:
O desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

- Resolução:
Utilizei while para criar os loops e switch para tomada de decisões. A resolução pode ser acessada na pasta day3.

## Dia 4 - 15/06
O desafio do 4º dia envolve loops e interação com usuário.

- Desafio:

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

- Resolução:
Utilizei while para criar o loop de repretição, para que o usuário tivesse mais que uma chance. Você pode ver a resolução na pasta day4.

## Day 5 - 16/06
- Desafio:
O desafio do 5º dia é criar um programa de lista de compras. O programa pergunta ao usuário se ele quer adicionar comida, qual a comida e em qual categoria pré-definida esse alimento se encaixa.

- Rsolução:
Tive um pouco de dificuldade em realizar esse desafio, e sei que ainda posso melhorá-lo, mas por enquanto, ele está cumprindo com a proposta. Estou melhorando minnhas habilidades em manipular arrays e gostei do resultado. Você pode observar a resolução na pasta day5.

## Day 6 - 17/06
- Desafio:
O desafio do dia 6 foi particulamente <i>desafiador</i> para mim. O challenge era melhorar o programa do dia 5, mas dessa vez, incluindo uma função para excluir um item da lista. Eu gostei bastante do desafio, consegui aprender muitas coisas novas.

- Resolução:
Na minha resolução, eu refatorei o código do dia 5. Melhorei a organização dos arrays, utilizando lista de objetos. Utilizei bastante funções, tanto para encontrar aliementos, remover, ou formatar a exibição. Aprendi funções novas, como "map()" e "join()", e foram extremamente úteis para a melhoria do meu código. A resolução está na pasta day6.

## Dia 7 - 18/06
- Desafio:
O último desafio é para construir um calculadora e trabalhar com funções. Basicamente, o usuário informa qual operação deseja fazer, depois digita os valores e por fim, o resultado é impresso na tela. Isso acontece dentro de um loop, e, caso o usuário não deseje mais realizar nenhuma conta, ele pode encerrar a aplicação.

- Resolução:
Utilizei while para a criação do loop, switch para a escolha da operação e if para parar a aplicação. Você pode ver a resolução na pasta day7.