import { BaseDatabase } from "./BaseDatabase";
import { User } from '../models/User'


export class UserDatabase extends BaseDatabase {
    getAllUsers = async (): Promise<User[]> => {

        try {

            const users: User[] = [];

            const result = await UserDatabase.connection
            .select("*")
            .from("User_Arq");

            return result;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    // getUserById = async (input: {id: number}): Promise<User> => {
    //     try {

    //         const result = await UserDatabase.connection
    //         .select("*")
    //         .from("User_Arq")
    //         .where({ id: input.id });
            
    //         return result[0];

    //     } catch (error:any) {

    //         throw new Error(error.sqlMessage || error.message);
    //     }
    // };


    deleteUser = async(id: string): Promise<void>  => {
        try {

          await UserDatabase.connection()
            .where({ id })
                    .from("User_Arq")
                    .delete()
            
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      };

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

    getUserbyId = async (id: string): Promise<void> => {
        try {
            await UserDatabase.connection
            .select({ id })
            .from("User_Arq")

        } catch (err: any) {
            throw new Error(err.sqlMessage || err.message)
        }
    }

    

    findUser = () => {}
    
}

