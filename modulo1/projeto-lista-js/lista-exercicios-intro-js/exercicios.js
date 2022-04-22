// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() { //Solicitando altura e largura para calcular a área do retangulo
  const altura = prompt("Qual a altura do retângulo?");
  const largura = prompt("Qual a largura do retângulo?"); 

  const alturaNumero = Number(altura);
  const larguraNumero = Number(largura);

  let areaRetangulo = alturaNumero * larguraNumero;

  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano estamos?");
  const anoDeNascimento = prompt("Qual o ano de seu nascimento?");

  const anoAtualNum = Number(anoAtual);
  const anoDeNascimentoNum = Number(anoDeNascimento);

  let idade = anoAtualNum - anoDeNascimentoNum

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  let pesoNum = Number(peso)
  let alturaNum = Number(altura)

  const imc = pesoNum / (alturaNum * alturaNum)
  return(imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  const cor1 = prompt("Uma cor favorita:")
  const cor2 = prompt("Outra cor favorita:")
  const cor3 = prompt("Ultima cor favorita:")

  const listaCores = [
      cor1,
      cor2,
      cor3,
  ]
=======
    const cor1 = prompt("Uma cor favorita:")
    const cor2 = prompt("Outra cor favorita:")
    const cor3 = prompt("Ultima cor favorita:")

    const listaCores = [
      cor1,
      cor2,
      cor3,
    ]
    console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 // console.log(string.toUpperCase())

  return(string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  const ingressosVendidos = custo / valorIngresso

  return ingressosVendidos
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length == string2.length

  // implemente sua lógica aqui


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]
  // implemente sua lógica aqui


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return(array[array.length - 1])

}
  
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroItem = array[0]
  let ultimoItem = array[array.length - 1]
  
  array.unshift(ultimoItem)
  array.pop()
  array.push(primeprimeiroItemroItem)
  array.splice(1,1)


  console.log(array)
  return array
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return string1.toLowerCase() == string2.toLowerCase()

  console.log(string1, string2)
  // return string1 === string2
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  let anoDeEmissaoRg = Number(prompt("Quando foi emitida a sua identidade?"))
  let idade = anoAtual - anoNascimento

  let emissaoRg1 = anoAtual - anoDeEmissaoRg
  let emissaoRg2 = anoAtual - anoDeEmissaoRg
  let emissaoRg3 = anoAtual - anoDeEmissaoRg

  let result = idade <= 20 && emissaoRg1 >= 5 || idade > 20 && idade <= 50 && emissaoRg2 >= 10 || idade > 50 && emissaoRg3 >= 15


  console.log(result)
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}