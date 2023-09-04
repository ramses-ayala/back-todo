import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getTodosById = async(req: Request, res: Response) => {

    const { id } = req.body;    

    try {

        const userFound = await prisma.users.findUnique({
            where: {
                id: id
            }
        });

        if(!userFound) return res.status(404).json({"data": "user not found getting todos"});


        const todos = await prisma.todo.findMany({
            where: {
                userId: id
            }
        });

        return res.status(200).json({'data': todos});


    } catch (error) {
        console.log('Occurs an error getting the todos --> ', error);
        res.status(500).json({'data': 'Internal server error'});
    }
}

export {getTodosById};