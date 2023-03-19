import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { addLog } from "@/helpers/addLog";
import { LogActions } from "@/constants/logActionConstants";

export const withdrawBalanceResolver: FieldResolver<
    "Mutation",
    "Account"
> = async (
    _root,
    args: { accountId: string; amount: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(
        `Resolving withdraw account balance for user ${email}, args: `,
        args
    );

    const account = await ctx.prisma.bankAccount.update({
        where: {
            id: args.accountId,
        },
        data: {
            balance: {
                decrement: args.amount,
            },
        },
    });

    logger.info(`Successfully withdrew balance to account: ${account.id}`);

    addLog(
        `Withdrew balance of ${args.amount}`,
        LogActions.WITHDRAW_BALANCE,
        email,
        ctx.prisma
    );

    return account;
};
