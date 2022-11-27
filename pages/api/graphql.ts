import { ApolloServer } from "@apollo/server";
import { schema } from "@/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getSession } from "next-auth/react";
import prisma from "@/prisma/client";
import { AuthenticationError } from "@/graphql/errors/AuthError";
import { NextApiRequest, NextApiResponse } from "next";
import { GraphQlContextType } from "@/types/GraphQL";

const server = new ApolloServer({
    schema,
});

export default startServerAndCreateNextHandler(server, {
    context: async (
        req: NextApiRequest,
        res: NextApiResponse<GraphQlContextType>
    ) => {
        // get user's session
        const session = await getSession({ req });

        if (!session && process.env.NODE_ENV != "development") {
            throw AuthenticationError;
        }

        return { session, prisma };
    },
});
