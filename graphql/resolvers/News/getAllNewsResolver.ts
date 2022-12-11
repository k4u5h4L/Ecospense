import { getPagination } from "@/graphql/utils/getPagination";
import { GraphQlContextType } from "@/types/GraphQL";
import { arg, FieldResolver } from "nexus";

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

    const { skip, take } = getPagination(args.page, args.itemsPerPage);

    return await ctx.prisma.news.findMany({
        skip: skip,
        take: take,
    });
};
