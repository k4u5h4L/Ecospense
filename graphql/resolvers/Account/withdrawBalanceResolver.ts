import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";

export const withdrawBalanceResolver: FieldResolver<
    "Mutation",
    "Account"
> = async (
    _root,
    args: { accountId: string; amount: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving withdraw account balance for user ${email}, args:`);
    console.log(args);

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

    console.log(`Successfully withdrew balance to account: ${account.id}`);

    return account;
};
