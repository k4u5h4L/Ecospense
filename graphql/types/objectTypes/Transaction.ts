import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { User } from "./User";

export const Transaction = objectType({
    name: "Transaction",
    definition(t) {
        t.string("id");
        t.string("icon");
        t.string("name");
        t.string("desc");
        t.float("amount");
        t.string("action");
        t.string("timestamp");
        t.field("user", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Transaction: {
                            some: {
                                id: parent.id,
                            },
                        },
                    },
                });
            },
        });
    },
});
