import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import { schema } from "@/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getSession } from "next-auth/react";
import prisma from "@/prisma/client";
import { AuthenticationError } from "@/graphql/errors/AuthError";
import { NextApiRequest, NextApiResponse } from "next";
import { GraphQlContextType } from "@/types/GraphQL";

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginCacheControl({
            // Cache everything for below seconds by default.
            defaultMaxAge: 10,

            calculateHttpHeaders: true,
        }),
    ],
});

export default startServerAndCreateNextHandler(server, {
    context: async (req: NextApiRequest, res: NextApiResponse<any>) => {
        // get user's session
        const session = await getSession({ req });

        if (!session && process.env.NODE_ENV != "development") {
            res.status(401).json({ error: "Unauthorized" });
        } else {
            return { session, prisma };
        }
    },
});
