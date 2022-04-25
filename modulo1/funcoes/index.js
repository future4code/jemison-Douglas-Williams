
                //Exercícios de interpretação de código
//1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a) Vai ser impresso 10 e 50
//b) Não iria aparecer nada, pois não foi informado para aparecer no console.

//2. 
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a) Essa função solicita um texto para o usuário e transforma todas as palavras 
// em minusculas e verifica se a palavra "cenoura" é encontrada dentro da frase.

//b) 
    //  i. true
    //  ii. true
    //  iii. true
     

                //Exercícios de escrita de código

//1)
/*a)
    function minhasInformacoes() {
        console.log(`Eu sou Douglas, tenho 30 anos, moro em Brusque/SC e sou estudante da Labenu`)
    }

//b)

    const nome1 = prompt("Qual seu nome?")
    const idade1 = Number(prompt("Qual a sua idade?"))
    const cidade1 = prompt("Qual a sua cidade?")
    const profissao1 = prompt("Qual sua Profissão?")

    function informacoesDoUsuario(nome, idade, cidade, profissao) {

        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`) 
    }


    informacoesDoUsuario(nome1, idade1, cidade1, profissao1)
    informacoesDoUsuario("Douglas", 30, "Brusque/SC", "Estudante")*/

//2.
//a)
    function numeros1(num1, num2) { //função que recebe dois números e retorna a soma deles
        return num1 + num2
    }

    const result = numeros1(10, 4) //invocando a função

    console.log(result) //imprimindo no console a função

//b)
    function numeros2(num3, num4) {
        return num3 >= num4
    }

    const result1 = numeros2(5, 10)

    console.log(result1)

//c)
    function numero(numero) {
        return numero % 2 === 0
    }

    const result2 = numero(125)

    console.log(result2)

//d)
    function menssagem(string){
        let frase = string
        
        return frase
    }
    
    const tamanho = menssagem("O Rato roeu a roupa do rei de roma")
    console.log(tamanho.length, tamanho.toUpperCase())

//3.
//Soma
    function soma (num1, num2) {
        console.log(num1 + num2)
        return num1 + num2        
    }

//Subtração
    function subtracao(num1, num2) {
        console.log(num1 - num2)
        return num1 - num2
    }

//Multiplicação
    function multiplicacao(num1, num2) {
        console.log(num1 * num2)
        return num1 * num2
    }

//Divisão
    function divisao(num1, num2) {
        console.log(num1 / num2)
        return num1 / num2
    }

    const num1 = Number(prompt("Escreva um número"))
    const num2 = Number(prompt("Escreva outro número"))

    soma(num1, num2)
    subtracao(num1, num2)
    multiplicacao(num1, num2)
    divisao(num1, num2)

                    //Desafio
//1.
//a)
    const texto = (parametro) => {
        return parametro
    }

    console.log(texto("Douglas"))

//b)
    const numeros3 = (numero1, numero2) => {
        console.log(numero1 + numero2)
    }

    texto(numeros3(10, 50))

//2.
    function teoremaPitagoras(b, c) {
        
        const equacao = Math.hypot(b, c)

        return equacao
    
    }

    console.log(`A hipotenusa = ${teoremaPitagoras(3, 4)}`)