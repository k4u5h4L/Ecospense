import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/utils/mongodbAdapter";
import { sendVerificationRequest } from "@/utils/emailVerificationUtils";
import otpGenerator from "otp-generator";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { TWO_MINS_IN_S } from "@/constants/commonConstants";

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            // Providers.GitHub({
            //     clientId: process.env.GITHUB_CLIENT_ID,
            //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
            // }),

            EmailProvider({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: parseInt(process.env.EMAIL_SERVER_PORT),
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
                maxAge: TWO_MINS_IN_S,
                // generate & send the OTP from here
                generateVerificationToken: async () => {
                    return otpGenerator.generate(4, {
                        digits: true,
                        upperCaseAlphabets: false,
                        lowerCaseAlphabets: false,
                        specialChars: false,
                    });
                },
                sendVerificationRequest(params) {
                    sendVerificationRequest(params);
                },
            }),
        ],
        debug: process.env.NODE_ENV === "development",
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        // database: process.env.DATABASE_URL,
        // adapter: MongoDBAdapter(clientPromise),
        adapter: PrismaAdapter(prisma),
        callbacks: {
            async redirect({ url, baseUrl }) {
                return "/";
            },
        },
        pages: {
            signIn: "/auth/login",
            signOut: "/auth/signout",
            error: "/auth/error", // Error code passed in query string as ?error=
            verifyRequest: "/verify", // (used for check email message)
            newUser: "/auth/newuser", // If set, new users will be directed here on first sign in
        },
    });
