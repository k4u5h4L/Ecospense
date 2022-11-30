import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

type ArgType = {
    page: number;
    itemsPerPage: number;
};

export const getAllNewsResolver: FieldResolver<"Query", "News"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    console.log(
        `Resolving all news articles, page: ${args.page}, perPage: ${args.itemsPerPage}`
    );

    let skip: number;
    let take: number;

    if (!args.page || !args.itemsPerPage) {
        skip = 0;
        take = 10;
    } else {
        skip = args.page * args.itemsPerPage;
        take = args.itemsPerPage;
    }

    return await ctx.prisma.news.findMany({
        skip: skip,
        take: take,
    });
};
