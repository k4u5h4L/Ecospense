import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { LogActions } from "@/constants/logActionConstants";
import { addLog } from "@/helpers/addLog";

export const addAccountResolver: FieldResolver<"Mutation", "Account"> = async (
    _root,
    args: { name: string; desc: string; balance: number },
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving add bank account for user ${email}, args: `, args);

    const account = await ctx.prisma.bankAccount.create({
        data: {
            name: args.name,
            desc: args.desc,
            balance: args.balance,
            user: {
                connect: {
                    email: email,
                },
            },
        },
    });

    logger.info(
        `Successfully added bank account:: ID: ${account.id}, name: ${account.name}}`
    );

    addLog(
        `Added a new account: ${args.name}`,
        LogActions.ADD_ACCOUNT,
        email,
        ctx.prisma
    );

    return account;
};
