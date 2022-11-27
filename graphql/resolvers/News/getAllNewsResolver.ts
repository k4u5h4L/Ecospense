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
    const skip = args.page * args.itemsPerPage ?? 0;
    const take = args.itemsPerPage ?? 10;

    return await ctx.prisma.news.findMany({
        skip: skip,
        take: take,
    });
};
