                //Exercícios de interpretação de código
//1.
        const filme = {
        nome: "Auto da Compadecida", 
        ano: 2000, 
        elenco: [
            "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
            "Virginia Cavendish"
            ], 
        transmissoesHoje: [
            {canal: "Telecine", horario: "21h"}, 
            {canal: "Canal Brasil", horario: "19h"}, 
            {canal: "Globo", horario: "14h"}
            ]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])

//a) Vai ser impresso:
    //Matheus Nachtergaele
    //Virginia Cavendish
    //{canal: "Globo", horario: "14h"}

//2.
    const cachorro = {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)

//a)Vai ser impresso:
    //{ nome: "Juca", idade: 3, raca: "SRD" }

    //{ nome: "Juba", idade: 3, raca: "SRD" }

    //{ nome: "Jubo", idade: 3, raca: "SRD" }
    
//b)Pega os dados após os 3 pontos, chamado de espalhamento ou spread, podendo
//substituir ou adicionar elementos ao objeto.

//3. 
    function minhaFuncao(objeto, propriedade) {
        return objeto[propriedade]
    }

    const pessoa0 = {
    nome: "Caio", 
    idade: 23, 
    backender: false
    }

    console.log(minhaFuncao(pessoa0, "backender"))
    console.log(minhaFuncao(pessoa0, "altura"))

//a)Vai ser impresso:
    //false
    //Undefined

//b)Ele imprime na primeira o backender do objeto dentro da função
// e na segunda ele imprimi undefined pois não possui dentro do objeto
// um valor definido.

            //Exercícios de escrita de código
//1.
//a)
    function mensagem(argumento){
        console.log(`Eu sou ${argumento.nome}, mas pode me chamar de: ${argumento.apelidos[0]}, ${argumento.apelidos[1]} ou ${argumento.apelidos[2]}`)
    }

    const pessoa1 = {
        nome: "Amanda",
        apelidos: ["Mandinha", "Mandona", "Baixinha"],
       
    }

    mensagem(pessoa1)
//b)
    const mudandoApelidos = {
        ...pessoa1,
            apelidos: ["Chata", "Maluca", "Louca"]
    }

    mensagem(mudandoApelidos)

//2. 
//a)
    const pessoa2 = {
        nome: "João",
        idade: 26,
        profissao: "Engenheiro",

    }
    const pessoa3 = {
        nome: "Matheus",
        idade: 25,
        profissao: 'Repórte',
        
    }
//b)
    function array(pess1, pess2) {
        const nome1 = pess1.nome;
        const nome2 = pess2.nome;
        const numeroCaracteresNome1 = pess1.nome.length;
        const numeroCaracteresNome2 = pess2.nome.length;
        const idade1 = pess1.idade;
        const idade2 = pess2.idade;
        const profissao1 = pess1.profissao;
        const profissao2 = pess2.profissao;
        const numeroCaracteresProf1 = pess1.profissao.length;
        const numeroCaracteresProf2 = pess2.profissao.length;

        const arr1 = [
            nome1,
            numeroCaracteresNome1,
            idade1,
            profissao1,
            numeroCaracteresProf1
        ];
        const arr2 = [
            nome2,
            numeroCaracteresNome2,
            idade2,
            profissao2,
            numeroCaracteresProf2
        ]
        console.log(arr1, arr2)

    }

    array(pessoa2, pessoa3)

//3. 
//a)
    const carrinho = []

//b) 
    const frutas1 = {
        nome: 'Maçã',
        disponibilidade: true
    }

    const frutas2 = {
        nome: 'Limão',
        disponibilidade: true
    }

    const frutas3 = {
        nome: 'Framboesa',
        disponibilidade: true
    }

//c)
    function frutas(frut1, frut2, frut3) {
        carrinho.push(frut1, frut2, frut3)
    }

    frutas(frutas1, frutas2, frutas3)
//d)
    console.log(carrinho)

                //Desafio
//1)
    function usuario(){
        const nome = prompt("Qual seu nome?");
        const idade = prompt("Qual sua idade?");
        const profissao = prompt("Qual a sua profissão?")

        const propriedades = {
            nome: nome,
            idade: idade,
            profissao: profissao
        }
        console.log(propriedades)

    }

    usuario()
    typeof usuario()

//2. Terminarei depois
