import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { addLog } from "@/helpers/addLog";
import { LogActions } from "@/constants/logActionConstants";
import { addTransaction } from "@/helpers/addTransaction";
import { TxnIcons, TxnAction } from "@/constants/txnConstants";

export const transferBalanceResolver: FieldResolver<
    "Mutation",
    "Account"
> = async (
    _root,
    args: { fromAccountId: string; toAccountId: string; amount: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving transfer balance for user ${email}, args: `, args);

    const [fromAccount, toAccount] = await ctx.prisma.$transaction([
        ctx.prisma.bankAccount.update({
            where: {
                id: args.fromAccountId,
            },
            data: {
                balance: {
                    decrement: args.amount,
                },
            },
        }),
        ctx.prisma.bankAccount.update({
            where: {
                id: args.toAccountId,
            },
            data: {
                balance: {
                    increment: args.amount,
                },
            },
        }),
    ]);

    logger.info(
        `Successfully transferred ${args.amount} from account ${fromAccount.id} to account ${toAccount.id}`
    );

    addLog(
        `Transferred balance of ${args.amount} from ${fromAccount.name} to ${toAccount.name}`,
        LogActions.TRANSFER_BALANCE,
        email,
        ctx.prisma
    );

    addTransaction(
        TxnIcons.TRANSFER,
        `Transferred balance`,
        ``,
        TxnAction.TRANSFER,
        args.amount,
        email,
        ctx.prisma
    );

    return [fromAccount, toAccount];
};
