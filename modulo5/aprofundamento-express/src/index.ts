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

//Endpoint que retorna um Afazer pelo id
app.get("/afazer/:id", (req: Request, res: Response) => {
// O que eu quero que acoonteça quando o endpoint bater aqui
    const id = req.params.id
    const afazer = afazeres.find((afazer) => afazer.id == Number(id))
    if (afazer) {
        res.status(200).send(afazer)
    }
    res.status(404).send("Afazer não encontrado")
    
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

// Exercício 6 - Endpoint que edita o estado de um afazer para true, se já estiver concluído ou false, se não tiver concluído
app.put("/editarafazer/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const usuarioAutorizado = req.headers.authorization
    const afazerEditado = afazeres.find((afazer) => afazer.id == Number(id))
    const afazer = afazeres.find((afazer) => {
        if(afazer.id === Number(id)) {
            return (
                afazer.completed = req.body.completed
            )
        }
    })

    if(!afazer || !usuarioAutorizado) {
        res.status(400).send("Requisição inválida / Usuário não autorizado")
    }
    res.status(200).send(afazerEditado)
})

// Exercício 7 - Endpoint que deleta um afazer
app.delete("/deleteafazer/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const usuarioAutorizado = req.headers.authorization
    const afazerDeletado = afazeres.find((afazer) => afazer.id === Number(id))
    
    if(!afazerDeletado || !usuarioAutorizado) {
        res.status(400).send("Requisição inválida / Usuário não autorizado")
    }
    afazeres.splice(afazerDeletado, 1)
})