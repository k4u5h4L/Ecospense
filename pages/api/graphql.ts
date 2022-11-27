import { ApolloServer, AuthenticationError } from "apollo-server-micro";
import { getSession } from "next-auth/react";
import { schema } from "@/graphql/schema";
import prisma from "@/prisma/client";
import Cors from "micro-cors";

const cors = Cors();

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        // get user's session
        // const session = await getSession({ req });

        // if (!session) {
        //     throw new AuthenticationError("User is not logged in.");
        // }

        // return { session, prisma };
        return { prisma };
    },
    // @ts-ignore
    playground: {
        settings: {
            //   "editor.theme": "light",
            "request.credentials": "same-origin",
        },
    },
});

const startServer = server.start();

export default cors(async (req, res) => {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
});

// const handler = server.createHandler({ path: "/api/graphql" });
// export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};
