import { queryType } from "nexus";
import { Test } from "./Objects/Test";

export const Query = queryType({
    definition(t) {
        t.field("Testing", {
            type: Test,
            description: "Health Check GraphQL resolver",
            args: null,
            resolve: async (_root, _args, ctx) => {
                return { message: "Health check passed!" };
            },
        });
    },
});
