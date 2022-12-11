import { floatArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { addBalanceResolver } from "../resolvers/Account/addBalanceResolver";
import { updateUserProfileResolver } from "../resolvers/Newuser/updateUserProfile";
import { Account, User } from "./TypeDefs";

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
    },
});
