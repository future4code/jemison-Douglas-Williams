import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';



export class UserController {
    getAllUsers = async (req: Request, res: Response) : Promise<void> => {	

            try {

               
                const users = new UserBusiness()

                const result = await users.getAllUsers()
    
                res.status(200).send(result)
    
            } catch (error:any) {
                res.send({ message: error.message }).status(error.status);
            }
    };

    // getUserById = async (req: Request, res: Response) : Promise<void> => {

    //     try {
    //         const input = {
    //             id: req.params.id
    //         }

    //         const users = new UserBusiness()

    //         const result = await users.getUserById(input);

    //         res.status(200).send(result);

    //     } catch (error:any) {
    //         res.status(400).send({ error: error.message });
    //     }

    // };

    
    // deleteUser = async(req: Request, res: Response): Promise<void> => {

    //     try {
    //         const input = {
    //             id: req.params.id
    //         }

    //         const users = new UserBusiness()

    //         const result = await users.deleteUser(input);

    //         res.status(200).send({ message: "Usuário apagado com sucesso" });

    //     } catch (error:any) {
    //         res.status(400).send({ error: error.message });
    //     }

    // }


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
   
}