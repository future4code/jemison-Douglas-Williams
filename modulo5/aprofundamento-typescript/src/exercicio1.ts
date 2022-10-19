
// a) Quando se aplicado á uma váriavel do tipo string um número, ocorre um erro de compilação, pois o tipo string não aceita números.
  //const minhaString: string = 10;

// b) Quando se aplicado á uma váriavel do tipo number uma string, ocorre um erro de compilação, pois o tipo number não aceita strings.
    //Para que a variavel aceite strings, deve-se usar o Union Type. | (pipe)
    const meuNumero: number | string = "10";

// d)
enum CoresArcoIris {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    ANIL = "Anil",
    VIOLETA = "Violeta"

}

// c) 
    type Pessoa = {
        nome: string,
        idade: number,
        corFavorita: CoresArcoIris
    }

    const pessoa1: Pessoa = {
        nome: "Douglas",
        idade: 31,
        corFavorita: CoresArcoIris.AZUL,
    }

    const pessoa2: Pessoa = {
        nome: "Marjorye",
        idade: 19,
        corFavorita: CoresArcoIris.VERMELHO,
    }

    const pessoa3: Pessoa = {
        nome: "Ursinho",
        idade: 1,
        corFavorita: CoresArcoIris.AMARELO
    }

  
   
