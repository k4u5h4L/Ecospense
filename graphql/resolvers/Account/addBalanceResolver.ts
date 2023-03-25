import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { addLog } from "@/helpers/addLog";
import { LogActions } from "@/constants/logActionConstants";
import { addTransaction } from "@/helpers/addTransaction";
import { TxnAction, TxnIcons } from "@/constants/txnConstants";

export const addBalanceResolver: FieldResolver<"Mutation", "Account"> = async (
    _root,
    args: { accountId: string; amount: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(
        `Resolving add account balance for user ${email}, args: `,
        args
    );

    const account = await ctx.prisma.bankAccount.update({
        where: {
            id: args.accountId,
        },
        data: {
            balance: {
                increment: args.amount,
            },
        },
    });

    logger.info(`Successfully added balance to account: ${account.id}`);

    addLog(
        `Added balance of ${args.amount}`,
        LogActions.ADD_BALANCE,
        email,
        ctx.prisma
    );

    addTransaction(
        TxnIcons.ADD,
        `Added balance`,
        ``,
        TxnAction.ADD,
        args.amount,
        email,
        ctx.prisma
    );

    return account;
};
