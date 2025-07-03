import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? " ",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? " "
        }),
        CredentialsProvider({
            name: "Credentials",
    
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any, req: any) {
                const user = { id: "1", name: "Test User", email: credentials.email};
                if(user && credentials.password === "testpassword"){
                    return user;
                }
                return null;
            }
        })

    ],
    secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
