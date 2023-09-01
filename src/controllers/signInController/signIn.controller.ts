import { Request, Response } from "express";

import bcrypt from "bcrypt";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const signIn = async(req: Request,res: Response) => {

    const { email, password } = req.body;

    try {

       const user = await prisma.users.findUnique({
        where: {
            email
        }
       });

       if(!user) return res.status(404).json({"data": "User not found"});

        const match = await bcrypt.compare(password, user.password);

        match !== true ?
            res.status(404).json({"data": "Password incorrect"})
            :
            res.status(200).json({"data": {"firstName": user.firstName, "lastName": user.lastName, "email": user.email}})

    } catch (error) {
        console.log('error --> ',error);
    }

}

export {signIn};