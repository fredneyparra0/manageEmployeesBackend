import express from 'express';
import { employeeRouter } from './router';

const app = express();

app.use(employeeRouter);

app.listen(3000, () => console.log('server run in port 3000'));