import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { SignUpRequest } from "../../types/signUp/signUp";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const signUp = async(req: Request<{}, {}, SignUpRequest>, res: Response) => {
    
    const { password } = req.body;

    try {

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const userData = {
            ...req.body,
            password: encryptedPassword
        };

        await prisma.users.create({
            data: userData,
        });

        res.status(200).json({"data": "user registered"});

    } catch (error) {
        console.log('Occurs an error signing up the user --> ', error);
    }
}

export {signUp};