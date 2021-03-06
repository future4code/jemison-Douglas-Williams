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
    // equilatero = ladoA == ladoB == ladoC;
    // escaleno = ladoA !== ladoB !== ladoC;
    // isosceles = ladoA == ladoC !== ladoB;
    // isosceles = ladoA == ladoB !== ladoC;

    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    } else if(ladoA == ladoB !== ladoC){
        return "Isósceles"
    } else if(ladoA == ladoC !== ladoB){
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const comparacao = (a, b) => {
        return a - b;
    }
    return array.sort(comparacao)


}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(pessoas => {
        if(pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura > 1.5){
            return pessoas
        }
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(pessoas => {
        if(pessoas.idade < 14 && pessoas.altura < 1.5 && pessoas.idade > 60){
            return pessoas
        }
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const comparacao = (a, b) => {
        return a = b;
    }
    return consultas.sort(comparacao)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}