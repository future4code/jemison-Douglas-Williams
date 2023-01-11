import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";
import { getAddressInfo } from "../services/getAddressInfo";
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, zipcode,  } = req.body

      if (!name || !nickname || !email || !zipcode) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'zipcode' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const address = await getAddressInfo(zipcode);

      const newUser: user = { id, name, nickname, email, address }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}