import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";    

const prisma  = new PrismaClient();

export default async function handler(req: any, res: any) {
    if(req.method !== "POST") return res.status(405).end();

    const { email, password } = req.body;
    if(!email || !password) return res.status(405).json({ error : "Missing fields" });

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if(existingUser) return res.status(400).json({ error: "User already exists" });

const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, hashedPassword },
    });

    return res.status(201).json({message: "User created", userId: user.id});
}