import express, {Request, Response} from "express"
import  { users, posts } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req:Request, res:Response) => {
    res.send("Hello from Express!")
})

// Exercício 4
// Get Users
app.get('/users', (req:Request, res:Response) => {
    res.status(200).send(users)

})


// Get User
app.get("/user/:id",(req:Request, res:Response) => {
    const id = req.params.id
    const user = users.find(user => user.id === Number(id))
    if(user){
        res.status(200).send(user)

    }
    res.send(user)

})

// Ecercício 7
//Get Posts
app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts)

})

// Exercicio 8
// Get Post
app.get("/post/:id", (req:Request, res:Response) => {
    const id = req.params.id
    const post = posts.find(post => post.id === Number(id))
    if(post){
        res.status(200).send(post)
    }
    res.send(post)
})

// Exercício 9 - Deletando um post
app.delete("/postdel/:id", (req:Request, res:Response) => {
    const id = req.params.id
    const post = posts.find(post => post.id === Number(id))
    if(post){
        res.status(200).send("Post deletado com sucesso!")
    }
    res.send("Post não encontrado")
})

// Exercício 10 - Criando um post
app.post("/post", (req:Request, res:Response) => {
    const post = req.body
    posts.push(post)
    res.status(200).send(post)
    res.send("Post criado com sucesso!")

})

// Exercício 11 - Editando um post
app.post("/postedit/:id", (req:Request, res:Response) => {
    const id = req.params.id
    const post = posts.find(post => post.id === Number(id))
    if(post){
        res.status(200).send(post)

    }
    res.send(post)
})


// Listem sempre é utilizado no final.
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});