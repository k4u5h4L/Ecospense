import { intArg, queryType } from "nexus";
import { healthCheckResolver } from "../resolvers/HealthCheckResolver";
import { getAllNewsResolver } from "../resolvers/News/getAllNewsResolver";
import { News } from "./TypeDefs/News";
import { Test } from "./TypeDefs/Test";

export const Query = queryType({
    definition(t) {
        t.field("testing", {
            type: Test,
            description: "Health Check GraphQL resolver.",
            args: {},
            resolve: healthCheckResolver,
        });

        t.list.field("getAllNews", {
            type: News,
            description: "Gets all the news articles.",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllNewsResolver,
        });
    },
});
