import { idArg, intArg, nonNull, queryType, stringArg } from "nexus";
import { getChatResponseResolver } from "../resolvers/Chat/getChatResponseResolver";
import { healthCheckResolver } from "../resolvers/HealthCheckResolver";
import { getAllNewsResolver } from "../resolvers/News/getAllNewsResolver";
import { getNewsByIdResolver } from "../resolvers/News/getNewsByIdResolver";
import { News, Test, Chat } from "./TypeDefs/index";

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

        t.field("getNewsById", {
            type: News,
            description: "Get the news by ID",
            args: {
                id: nonNull(idArg()),
            },
            resolve: getNewsByIdResolver,
        });

        t.field("getChatResponse", {
            type: Chat,
            description: "Chat with an AI!",
            args: {
                message: nonNull(stringArg()),
                sender: nonNull(stringArg()),
            },
            resolve: getChatResponseResolver,
        });
    },
});
