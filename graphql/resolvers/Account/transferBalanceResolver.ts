import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";

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

    return [fromAccount, toAccount];
};
