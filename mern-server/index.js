import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import answerRoutes from './routes/answers.js';
import questionRoutes from './routes/questions.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/answers', answerRoutes);
app.use('/questions', questionRoutes);


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => { app.listen(PORT); })
    .catch((error) => console.log(error));