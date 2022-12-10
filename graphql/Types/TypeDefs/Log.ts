import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { User } from "./User";

export const Log = objectType({
    name: "Log",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("action");
        t.field("user", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Log: {
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
