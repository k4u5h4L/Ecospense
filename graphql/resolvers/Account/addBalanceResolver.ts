import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";

export const addBalanceResolver: FieldResolver<"Mutation", "Account"> = async (
    _root,
    args: { accountId: string; amount: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving add account balance for user ${email}, args:`);
    console.log(args);

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

    console.log(`Successfully added balance to account: ${account.id}`);

    return account;
};
