import logger from "@/config/winstonConfig";
import { getAiResponse } from "@/graphql/utils/getAiResponse";
import { FieldResolver } from "nexus";

export const getChatResponseResolver: FieldResolver<
    "Query",
    "ChatResponse"
> = async (_root, args: { message: string; sender: string }, ctx) => {
    logger.info(
        `Resolving chat response, message: ${args.message}, sender: ${args.sender}`
    );

    const message = getAiResponse(args.message);

    const response = {
        message: message,
        timestamp: new Date().toISOString(),
        sender: "Ecospense Helper",
        user: ctx.session?.user?.email ?? "Unknown",
    };

    logger.info(`query: ${args.message}, response: ${message}`);

    return response;
};
