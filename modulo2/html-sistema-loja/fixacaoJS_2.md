function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoTotalDaCompra = 0
  
  if(quantidade >= 12){
    custoTotalDaCompra = quantidade * 1.00
  } else{
    custoTotalDaCompra = quantidade * 1.30
  }
  
  return custoTotalDaCompra
}


const numerosIguais = arrayDeNumeros.filter(number => {
        return number == numeroEscolhido
    })