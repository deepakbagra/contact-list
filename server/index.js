import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes.js'

const ENDPOINT = "http://localhost:3000";

//const ENDPOINT = 'https://abcd.com';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// welcome message
app.get('/', (req, res) => {
    res.send('Hello to contact API');
})

// 
app.use('/contacts', routes);

// set-up mongodb data base
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
    .catch((error) => console.log(error.message));
