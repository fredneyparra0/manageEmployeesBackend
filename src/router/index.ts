import { Router } from 'express';

export const employeeRouter = Router();

employeeRouter.get('',(req:any, res:any) => {
    res.send('hello world')
});