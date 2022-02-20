import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { employeeRouter } from './router';
import { createConnection } from 'typeorm';
import path from 'path';
import history from 'connect-history-api-fallback'

const app = express();

createConnection();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(employeeRouter);

app.listen(3000, () => console.log('server run in port 3000'));