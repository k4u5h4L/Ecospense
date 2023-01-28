import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";

export const removeAccountResolver: FieldResolver<
    "Mutation",
    "Account"
> = async (_root, args: { accountId: string }, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving remove bank account for user ${email}, args:`);
    console.log(args);

    const account = await ctx.prisma.bankAccount.delete({
        where: {
            id: args.accountId,
        },
    });

    console.log(
        `Successfully deleted bank account:: ID: ${account.id}, name: ${account.name}}`
    );

    return account;
};
