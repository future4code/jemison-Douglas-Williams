import express, { Request, Response } from "express";
import connection from "./database/connection";
import dotenv from 'dotenv'
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())


// a) A resposta do raw vai re


// b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

app.listen(process.env.DB_PORT, () => {
    console.log("Server is starting")
})
