import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async createUser({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.createUser({
      id,
      name,
      email,
      password
    })
  }

  async getAllUser():Promise<any> {
    const userDatabase = new UserDatabase()
    const result = await userDatabase.getAllUser()

    return result
  }

}

