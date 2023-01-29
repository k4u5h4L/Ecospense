import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { isMonthOld } from "@/utils/timeUtils";
import { BillStatus } from "@prisma/client";
import { GraphQLError } from "graphql";
import { FieldResolver } from "nexus";

type ArgType = {
    id: string;
    accountId: string;
};

export const payBillResolver: FieldResolver<"Mutation", "Bill"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving pay bill of user ${email}`);

    const bill = await ctx.prisma.bill.findFirst({
        where: {
            id: args.id,
            user: {
                email: email,
            },
        },
    });

    const account = await ctx.prisma.bankAccount.findFirst({
        where: {
            id: args.accountId,
            user: {
                email: email,
            },
        },
    });

    if (!bill) {
        throw new GraphQLError("No bill with ID exists in your user.", {
            extensions: {
                code: "NOT_FOUND",
            },
        });
    } else if (!account) {
        throw new GraphQLError("No account with ID exists in your user.", {
            extensions: {
                code: "NOT_FOUND",
            },
        });
    } else if (
        bill.history.length > 0 &&
        isMonthOld(bill.history.at(-1)) == "NOW"
    ) {
        throw new GraphQLError("Seems like you have already paid this bill.", {
            extensions: {
                code: "DUPLICATE_ACTION",
            },
        });
    } else if (account.balance < bill.amount) {
        throw new GraphQLError(
            "You do not have enough funds in this account to pay this bill.",
            {
                extensions: {
                    code: "INSUFFICIENT_FUNDS",
                },
            }
        );
    }

    const [updatedBill, updatedAccount] = await ctx.prisma.$transaction([
        ctx.prisma.bill.update({
            where: {
                id: bill.id,
            },
            data: {
                history: {
                    push: new Date(),
                },
            },
        }),
        ctx.prisma.bankAccount.update({
            where: {
                id: account.id,
            },
            data: {
                balance: {
                    decrement: bill.amount,
                },
            },
        }),
    ]);

    console.log(
        `Successfully paid bill for user ${email}, name: ${updatedBill.name}. New account balance: ${updatedAccount.balance}`
    );

    return updatedBill;
};
