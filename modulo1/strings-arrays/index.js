                //Exercícios de interpretação de código
//1. 

    let array
    console.log('a. ', array)
// a. Undefined

    array = null
    console.log('b. ', array)
// b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
// c. 11

    let i = 0
    console.log('d. ', array[i])
// d. 3

    array[i+1] = 19
    console.log('e. ', array)
// e. i representa o 1º elemento (0) do array, então i+1 seleciona e troca
// o elemento 4 que estava na posição 1 por 19
// 

    const valor = array[i+6]
    console.log('f. ', valor)
// Imprime o item 7 (i+6) do array que é o 9

//2.
    const frase1 = prompt("Digite uma frase")

    console.log(frase1.toUpperCase().replaceAll("A", "I"), frase1.length)
//Vai imprimir a frase, que o usuário escrever, toda em maiúsculo e com as letras,
//já maiúsculas, "A" trocadas por "I" e quantos caracteres possuem a frase.
//Subi num ônibus em Marrocos => SUBI NUM ÔNIBUS EM MIRROCOS 27

                        //Exercícios de escrita de código
//1.
    const nome = prompt("Qual seu nome?")
    const email = prompt("Qual seu e-mail?")
    
    console.log(`O e-mail ${email} foi cadastrado com Sucesso. Seja bem-vindo(a), ${nome}`)

//2.
    
    let comidas = [
        "Lazanha", 
        "Macarronada",
        "Feijoada", 
        "Pastelão", 
        "Churrasco"
    ]

//a)
    console.log(comidas)

//b)
    const valor1 = comidas[1]
    const valor2 = comidas[2]
    const valor3 = comidas[3]
    const valor4 = comidas[4]
    const valor5 = comidas[5]
    
    console.log(`Essas são minhas comidas preferidas:`)
    console.log(valor1)
    console.log(valor2)
    console.log(valor3)
    console.log(valor4)
    console.log(valor5)


//c)

    const comidaUsuario = prompt("Qual sua comida preferida?")

    comidas.push(comidaUsuario)
    
//3.
//a)
    const listaDeTarefas = []

//b)
    const tarefa1 = prompt("Informe uma tarefa para hoje:")
    const tarefa2 = prompt("Informe mais uma tarefa:")
    const tarefa3 = prompt("Informe uma ultima tarefa:")

    listaDeTarefas.push(tarefa1)
    listaDeTarefas.push(tarefa2)
    listaDeTarefas.push(tarefa3)

//c)
    console.log(listaDeTarefas)

//d) 
    const indice = prompt("Escolha um número 0, 1 ou 2?")

//e)
    listaDeTarefas.splice(indice, 1)

//f)
    console.log(listaDeTarefas)


            //Desafio
//1. 
    const frase = prompt("Escreva uma frase")
    const novaFrase = frase.replaceAll(" ", ",")
    const array1 = [novaFrase.split(",")]
    

    console.log(array1)



//o rato roeu a roupa do rei de roma

//2.
    /*const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

    const abacaxi = frutas[2]

    console.log(frutas, abacaxi)

    */


    /*const nome = prompt("Qual o seu nome?")
    const email = prompt("Qual seu e-mail?")

    console.log(`Seu e-mail ${email} foi cadastrado com sucesso. Bem-vindo ${nome}!`)
    console.log("Seu e-mail " + email + " foi cadastrado com sucesso. Bem-vindo(a) " + nome)*/





