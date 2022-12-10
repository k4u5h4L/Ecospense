import { idArg, intArg, nonNull, queryType, stringArg } from "nexus";
import { getAllAccountsResolver } from "../resolvers/Account/getAllAccountsResolver";
import { getAllBillsResolver } from "../resolvers/Bill/getAllBillsResolver";
import { getChatResponseResolver } from "../resolvers/Chat/getChatResponseResolver";
import { getAllGoalsResolver } from "../resolvers/Goal/getAllGoalsResolver";
import { healthCheckResolver } from "../resolvers/HealthCheckResolver";
import { getAllLogsResolver } from "../resolvers/Log/getAllLogsResolver";
import { getAllNewsResolver } from "../resolvers/News/getAllNewsResolver";
import { getNewsByIdResolver } from "../resolvers/News/getNewsByIdResolver";
import { getAllTxnsResolver } from "../resolvers/Transaction/getAllTxnsResolver";
import {
    News,
    Test,
    Chat,
    Account,
    Bill,
    Goal,
    Log,
    Transaction,
} from "./TypeDefs/index";

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

        t.list.field("getAllAccounts", {
            type: Account,
            description: "Get all the accounts of a particular user",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllAccountsResolver,
        });

        t.list.field("getAllBills", {
            type: Bill,
            description: "Get all the bills of a particular user",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllBillsResolver,
        });

        t.list.field("getAllGoals", {
            type: Goal,
            description: "Get all the goals of a particular user",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllGoalsResolver,
        });

        t.list.field("getAllLogs", {
            type: Log,
            description: "Get all the logs of a particular user",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllLogsResolver,
        });

        t.list.field("getAllTxns", {
            type: Transaction,
            description: "Get all the transactions of a particular user",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
            },
            resolve: getAllTxnsResolver,
        });
    },
});
