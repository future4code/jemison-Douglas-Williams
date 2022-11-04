import express, { Request, Response } from 'express';
import cors from 'cors';
// import { data } from './data';



const app = express();
app.use(cors());
app.use(express.json());


















app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
