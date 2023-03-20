import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { GeneratorToken } from '../services/GeneratorToken';
import { CustomError, NotFoundBody } from '../error/customError';

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
       
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public editUser = async (req: Request, res: Response) => {
        try {

          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          console.log(input)
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public getUserById = async(req:Request,res:Response)=>{
        try {
          const id = req.headers.authorization as string;

          const userBusiness = new UserBusiness()
          const user = await userBusiness.getUserById(id);
      
          res.status(200).send({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
        

      }

      public getUserByEmail = async(req:Request,res:Response)=>{
        try {
          const email = req.headers.authorization as string;
      
          const userBusiness = new UserBusiness()
          const user = await userBusiness.getUserByEmail(email);
      
          res.status(200).send({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
        

      }
}
