

            //Exercícios de interpretação de código

//1. 

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  //*Vai Imprimir false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //*Vai imprimir false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //*Vai imprimir true

console.log("d. ", typeof resultado) //*Vai imprimir boolean */

/*2. 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let stringEmNumero = Number()

const soma = primeiroNumero + segundoNumero

console.log(soma)

//O problema se encontra que o tipo de dados que vai ser gerado
//pelo prompt é string e por isso vai ser impresso os dois números
//que o usuário digitar juntos. se colocar 10 e 10 vai imprimir 1010. */


//3. Vai ser preciso transformar o string em número criando duas novas variáveis
//   para transformar em número e depois jogar na const soma.

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let stringEmNumero1 = Number(primeiroNumero)
let stringEmNumero2 = Number(segundoNumero)

const soma = stringEmNumero1 + stringEmNumero2


console.log(soma)*/

              //Exercício de escrita de código

/*1. 

const idade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade de seu melhor amigo?")

let stringIdade = Number(idade)
let stringAmigo = Number(idadeAmigo)

const maiorIdade = idade > idadeAmigo 
const diferença = idade - idadeAmigo 

console.log("Sua idade é maior do que a do seu amigo?", maiorIdade)
console.log("A diferença entre as suas idades é:", diferença)*/

/*//2.
const numeroPar = prompt("Escreva um número par")
const numeroParEmNumero = Number(numeroPar)

let restoDaDivisao = numeroParEmNumero % 2

console.log(restoDaDivisao) */

// Sempre vai aparecer o resultado 0, pois o resto de toda a divisão de 
// números pares tem o resultado exato tendo o 0 como resto


//3. 

/*let idade = prompt("Qual sua idade?")
let idadeEmNumero = Number(idade)

let idadeMeses = idadeEmNumero * 12
let idadeDias = idadeEmNumero * 365
let idadeHoras = idadeEmNumero * 8760

console.log(idadeMeses, 'meses')
console.log(idadeDias, 'dias')
console.log(idadeHoras, 'horas')*/

//4.

/*const numero1 = prompt("Escreva um número")
const numero2 = prompt("Escreva mais outro número")

const stringNumero1 = Number(numero1)
const stringNumero2 = Number(numero2)

let maior = stringNumero1 > stringNumero2 
let igual = stringNumero1 === stringNumero2  
let div1P2 = stringNumero1 % stringNumero2 
let div2P1 = stringNumero1 % stringNumero2 

let resultado1 = div1P2 === 0
let resultado2 = div2P1 === 0

console.log("O primeiro numero é maior que segundo?", maior)
console.log("O primeiro numero é igual ao segundo?", igual)
console.log("O primeiro numero é divisível pelo segundo?", resultado1)
console.log("O segundo numero é divisível pelo primeiro?", resultado2) */


                 //Desafio

// 1.

let fahrenheit = 77;
let kelvin 
let celsius

// a)
const fahrenKelvin = (fahrenheit - 32)*(5/9) + 273.15

console.log(`${fahrenKelvin}°K`)

// b)
celsius = 80

const celsiusFahren1 = (celsius)*(9/5) + 32

console.log(`${celsiusFahren1}°F`)

// c)

celsius = 30

const celsiusFahren2 = (celsius)*(9/5) + 32

const celsiusKelvin = celsius + 273.15

console.log(`${celsiusFahren2}°F`)
console.log(`${celsiusKelvin}°K`)

// d) 

celsius = prompt("Coloque quantos °C deseja converter para °K e °F");

const celsiusNumero = Number(celsius);

const celsiusKelvin2 = celsiusNumero + 273.15
const celsiusFahren3 = (celsiusNumero)*(9/5) + 32

console.log(`${celsiusFahren3}°F e ${celsiusKelvin2}°K`)

// 2.

let custoQuilowattHora = 0.05

// a)

const quilowatt = custoQuilowattHora * 280

console.log(quilowatt)

// b)

let desconto =  0.05 * 0.15

const custoQuilowattHoraDesconto = desconto * 280

console.log(custoQuilowattHoraDesconto)

// 3.







































