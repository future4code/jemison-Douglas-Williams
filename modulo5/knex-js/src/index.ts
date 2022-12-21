import express, { Request, Response } from "express";
import connection from "./database/connection";
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config();
=[]
const app = express();

app.use(express.json());
app.use(cors())


// a) A resposta do raw vai re


// b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result
}

app.listen(process.env.DB_PORT, () => {
    console.log("Server is starting")
})

// c) 
const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as cont FROM Actor 
    WHERE gender = '${gender};
    `)

    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!

    const count = result[0][0].count;
    return count;
}

// 2º Exercício
// a)


