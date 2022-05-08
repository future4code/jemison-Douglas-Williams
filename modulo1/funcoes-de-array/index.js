            //Exercícios de interpretação de código
//1.
const usuarios1 = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios1.map((item, index, array) => {
     console.log(item)
  })

//a) Vai imprimir cada objeto do array.

//2.
    const usuarios2 = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios2.map((item, index, array) => {
        return item.nome
    
    })
    
    console.log(novoArrayB)
//a) Vai imprimir um novo array com apenas os nomes do array usuarios.

//2.
    const usuarios3 = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios3.filter((item, index, array) => {
        return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
// a) Vai imprimir um novo array com o nome e o apelido de todos os usuarios menos da
// que possui o nome Chijo

            //Exercícios de escrita de código
1.
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ]
//a)
    const novoArrayD = pets.map((item, index, array) => {
        return item.nome
    })
    console.log(novoArrayD)
//b)
    const novoArrayE = pets.filter((item, index, array) => {
        return item.raca == "Salsicha"
})

console.log(novoArrayE)


//c) 
    const novoArrayF = pets.filter((item, index, array) => {
        return item.raca == "Poodle"
    })


    const novoArrayG = novoArrayF.map((item, index, array) => {
            return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    
    })

console.log(novoArrayG)

//2. 
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
//a)
    const nomeProdutos = produtos.map((item, index, array) => {
        return item.nome 
    })
    
   console.log(nomeProdutos)
//b) --

//c) --
    
//d) --
  
//e) --