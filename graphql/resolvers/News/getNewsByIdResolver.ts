import logger from "@/config/winstonConfig";
import { GraphQlContextType } from "@/types/GraphQL";
import { GraphQLError } from "graphql";
import { FieldResolver } from "nexus";

type ArgType = {
    id: string;
};

export const getNewsByIdResolver: FieldResolver<"Query", "News"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    logger.info(`Resolving single article by ID: ${args.id}`);

    try {
        const news = await ctx.prisma.news.findFirst({
            where: {
                id: args.id,
            },
        });

        if (!news) {
            throw new Error("News not found");
        }

        return news;
    } catch (error) {
        logger.error(error);
        throw new GraphQLError("No news articles with this ID exist.", {
            extensions: {
                code: "NOT_FOUND",
            },
        });
    }
};
