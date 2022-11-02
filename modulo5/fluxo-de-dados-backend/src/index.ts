import express, { Request, Response } from "express"
import { products } from "./data" 
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/test", (req: Request, res: Response) => {
    res.send("Servidor rodando na porta 3003!")
})

app.post("/createnewproduct", (req: Request, res: Response) => {
    try {
        const { id, name, price } = req.body
        const newProduct = {
            id,
            name,
            price
        }
        products.push(newProduct)
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send("Erro ao adicionar produto!")
    }
})

