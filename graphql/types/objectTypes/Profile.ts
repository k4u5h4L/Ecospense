import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { User } from "./User";

export const Profile = objectType({
    name: "Profile",
    definition(t) {
        t.string("id");
        t.string("currency");
        t.int("income");
        t.field("User", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Profile: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
    },
});
