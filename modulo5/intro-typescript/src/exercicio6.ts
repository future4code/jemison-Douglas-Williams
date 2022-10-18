
let operacao
let num1
let num2 


function operacoes(operacao: string, num1: number, num2: number) {

    if(operacao === "soma"){
        return num1 + num2
    } else if(operacao === "sub"){
        return num1 - num2
    } else if(operacao === "mult"){
        return num1 * num2
    } else{
        return "Não é um número"
    }
}

function maior (num1: number, num2: number) {

    if (num1 > num2) {
       return `O Maior número é ${num1}`
    } else if (num1 < num2) {
       return `O Maior número é ${num2}`
    } else{
         return `Os números são iguais`;
    }
}

console.log(operacoes("mult", 6, 5) + " " + maior(6, 5))
console.log(operacoes("sub", 10, 5) + " " + maior(10, 5))
console.log(operacoes("soma", 8, 5) + " " + maior(8, 5))
console.log(maior(5, 5))




