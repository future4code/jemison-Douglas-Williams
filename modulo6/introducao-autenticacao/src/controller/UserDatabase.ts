import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "../data/BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public findUser = async (email: string) => {
    try {
  
      const result = await UserDatabase.connection
        .select()
        .where({email})
        .from("Auth_users")

      
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (err: any) {
      throw new CustomError(err.statusCode, err.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async(id: string): Promise<any> => {
    const result = await UserDatabase.connection
      .select("*")
      .from("Auth_users")
      .where({ id });
 
    return result[0];
   }

   public getUserByEmail = async(email: string): Promise<any> => {
    const result = await UserDatabase.connection
      .select("*")
      .from("Auth_users")
      .where({ email });
 
    return result[0];
   }
 
}
