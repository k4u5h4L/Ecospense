import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { ExpenseStatusType } from "@/types/ExpenseStatusType";
import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";
import * as expenseStatusUtil from "@/graphql/utils/expenseStatusUtil";

export const getCurrentExpenseStatusResolver: FieldResolver<
    "Query",
    "ExpenseStatus"
> = async (_root, _args, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving current expense status, user: ${email}`);

    const data = await ctx.prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            BankAccount: true,
            Profile: true,
            Bill: true,
            Goal: true,
            Transaction: true,
        },
    });

    const res: ExpenseStatusType = {
        balance: expenseStatusUtil.getBalance(data.BankAccount),
        income: expenseStatusUtil.getIncome(data.Profile),
        expenses: expenseStatusUtil.getExpenses(data.Transaction),
        bills: expenseStatusUtil.getBills(data.Bill),
        savings: expenseStatusUtil.getGoals(data.Goal),
        currency: data.Profile.currency,
    };

    return res;
};
