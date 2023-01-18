import dotenv  from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.DB_PORT, () => {
   console.log(`Servidor rodando na porta ${process.env.DB_PORT}`)
});
