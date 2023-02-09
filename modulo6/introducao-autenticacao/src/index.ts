import { app } from './app';
import { userRouter } from './routes/userRouter';

//Rotas para User
app.use('/user', userRouter);