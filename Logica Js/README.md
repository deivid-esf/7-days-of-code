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