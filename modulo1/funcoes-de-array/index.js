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
//a) Vai imprimir um novo array com o nome e o apelido de todos os usuarios menos da
// que possui o nome Chijo

            //Exercícios de escrita de código
//1.
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

//c) 
    const imprimeMenssagem = (valor) => {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${valor}!`)
    }
















