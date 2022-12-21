import express, { Request, Response } from "express";
import connection from "./database/connection";
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())


// a) A resposta do raw vai retornar o primeiro ator


// b)
// função retorna um array de atores que contenham no nome a letra ou palavra passado como parâmetro
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
    `)
    
    // Como o resultado é um array, precisamos pegar o primeiro elemento dele! por isso usamos o [0]

    return result[0]
}

// Para testar a função, descomente as linhas abaixo e rode o código!

// getActorByName("G").then(result => {
//     console.log(result)
// })


//Requisição para pegar ator pelo nome
app.get("/actorbyname", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const name = await getActorByName(req.query.name as string);
        if(!name) {
            errorCode = 422;
            throw new Error("Invalid name")
        }
        res.status(200).send(name);
    } catch (error) {
        res.status(400).send({
            errorCode
        })
    }
})

// c) 
const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = `{
        The total number of ${gender} actors is: ${result[0][0].count}
    }`;
    return count;
  };

// Para testar a função, descomente as linhas abaixo e rode o código!

// getActorByGender('female')
//     .then(count => {
//         console.log(count)
// })

// Requisição para solicitar o ator pelo gênero
app.get("/actorbygender", async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const gender = getActorByGender(req.query.gender as string);
        if(!gender) {
            errorCode = 422;
            throw new Error("Invalid gender")
        }
    } catch (error) {
        res.status(errorCode).send("Request error")
    }

})

// 2º Exercício
// a)
const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({ salary: salary})
        .where("id", id)
}

const getActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .select("*")
        .where("id", id)
    return result[0][0]
}

// Para testar a função, descomente as linhas abaixo e rode o código!

// updateSalary("001", 500000)
//     .then(() => {
//         console.log("O salario do ator foi atualizado com sucesso!")
//     })












app.listen(3003, () => {
    console.log("Server is running on port 3003");
})