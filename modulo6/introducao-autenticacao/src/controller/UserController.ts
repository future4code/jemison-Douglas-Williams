import { UserDatabase} from './../data/UserDatabase';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { GeneratorToken } from '../services/GeneratorToken';
import { CustomError, NotFoundBody } from '../error/customError';

export class UserController {

      public createUser = async (res: Response, req: Request) => {
        try {
          const input: UserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password
          }

          const userBusiness = await new UserBusiness().createUser(input);

          res.status(201).send({ message: "Usuário Criado!" })
        } catch (err: any) {
          throw new CustomError(err.statusCode, err.message);
        }
      }

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
          const token = req.headers.authorization as string;
      
          const tokenGenerator = new GeneratorToken()
          const authenticationData = tokenGenerator.tokenData(token);
          const userBusiness = new UserBusiness()
          const user = await userBusiness.getUserById(authenticationData.id);
      
          res.status(200).send({
            id: user.id,
            email: user.email,
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }

      }

    

      
 



}
