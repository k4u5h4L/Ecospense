import { ApolloServer } from "@apollo/server";
import { schema } from "@/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getSession } from "next-auth/react";
import prisma from "@/prisma/client";
import { AuthenticationError } from "@/graphql/Errors/AuthError";

const server = new ApolloServer({
    schema,
});

export default startServerAndCreateNextHandler(server, {
    context: async (req, res) => {
        // get user's session
        const session = await getSession({ req });

        if (!session) {
            throw AuthenticationError;
        }

        return { session, prisma };
    },
});
