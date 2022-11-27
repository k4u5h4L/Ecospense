import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

type ArgType = {
    id: string;
};

export const getNewsByIdResolver: FieldResolver<"Query", "News"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    console.log(`Resolving single article by ID: ${args.id}`);

    return await ctx.prisma.news.findFirst({
        where: {
            id: args.id,
        },
    });
};
