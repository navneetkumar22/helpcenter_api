import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import cardRoutes from './routes/cardRoutes.js';
import express from 'express';
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//check if server is running
app.get('/ping', (_req, res) => { res.send(`Server is running`) })

//routes
app.use('/cards', cardRoutes)

export default app;