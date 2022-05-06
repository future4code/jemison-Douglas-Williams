/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



    console.log("Bem vindo ao jogo Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      console.log("Vamos pro jogo!")

   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O joga acabou")

   }

   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


