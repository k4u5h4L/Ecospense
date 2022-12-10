import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { User } from "./User";

export const Goal = objectType({
    name: "Goal",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("desc");
        t.float("totalAmount");
        t.float("collectedAmount");
        t.field("user", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Goal: {
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
