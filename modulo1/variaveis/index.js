  
                                 /*Exercício de variáveis


1 .Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

*Será impresso, 1º 10 na outra linha 10 5 -> Pois a variável mudou após imprimir o b = 10

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//*Será impresso 10 10 10

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
   Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os
   nomes não podem começar com números ou caracteres especiais.

   let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
   let quantoGanhaPorDia = prompt("Quanto você recebe por dia?")
   alert(`Voce recebe ${t/p} por hora`)*/


//1. Construindo um programa de acordo com os passos:
// a) Declarando uma variável para armazenar nome informado pelo usuário

const nome = prompt("Qual seu nome?")

// b) Declarando uma variável para armazenar idade informado pelo usuário

const idade = prompt("Qual sua idade?")

// c) imprimindo na tela o tipo dessas variáves

console.log(typeof nome) 
console.log(typeof idade)

// c) Na 1ª vez foi impresso undefined por falta de valor na variável
// f) Na 2ª vez foi impresso Que os dois são strings

// g) Imprimindo na tela a mensagem:

console.log("Olá", nome, "você tem", idade, "anos")


// 2ª Escrevendo um programa que faça 3 perguntas de Sim ou não,
// e imprimindo cada pergunta com sua respectiva resposta:
const pergunta1 = "Você é aluno(a) da Labenu?"
const pergunta2 = "Você gosta de fígado?"
const pergunta3 = "Você está sentado(a)?"

let resposta1 = "Sim!"
let resposta2 = "Sim"
let resposta3 = "Não"

console.log( pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta3)
console.log(pergunta3, "-", resposta2)

// 3. Criando uma lógica para que os valores de a e b sejam trocados.

let a = 10
let b = 25

a = b / a * 10
b = a - b + 10

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio!
// Programa recebe 2 números do usuário e imprime resultados:

const numero1 = prompt("Escreva um número")
const numero2 = prompt("Escreva mais um número")

const stringEmNumero1 = Number(numero1)
const stringEmNumero2 = Number(numero2)


let soma = stringEmNumero1 + stringEmNumero2
let multiplicacao = stringEmNumero1 * stringEmNumero2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)




