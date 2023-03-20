import { UserDatabase } from "../data/UserDatabase"
import { User } from "../models/User";

export class UserBusiness {
    async get(): Promise<User[]> {
        
        return await new UserDatabase().get()
    }
    createUser = async (input: any): Promise<void> => {

        try {

            const { name, email, password} = input

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
            })
            
        } catch (err: any) {
            throw new Error(err.message)
        }

    };

    findUser = () => {};
    deleteUser = () => {};
}