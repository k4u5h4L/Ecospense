import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { Account } from "./Account";
import { Profile } from "./Profile";

export const User = objectType({
    name: "User",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("email");
        t.field("Profile", {
            type: Profile,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.profile.findFirst({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Account", {
            type: Account,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.bankAccount.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
    },
});
