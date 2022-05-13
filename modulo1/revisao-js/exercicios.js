// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const comparacao = (a, b) => {
        return a - b;
    }
    return array.sort(comparacao)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(number => {
        return number % 2 === 0 
    })

    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosParesAoQuadrado = array.filter(number => {
        return number % 2 === 0 
    }).map(number => {
        return number * number
    })

    return numerosParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {}

    if(num1 > num2){
        console.log(
            objeto = {
                maiorNumero: num1,
                maiorDivisivelPorMenor: num1 % num2 === 0,
            diferenca: Math.abs(num1 - num2)// método Math.ads() retorna o valor absoluto de um número. ou seja, retorna sempre ele positivo.
            }
        )    
    } else {
        console.log(
            objeto = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 === 0,
            diferenca: Math.abs(num1 - num2)// método Math.ads() retorna o valor absoluto de um número. ou seja, retorna sempre ele positivo.
            }
        )
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    
    for(let i = 0; numerosPares.length < n; i +=2) // Nossa, tentei diversas vezes e só o que faltava era o length kkk
        if(i % 2 === 0){
            numerosPares.push(i)
        }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}