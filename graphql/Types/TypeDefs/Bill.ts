import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { User } from "./User";

export const Bill = objectType({
    name: "Bill",
    definition(t) {
        t.string("id");
        t.string("icon");
        t.string("name");
        t.string("desc");
        t.float("amount");
        t.field("user", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Bill: {
                            every: {
                                id: parent.id,
                            },
                        },
                    },
                });
            },
        });
    },
});
