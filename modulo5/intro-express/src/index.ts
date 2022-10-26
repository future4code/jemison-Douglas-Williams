import express, {Request, Response} from "express"
import  { users } from "./data.js"

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
    res.statusCode = 200
    res.send(users)
})


// Get User
app.get("/user/:id",(req:Request, res:Response) => {
    const id = req.params.id
    const user = users.find(user => user.id === Number(id))
    if(user){
        res.statusCode = 200
        res.send(user)
    }
    res.send(user)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});