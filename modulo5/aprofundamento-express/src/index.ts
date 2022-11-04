import express, { Response, Request } from "express"
import { afazeres } from "./data"
import { usersAutho } from "./usersAutho"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// Criei uma variável global para armazenar os usuários autorizados
const users = usersAutho[0].userName

// Exercicio 4 - Endpoint que retorna todos os Afazeres
app.get("/afazeres", (req: Request, res: Response) => {
    res.status(200).send(afazeres)
})

//Endpoint que retorna um Afazer pelo id
app.get("/afazer/:id", (req: Request, res: Response) => {

    const id = req.params.id
    const afazer = afazeres.find((afazer) => afazer.id === Number(id))
    if (afazer) {
        res.status(200).send(afazer)
    }
    res.status(404).send("Afazer não encontrado, verificar id")
    
})


// Exercício 5 - Endpoint que cria um novo afazer
app.post("/novoafazer", (req: Request, res: Response) => {
    const novoAfazer = req.body
    const usuarioAutorizado = req.headers.authorization?.toLowerCase()
    if (usuarioAutorizado?.toLowerCase() === users) {
        afazeres.push(novoAfazer)
        res.status(200).send(afazeres)
    } else {
        afazeres.splice(novoAfazer, 1)
        res.status(401).send("Usuário não autorizado, não foi possível criar a tarefa")
    }
})

// Exercício 6 - Endpoint que edita o estado de um afazer para true, se já estiver concluído ou false, se não tiver concluído
app.put("/editarafazer/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const usuarioAutorizado = req.headers.authorization?.toLowerCase()
    const afazerEditado = afazeres.find((afazer) => afazer.id == Number(id))
    const afazer = afazeres.find((afazer) => {
        if(afazer.id === Number(id) && usuarioAutorizado === users) {
            afazer.completed = req.body.completed
        }
    })

     res.status(200).send(afazerEditado)   
   

})

// Exercício 7 - Endpoint que deleta um afazer
app.delete("/delafazer/:id", (req:Request, res:Response) => {
    const id = req.params.id
    const del = afazeres.find(afazer => afazer.id === Number(id))
    if(del){
        afazeres.splice(afazeres.indexOf(del), 1)
        res.status(200).send(afazeres)
    }
    res.status(404).send("Afazer não encontrado, verificar id")
})

// Exercício 8 - Endpoint que retorna todos os afazeres através do id de usuário
app.get("/afazeres/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const afazer = afazeres.filter((afazer) => afazer.userId === Number(id))
    if (afazer) {
        res.status(200).send(
            {
                todos: {
                    SelectedUser: [afazer],
                    others: [afazeres.filter((afazer) => afazer.userId !== Number(id))]
                }
            }
        )
    }
    res.status(404).send("Afazer não encontrado, verificar id")
    
})