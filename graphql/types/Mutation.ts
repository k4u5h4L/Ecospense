import { floatArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { addBalanceResolver } from "../resolvers/Account/addBalanceResolver";
import { withdrawBalanceResolver } from "../resolvers/Account/withdrawBalanceResolver";
import { updateUserProfileResolver } from "../resolvers/Newuser/updateUserProfile";
import { Account, User } from "@/graphql/types/objectTypes/index";
import { transferBalanceResolver } from "../resolvers/Account/transferBalanceResolver";

export const Mutation = mutationType({
    definition(t) {
        t.field("updateUserProfile", {
            type: User,
            description: "Update your profile.",
            args: {
                name: nonNull(stringArg()),
                currency: nonNull(stringArg()),
                income: nonNull(intArg()),
            },
            resolve: updateUserProfileResolver,
        });

        t.field("addBalance", {
            type: Account,
            description: "Add balance to your account",
            args: {
                accountId: nonNull(stringArg()),
                amount: nonNull(floatArg()),
            },
            resolve: addBalanceResolver,
        });

        t.field("withdrawBalance", {
            type: Account,
            description: "Withdraw balance from your account",
            args: {
                accountId: nonNull(stringArg()),
                amount: nonNull(floatArg()),
            },
            resolve: withdrawBalanceResolver,
        });

        t.list.field("transferBalance", {
            type: Account,
            description: "Transfer money from one account to another.",
            args: {
                fromAccountId: nonNull(stringArg()),
                toAccountId: nonNull(stringArg()),
                amount: nonNull(floatArg()),
            },
            resolve: transferBalanceResolver,
        });
    },
});
