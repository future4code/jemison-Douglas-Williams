import express, { Response, Request } from "express"
import {afazeres} from "./data"
import express from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// Exercicio 4 - Endpoint que retorna todos os Afazeres
app.get("/afazeres", (res: Response, req: Request) => {
    res.status(200).send(afazeres)
})

// Exercício 5 - Endpoint que cria um novo afazer
