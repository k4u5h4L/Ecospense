import { queryType } from "nexus";
import { Test } from "./Test";

export const Query = queryType({
    definition(t) {
        t.field("Testing", {
            type: Test,
            description: "Test GraphQL resolver",
            args: null,
            resolve: async (_root, _args, ctx) => {
                return { message: "graphql test" };
            },
        });
    },
});
