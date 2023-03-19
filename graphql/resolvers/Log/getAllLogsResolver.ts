import logger from "@/config/winstonConfig";
import { getPagination } from "@/graphql/utils/getPagination";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

type ArgType = {
    page: number;
    itemsPerPage: number;
};

export const getAllLogsResolver: FieldResolver<"Query", "Log"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    logger.info(
        `Resolving all logs of user ${getUserEmail(ctx)}, page: ${
            args.page
        }, perPage: ${args.itemsPerPage}`
    );

    const { skip, take } = getPagination(args.page, args.itemsPerPage);

    return await ctx.prisma.log.findMany({
        where: {
            user: {
                email: getUserEmail(ctx),
            },
        },
        orderBy: {
            createdAt: "asc",
        },
        skip: skip,
        take: take,
    });
};
