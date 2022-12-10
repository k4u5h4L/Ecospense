import { getPagination } from "@/graphql/utils/getPagination";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

type ArgType = {
    page: number;
    itemsPerPage: number;
};

export const getAllGoalsResolver: FieldResolver<"Query", "Goal"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    console.log(
        `Resolving all goals of user ${getUserEmail(ctx)}, page: ${
            args.page
        }, perPage: ${args.itemsPerPage}`
    );

    const { skip, take } = getPagination(args.page, args.itemsPerPage);

    return await ctx.prisma.goal.findMany({
        where: {
            user: {
                email: getUserEmail(ctx),
            },
        },
        skip: skip,
        take: take,
    });
};
