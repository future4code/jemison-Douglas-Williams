import express, {Request, Response} from "express"
import  { dados } from "./data.js"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req:Request, res:Response) => {
    res.send("Hello from Express!")
})

app.get("/users/:id",(req:Request, res:Response) => {
    const id = req.params.id
    const user = users.find(user => user.id === Number(id))
    if(!user){
        res.statusCode = 404
        res.send("User not found")
    }
    res.send(user)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});