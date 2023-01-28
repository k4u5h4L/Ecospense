import { floatArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { addBalanceResolver } from "../resolvers/Account/addBalanceResolver";
import { withdrawBalanceResolver } from "../resolvers/Account/withdrawBalanceResolver";
import { updateUserProfileResolver } from "../resolvers/Newuser/updateUserProfile";
import { Account, Profile, User } from "@/graphql/types/objectTypes/index";
import { transferBalanceResolver } from "../resolvers/Account/transferBalanceResolver";
import { removeAccountResolver } from "../resolvers/Account/removeAccountResolver";
import { addAccountResolver } from "../resolvers/Account/addAccountResolver";
import { updateProfilePicResolver } from "../resolvers/Profile/updateProfilePicResolver";

export const Mutation = mutationType({
    definition(t) {
        t.field("updateUserProfile", {
            type: User,
            description: "Update your profile.",
            args: {
                name: nonNull(stringArg()),
                currency: nonNull(stringArg()),
                income: nonNull(intArg()),
                pic: nonNull(stringArg()),
            },
            resolve: updateUserProfileResolver,
        });

        t.field("updateProfilePic", {
            type: Profile,
            description: "Update your profile pic.",
            args: {
                pic: nonNull(stringArg()),
            },
            resolve: updateProfilePicResolver,
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

        t.field("addAccount", {
            type: Account,
            description: "Add a bank account to your user profile.",
            args: {
                name: nonNull(stringArg()),
                desc: nonNull(stringArg()),
                balance: nonNull(floatArg()),
            },
            resolve: addAccountResolver,
        });

        t.field("removeAccount", {
            type: Account,
            description: "Remove the bank account from your user profile.",
            args: {
                accountId: nonNull(stringArg()),
            },
            resolve: removeAccountResolver,
        });
    },
});
