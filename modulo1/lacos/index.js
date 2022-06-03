//         // Exercícios de interpretação de código
// // 1.
//     let valor = 0
//     for(let i = 0; i < 5; i++) {
//     valor += i
//     }
//     console.log(valor)

// // O código está realizando um laço da soma de todos os números de 1 a 4
// // Vai imprimir 10

// //2.
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//     if (numero > 18) {
//             console.log(numero)
//         }
//     }

// // a) Vai imprimir todos os números maiores que 18
// // b) Não sei.

// 3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// a)
//     *
//     **
//     ***
//     ****

        // Exercícios de escrita de código
// 1.
    const bichos = Number(prompt("Quantos bichos de estimação você tem?"));
    const arrayDosBichos = []
//a)
    let quantidadeDosBichos = 0;
    if (bichos === 0){
        console.log("Que pena! Você pode adotar um pet!");
    }
//b) 
    else {
        while(quantidadeDosBichos < bichos) {
            let nomeDosBichos = prompt("Digite o nome deles:");
            console.log(nomeDosBichos);
            quantidadeDosBichos++

            // console.log(arrayDosBichos);
           
            // Preciso tentar fazer outra vez.
        }
    }
    // console.log(arrayDosBichos);

//c) Não consegui fazer

//2.
    const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//a)
    for (let numero1 of arrayOriginal) {
        console.log(numero1)
    }
//b)
    for (numero2 of arrayOriginal) {
        console.log(numero2 / 10)
    }
//c) 
    for (numero3 of arrayOriginal) {
        if(numero3 % 2 === 0){
            console.log(numero3)
        }
    }
//d)
    for (let i = 0; i <= arrayOriginal.length - 1; i++) {
        console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)
    }
//e) 
    let valorMaximo = 0
    let valorMinimo = 21

    function numeroMaior(array){
        let elemento = 0
        for(let i = 0; i < array.length; i++){

            elemento = array[i]

            if(elemento > valorMaximo){
            valorMaximo = array[i]
        }
    
    }
    return valorMaximo
}

    function numeroMenor(array){
        let elemento = 0
        for(let i = 0; i < array.length; i++){

            elemento = array[i]

            if(elemento < valorMinimo){
            valorMinimo = array[i]
        }

    }
    return valorMinimo
    }

    console.log(`O maior número é ${numeroMaior(arrayOriginal)} e o menor é ${numeroMenor(arrayOriginal)}`)

            //Desafio
//1.







