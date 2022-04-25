console.log('BUENAS NOCHES, JEMISON')

// EXEMPLOS

// const altura1 = 6
// const largura1 = 8
// const area1 = altura1 * largura1
// console.log(`Área do retângulo 1: ${area1}`)

// const altura2 = 9
// const largura2 = 13
// const area2 = altura2 * largura2
// console.log(`Área do retângulo 2: ${area2}`)

function calculaAreaRetangulo(altura, largura) {
  // montinho de código
  const area = altura * largura
  console.log(`Altura do retângulo: ${altura}`)
  console.log(`Largura do retângulo: ${largura}`)
  console.log(area)
  return area
}

// const resultado = calculaAreaRetangulo(10, 16)
// console.log(`O resultado é ${resultado}`)
// calculaAreaRetangulo(7, 12)
// calculaAreaRetangulo(4, 3)
// calculaAreaRetangulo(8, 2, 'Marina louca')
// calculaAreaRetangulo(5, 'Juan')

function imprimeOlaMundo() {
  console.log('Olá, mundo!')
  return 'Olá, mundooo'
}

// imprimeOlaMundo()

function imprimeOlaBichinho(nomeDoBichinho) {
  console.log(`Olá, ${nomeDoBichinho}!`) // template string
}

// imprimeOlaBichinho('Laura')
// imprimeOlaBichinho('Sansão')
// imprimeOlaBichinho('Ursinho')
// imprimeOlaBichinho('Baleia')
// imprimeOlaBichinho()

function olaPlaneta(planeta) {
  console.log(`Olá, ${planeta}`)
}

const olaPlanetaExp = function (planeta) {
  console.log(`Olá, ${planeta}`)
}

const olaPlanetaArrow = (planeta) => {  // = > 
  console.log(`Olá, ${planeta}`)
}

// olaPlaneta('Plutão')
// olaPlaneta('Vênus')
// olaPlanetaExp('Mercúrio')
// olaPlanetaArrow('Marte')
// olaPlanetaArrow('Júpiter')



// EXERCÍCIO 1

function imprimeOlaMundaoSemPorteira() {
  console.log('Olá, mundão sem porteira!')
}

// imprimeOlaMundaoSemPorteira()

// EXERCÍCIO 2

function olaPessoa(nome) {
  console.log(`Olá, ${nome}`)
}

// olaPessoa('Isra')
// olaPessoa('Douglas')
// olaPessoa('Caroline')
// olaPessoa('Dani')

function oiPessoaPrompt() {
  const nome = prompt('Digite seu nome.')
  console.log(`Oi, ${nome}`)
}

// oiPessoaPrompt()

// EXERCÍCIO 3

function retornaSoma(num1, num2) {
  return num1 + num2
}

const result = retornaSoma(5, 9)
// console.log(result)

function recebeDoisNumerosRetornaSoma() {
  const numero1 = Number(prompt('Digite um número'))
  const numero2 = Number(prompt('Digite outro número'))
  const soma = numero1 + numero2

  return soma
}

// const result2 = recebeDoisNumerosRetornaSoma()
// console.log(result2)

// EXERCÍCIO 4

function recebeArrayRetornaUltimoEPrimeiroElementosDivididosPorDois(array) {
  const primeiroElemento = array[0]
  const primeiroElementoDivididoPorDois = primeiroElemento / 2

  const ultimoElemento = array[array.length - 1]
  const ultimoElementoDivididoPorDois = ultimoElemento / 2

  const arrayResultado = [ultimoElementoDivididoPorDois, primeiroElementoDivididoPorDois]

  return arrayResultado
}

const result3 = recebeArrayRetornaUltimoEPrimeiroElementosDivididosPorDois([1, 20, 13, 42])
// console.log(result3)

const arrayDeExemplo = [25, 98, 57, 23, 51, 4, 183, 900578]
// console.log(recebeArrayRetornaUltimoEPrimeiroElementosDivididosPorDois(arrayDeExemplo))

// EXERCÍCIO 5
// exercício 2 com expressão de função
const olaPessoaExp = function (nome) {
  console.log(`Olá, ${nome}`)
}

// olaPessoaExp('Douglas')
// olaPessoaExp('Victoria')
// olaPessoaExp('Cristiane')
// olaPessoaExp('John')

// exercício 3 com arrow function
const retornaSomaArrow = (num1, num2) => {
  return num1 + num2
}

// console.log(retornaSomaArrow(5, 98))
// console.log(retornaSomaArrow(1584796, 56))