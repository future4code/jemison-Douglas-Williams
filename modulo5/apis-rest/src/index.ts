import express, { Request, Response } from 'express';
import cors from 'cors';
import { dataUsers } from './data';



const app = express();
app.use(cors());
app.use(express.json());


app.get("/users", (req: Request, res: Response) => {
    let ErrorCode: number = 400;
    try {
        const users = dataUsers.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type
        }))
        res.status(200).send(users);
    } catch (error) {
        res.status(ErrorCode).send("Requisição inválida, verifique o link utilizado");
    }
});

app.get("/?type", (req: Request, res: Response) => {
    let ErrorCode: number = 400;
    try {
        const type = req.query.type as string;
        const usersType = dataUsers.filter(user => user.type === type);
        if (usersType) {
            res.status(200).send(usersType);
        }
    } catch (error) {
        res.status(ErrorCode).send("Requisição inválida, verifique o link utilizado e o query param utilizado");
    }
});















app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
