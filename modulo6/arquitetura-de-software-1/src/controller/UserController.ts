import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';


export class UserController {
    async get(req: Request, res: Response) : Promise<void>  {	
        try {

            const users = await new UserBusiness().get();

            res.send(users).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };


            const userBusiness = new UserBusiness();
            await userBusiness.createUser(input);

            res.status(201).send({ message: "Usuário criado com sucesso!" });
        } catch (err:any) {
            res.status(400).send({
                message: err.message
            })
        }

    
    }

    findUser = () => {}
    deleteUser = () => {}
}