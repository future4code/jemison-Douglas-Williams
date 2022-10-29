import express, { Response, Request } from "express"
import { afazeres } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// Exercicio 4 - Endpoint que retorna todos os Afazeres
app.get("/afazeres", (req: Request, res: Response) => {
    res.status(200).send(afazeres)
})

// Exercício 5 - Endpoint que cria um novo afazer
app.post("/novoafazer", (req: Request, res: Response) => {
    const novoAfazer = req.body
    const usuarioAutorizado = req.headers.authorization

    if(!novoAfazer || !usuarioAutorizado) {
        res.status(400).send("Requisição inválida / Usuário não autorizado")
    }
    afazeres.push(novoAfazer)
    res.status(200).send(afazeres)

})

//