import { Router } from 'express';

import { 
    getEmployees,
    getEmployeeById,
    createEmployee,
    deleteEmployee,
    updateEmployee
} from '../controllers/employeesController';



export const employeeRouter = Router();

employeeRouter.get('/employees', getEmployees);

employeeRouter.get('/employee/:id', getEmployeeById);

employeeRouter.post('/employee', createEmployee);

employeeRouter.delete('/employee/:id', deleteEmployee);

employeeRouter.put('/employee/:id', updateEmployee);
