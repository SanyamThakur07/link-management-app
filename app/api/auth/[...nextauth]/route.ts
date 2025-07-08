import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        CredentialsProvider({
            name: "Credentials",
    
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any, req: any) {
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email},
                });
                if(user && user.hashedPassword){
                    const isValid = await bcrypt.compare(credentials.password, user.hashedPassword);
                    if(isValid){
                        return {id: user.id, email: user.email};
                    }
                }
                return null;
            }
        })

    ],

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
