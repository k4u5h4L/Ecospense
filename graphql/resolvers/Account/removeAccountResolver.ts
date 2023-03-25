import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { LogActions } from "@/constants/logActionConstants";
import { addLog } from "@/helpers/addLog";

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

    addLog(
        `Removed account: ${account.name}`,
        LogActions.REMOVE_ACCOUNT,
        email,
        ctx.prisma
    );

    return account;
};
