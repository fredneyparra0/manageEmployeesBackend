import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Employee } from '../entity/employeeEntity';

export const getEmployees = async (req:Request, res:Response) => {
    try {
        const resPetition = await getRepository(Employee).find();
        res.json({ error: false, data: resPetition });
    } catch (error) {
        console.log(error)
    }
}

export const getEmployeeById = async (req:Request, res:Response) => {
    try {
        const resPetition = await getRepository(Employee).findOne(req.params.id);
        res.send({ error: false, data: resPetition });
    } catch (error) {
        console.log(error);
    }
}

export const createEmployee = async (req:Request, res:Response) => {
    try {
        const ageEmployeed = calculateAge(req.body.data.dateofBirthday);

        const employeeCreated = getRepository(Employee).create({ ...req.body.data, age: ageEmployeed });
        const resPetition = await getRepository(Employee).save(employeeCreated);
        res.json({ data: resPetition });
    } catch (error) {
        console.log(error);
    }
}

export const updateEmployee = async (req:Request, res:Response) => {
    try {
        let resPetition: any = await getRepository(Employee).findOne(req.params.id);
        console.log(req.body);
        await getRepository(Employee).save({ ...resPetition, ...req.body.data });
        let personUpdated: any = await getRepository(Employee).findOne(req.params.id);
        res.json({ error: false, data: personUpdated });
    } catch (error) {
        console.log(error);
    }
}

export const deleteEmployee = async (req:Request, res: Response) => {
    try {
        const resPetition: any = await getRepository(Employee).findOne(req.params.id);
        await getRepository(Employee).remove(resPetition)
        res.json({ error: false , data: resPetition});
    } catch (error) {
        console.log(error);
    }
}

function calculateAge (dateofBirthday: Date) {
    const today = new Date();
    const birthday = new Date(dateofBirthday);
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) age--;
    return age;
}