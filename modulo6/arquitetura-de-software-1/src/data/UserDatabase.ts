import { BaseDatabase } from "./BaseDatabase";
import { User } from '../models/User'


export class UserDatabase extends BaseDatabase {
    async get(): Promise<User[]> {

        try {

            const users: User[] = [];

            const result = await UserDatabase.connection()
                .select("*")
                .from("User_Arq");

						for(let user of result){
								users.push(user);
						}

            return users;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    insertUser = async (user: User): Promise<void> => {
        try {

            await UserDatabase.connection('User_Arq')
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
                .into('User_Arq')
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    findUser = () => {}
    deleteUser = () => {}
}