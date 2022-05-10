      //Jogo BalckJack

    console.log("Bem vindo(a) ao jogo Blackjack!")

      let primeiraCartaUsuario = comprarCarta(); // Sorteia uma carta para o usuário.
      let segundaCartaUsuario = comprarCarta(); // Sorteia outra carta para o usuário.
      let primeiraCartaComputador = comprarCarta(); // Sorteia uma carta para o computador.
      let segundaCartaComputador = comprarCarta(); // Sorteia outra carta para o computador.

   if(confirm("Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      console.log("Vamos pro jogo!")
   
      let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
      let pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

      console.log(`Usuário - carta: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontuacaoUsuario}`) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
      console.log(`Computador - carta: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontuacaoComputador}`) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log(`Você ganhou!`)
   } else if (pontuacaoUsuario < pontuacaoComputador){
      console.log(`O computador ganhou!`)
   } else if (pontuacaoUsuario == pontuacaoComputador){
      console.log(`Empatou`)
   }
   } else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("O joga acabou")
}


   
  


