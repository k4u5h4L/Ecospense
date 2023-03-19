import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";

export const removeAccountResolver: FieldResolver<
    "Mutation",
    "Account"
> = async (_root, args: { accountId: string }, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);

    logger.info(
        `Resolving remove bank account for user ${email}, args: `,
        args
    );

    const account = await ctx.prisma.bankAccount.delete({
        where: {
            id: args.accountId,
        },
    });

    logger.info(
        `Successfully deleted bank account:: ID: ${account.id}, name: ${account.name}}`
    );

    return account;
};
