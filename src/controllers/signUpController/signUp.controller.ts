import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { SignUpRequest } from "../../types/signUp/signUp";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const signUp = async(req: Request<{onlyCheckingEmail: Boolean}, {}, SignUpRequest>, res: Response) => {
    
    const { email, password } = req.body;
    const { onlyCheckingEmail } = req.params;    

    try {

        if(onlyCheckingEmail){
            console.log('entro al if de onlyCheckingEmail');
            const userFound = await prisma.users.findUnique({
                where: {
                    email
                }
            });
    
            if(userFound){
                console.log('entro al if de userFound');
                return res.status(200).json({'emailExists': true});
            }            
            return res.status(200).json({'emailExists': false});
        }

        
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
        console.error('Occurs an error signing up the user : ', error);
        res.status(500).json({'error': error});
    }
}

export {signUp};