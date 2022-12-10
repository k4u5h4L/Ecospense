import { intArg, mutationType, nonNull, stringArg } from "nexus";
import { updateUserProfileResolver } from "../resolvers/Newuser/updateUserProfile";
import { User } from "./TypeDefs";

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
    },
});
