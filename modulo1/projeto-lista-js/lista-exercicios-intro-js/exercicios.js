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

    console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 // console.log(string.toUpperCase())

  return(string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
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