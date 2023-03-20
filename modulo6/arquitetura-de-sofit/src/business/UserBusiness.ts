import { Request, Response } from "express";
import { send } from "process";
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../models/User";

export class UserBusiness {
    getAllUsers = async (): Promise<User[]> => {
        try {
            return await new UserDatabase().getAllUsers()
        } catch (err: any) {
            throw new Error(err.message)
        }
    };

    // getUserById = async (id: string): Promise<User> => {
    //     try {
    //         return await new UserDatabase().getUserById(id)
    //     } catch (err: any) {
    //         throw new Error(err.message)
    //     }
    // };


    // deleteUser = async (input: { id: string }) => {

    //     const id = new UserBusiness()

    //     const userId = await id.getUserById()

    //     if (!input.id) {
    //         throw new Error("Insira um id!")
    //     }

    //     if (input.id != userId.id) {
    //         throw new Error("Id inválido!")
    //     }

    //     return await new UserDatabase().deleteUser(input.id);
    // }

    createUser = async (input: any): Promise<void> => {

        try {

            const { name, email, password } = input

            //Regras de negócio
            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos 'name', 'email' e 'password'")
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido")
            }

            if (password.length < 6) {
                throw new Error("Senha deve ter no mínimo 6 caracteres")
            }

            const id: string = Date.now().toString() + Math.random().toString()

            const userDatabase = new UserDatabase();

            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            });

        } catch (err: any) {
            throw new Error(err.message)
        }

    };

}

