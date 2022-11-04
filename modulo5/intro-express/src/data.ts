import type { DadosUsers, DadosPosts } from './types';


// Exercício 3
export const users: DadosUsers[] = [
    {
        id: 1,
        nome: 'Janice Valle',
        phone: 111111111,
        email: 'janicevalle@gmail.com',
        website: 'janice.org'
    },
    {
        id: 2,
        nome: 'Jair Messias',
        phone: 222222222,
        email: 'bolsonaro22@gmail.com',
        website: 'jair.info'
    },
    {
        id: 3,
        nome: 'Jamilly Rafaela',
        phone: 333333333,
        email: 'jamillyrafaela@gmail.com',
        website: 'jamilly.net'
    },
    {
        id: 4,
        nome: 'Patricia Larissa',
        phone: 444444444,
        email: 'patricialarissa@gmail.com',
        website: 'patricia.biz'
    },
    {
        id: 5,
        nome: 'Juliana Medeiros',
        phone: 555555555,
        email: 'juhmedeiros@gmail.com',
        website: 'juhmedeiros.info'
    },
    {
        id: 6,
        nome: 'Júlia Beatriz',
        phone: 666666666,
        email: 'jujubea@gmail.com',
        website: 'bea.org'
    },
    {
        id: 7,
        nome: 'Douglas Werner',
        phone: 777777777,
        email: 'douglaswerner@gmail.com',
        website: 'douglaswerner.io'
    },
    {
        id: 8,
        nome: 'Marjorye Werner',
        phone: 888888888,
        email: 'marjoryewerner@gmail.com',
        website: 'marjoryewerner.com'
    },
    {
        id: 9,
        nome: 'Glenda Caroline',
        phone: 999999999,
        email: 'glendinha@gmail.com',
        website: 'conrad.com'
    },
    {
        id: 10,
        nome: 'Joana Dark',
        phone: 110101010,
        email: "joanadark@gmail.com",
        website: 'joana.net'
    }
];

// Exercício 6 - Criei aqui pois referencia a dados, então estou guardando todos os dados em um mesmo arquivo.
export const posts: DadosPosts[] = [
    {
        userId: 1,
        id: 1,
        title: 'Inspire-se!',
        body: "Leia um bom livro. Assista a um bom filme. Ouça uma boa música. Inspire-se!Boas ideias não surgem do nada, surgem do que conhecemos.",
    },
    {
        userId: 2,
        id: 2,
        title: '-Motive-se!',
        body: 'Ainda que seja uma simples caixa de lápis de cor. Com ela, dá para desenhar o mundo.',
    },
    {
        userId: 3,
        id: 3,
        title: 'Apaixone-se!',
        body: 'A vida naturalmente recompensa o amor com mais amor.',
    },
    {
        userId: 4,
        id: 4,
        title: 'Respeite-se!',
        body: 'Quanto mais coitadinho, mais as pessoas pisam.',
    },
    {
        userId: 5,
        id: 5,
        title: 'Admita os erros!',
        body: 'Aprenda com os erros e recomece com mais certeza. O erro é uma forma de ensino poderosa',
    },
    {
        userId: 6,
        id: 6,
        title: 'Tenha sonhos para realizar!',
        body: 'A vida sem sonhos, sejam eles pequenos ou enormes, não tem a menor graça.',
    },
    {
        userId: 7,
        id: 7,
        title: 'Movimente-se!',
        body: 'Ficar parado é enferrujar a alma, o corpo e a mente.',
    },
    {
        userId: 8,
        id: 8,
        title: 'Há Momentos',
        body: 'As pessoas mais felizes não têm as melhores coisas. Elas sabem fazer o melhor das oportunidades que aparecem em seus caminhos.',
    },
    {
        userId: 9,
        id: 9,
        title: 'AMIZADE',
        body: 'Mais que uma mão estendida, mais que um belo sorriso, mais do que a alegria de dividir, mais do que sonhar os mesmos sonhos é, a amizade, o alimento que nos sacia a alm e nos é ofertado por alguém que crê em nós.',
    },
    {
        userId: 10,
        id: 10,
        title: 'RECOMEÇAR',
        body: 'Recomeçar é dar uma nova chance a si mesmo. É renovar as esperanças na vida e o mais importante: acreditar em você de novo.',
    },
]