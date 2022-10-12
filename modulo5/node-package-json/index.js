import { data } from "./data.js";   // importei o arquivo que contem meu nome e idade;

// Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R: Criando uma variável que recebe os parâmetros passados na linha de comando utilizando o process.argv.


const name = process.argv[2];   // o nome que eu passar na linha de comando será armazenado na variável name;
const age = process.argv[3];    // a idade que eu passar na linha de comando será armazenada na variável age;   

const myName = data[0].name;    // armazena o nome que está no arquivo data.js;
const myAge = Number(data[0].age);      // armazena a idade que está no arquivo data.js;

console.log(`Olá, ${myName}! Você tem ${myAge} anos.`);

console.log(`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${myAge + 7}.`);

// Exercício 2

const num1 = process.argv[2];
const num2 = process.argv[3];

let soma = Number(num1) + Number(num2);
let sub = Number(num1) - Number(num2);
let mult = Number(num1) * Number(num2);
let div = Number(num1) / Number(num2);

function operation(num1, num2) {

    switch (operation) {
        case "soma":
            return soma;
            break;
        case "sub":
            return sub;
            break;
        case "mult":
            return mult;
            break;
        case "div":
            return div;
            break;
        default:
            return "Operação inválida";
    }
    return result
} 

console.log(operation( num1, num2))