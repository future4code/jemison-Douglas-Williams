import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/createuser", userController.createUser)
userRouter.get("/allusers",  userController.getAllUser)
