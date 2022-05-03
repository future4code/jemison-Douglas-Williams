            //Exercícios de interpretação de código
//1. 
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero1 = Number(respostaDoUsuario)

    if (numero1 % 2 === 0) {
    console.log("Passou no teste.")
    } else {
    console.log("Não passou no teste.")
    }

//a) Solicita ao usuário um número para fazer um teste se é multiplo de 2
//b) Para os números onde o resto da divisão seja 0 ou números multiplos de 2
//c) Para ou números onde o resto da divisão não for 0 ou que não são multiplos de 2

//2. 
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para informar o preço da fruta que o usuário escolher.
//b) O preço da fruta Maçã é R$ 2.25
//c) O preço da fruta Pêra é R$ 5 (Ele vai pular o valor real da Pêra e vai usar o do default)

//3. 
    const numero2 = Number(prompt("Digite o primeiro número."))

    if(numero2 > 0) {
    console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

//a) Solicitando um número ao usuário
//b) 10 => Esse número passu no teste // -10 undefined ou vai dar um erro
//c) Sim, pois o console.log está no escopo global, tentando acessar uma variável no escopo local do if


                //Exercícios de escrita de código
//1. 
//a) e b)
    const idade = Number(prompt("Qual sua idade?"))
//c)
    if(idade >= 18){
        console.log(`Você pode dirigir`)
    } else {
        console.log(`Você não pode dirigir`)
    }


//2.
    const turnoEstudo1 = prompt("Qual o turno em que você estuda? Digite (M) para Matutino, (V) para Vespertino ou (N) para Noturno").toUpperCase()

    if(turnoEstudo1 === "B"){
        console.log("Bom Dia!")
    } else if(turnoEstudo1 === "V"){
        console.log("Boa Tarde!")
    } else if(turnoEstudo1 === "N") {
        console.log("Boa Noite!")
    }

//3.
    const turnoEstudo2 = prompt("Qual o turno em que você estuda? Digite (M) para Matutino, (V) para Vespertino ou (N) para Noturno").toUpperCase()

    switch (turnoEstudo2){
        case 'M':
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
            console.log("Estuda a hora que quiser")
    }

//4.
    const genero1 = prompt("Qual o gênero de filme que você quer assistir?").toLowerCase();
    const preco1 = Number(prompt("Qual o preço do ingresso do filme que você?").toLowerCase());

    if(genero1 === "fantasia" && preco1 <= 15){
        console.log("Bom Filme!")
    } else{
        console.log("Escolha outro filme")
    }


                    //Desafio
//1.
    const genero2 = prompt("Qual o gênero de filme que você quer assistir?").toLowerCase();
    const preco2 = Number(prompt("Qual o preço do ingresso do filme que você?").toLowerCase());
    const lanche = prompt("Qual o lanchinho você vai comprar?");
    if(genero2 === "fantasia" && preco2 <= 15){
        console.log(`Bom Filme!`)
        console.log(`E aproveite o(a) seu(sua) ${lanche}`)
    } else{
        console.log("Escolha outro filme")
    }

//2.
    const nome3 = prompt("Informe seu nome completo:");
    const jogo = prompt("Qual seu tipo de jogo: I indica Internacional; e N indica Nacional:").toUpperCase()
    const etapaJogo = prompt("Qual a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
    const categoria = Number(prompt("Qual a categoria você vai querer? 1, 2, 3 ou 4:"));
    const ingressos = Number(prompt("Quantos ingressos você vai querer?"));

    const final1 = 1980
    const final2 = 1320 
    const final3 = 880
    const final4 = 330

    const finalIN1 = 1980 * 4.1
    const finalIN2 = 1320 * 4.1
    const finalIN3 = 880 * 4.1
    const finalIN4 = 330 * 4.1
    
    const semiFinal1 = 1320
    const semiFinal2 = 880
    const semiFinal3 = 550 
    const semiFinal4 = 220

    const semiFinalIN1 = 1320 * 4.1
    const semiFinalIN2 = 880 * 4.1
    const semiFinalIN3 = 550 * 4.1
    const semiFinalIN4 = 220 * 4.1
    
    const terceiroLugar1 = 660
    const terceiroLugar2 = 440
    const terceiroLugar3 = 330
    const terceiroLugar4 = 170

    const terceiroLugarIN1 = 660 * 4.1
    const terceiroLugarIN2 = 440 * 4.1
    const terceiroLugarIN3 = 330 * 4.1
    const terceiroLugarIN4 = 170 * 4.1

    if(jogo === "N" && etapaJogo === "FI" && categoria === 1 ){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${final1}`);
        console.log(`Valor total: R$ ${final1 * ingressos}`);
    }
    else if(jogo === "N" && etapaJogo === "FI" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${final2}`);
        console.log(`Valor total: R$ ${final2 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "FI" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${final3}`);
        console.log(`Valor total: R$ ${final3 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "FI" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${final4}`);
        console.log(`Valor total: R$ ${final4 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "SF" && categoria === 1){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinal1}`);
        console.log(`Valor total: R$ ${semiFinal1 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "SF" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinal2}`);
        console.log(`Valor total: R$ ${semiFinal2 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "SF" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinal3}`);
        console.log(`Valor total: R$ ${semiFinal3 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "SF" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinal4}`);
        console.log(`Valor total: R$ ${semiFinal4 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "DT" && categoria === 1){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugar1}`);
        console.log(`Valor total: R$ ${terceiroLugar1 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "DT" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugar2}`);
        console.log(`Valor total: R$ ${terceiroLugar2 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "DT" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugar3}`);
        console.log(`Valor total: R$ ${terceiroLugar3 * ingressos}`);
    }
    else if (jogo === "N" && etapaJogo === "DT" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugar4}`);
        console.log(`Valor total: R$ ${terceiroLugar4 * ingressos}`);
    }
    else if(jogo === "I" && etapaJogo === "FI" && categoria === 1 ){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${finalIN1}`);
        console.log(`Valor total: R$ ${finalIN1 * ingressos}`);
    }
    else if(jogo === "I" && etapaJogo === "FI" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${finalIN2}`);
        console.log(`Valor total: R$ ${finalIN2 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "FI" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${finalIN3}`);
        console.log(`Valor total: R$ ${finalIN3 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "FI" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${finalIN4}`);
        console.log(`Valor total: R$ ${finalIN4 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "SF" && categoria === 1){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinalIN1}`);
        console.log(`Valor total: R$ ${semiFinalIN1 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "SF" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinalIN2}`);
        console.log(`Valor total: R$ ${semiFinalIN2 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "SF" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinalIN3}`);
        console.log(`Valor total: R$ ${semiFinalIN3 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "SF" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${semiFinalIN4}`);
        console.log(`Valor total: R$ ${semiFinalIN4 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "DT" && categoria === 1){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugarIN1}`);
        console.log(`Valor total: R$ ${terceiroLugarIN1 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "DT" && categoria === 2){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugarIN2}`);
        console.log(`Valor total: R$ ${terceiroLugarIN2 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "DT" && categoria === 3){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugarIN3}`);
        console.log(`Valor total: R$ ${terceiroLugarIN3 * ingressos}`);
    }
    else if (jogo === "I" && etapaJogo === "DT" && categoria === 4){
        console.log("---Dados da compra---");
        console.log(`Nome do cliente: ${nome3}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Etapa do jogo: Final`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${ingressos} ingressos`);
        console.log(`---Valores---`);
        console.log(`Valor do ingresso: R$ ${terceiroLugarIN4}`);
        console.log(`Valor total: R$ ${terceiroLugarIN4 * ingressos}`);
    } else {
        console.log(`Não vai querer assistir o jogo`)
    }