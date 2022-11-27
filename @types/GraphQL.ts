import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

export type GraphQlContextType = {
    session: Session;
    prisma: PrismaClient;
};
