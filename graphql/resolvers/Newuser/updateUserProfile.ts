import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";

export const updateUserProfileResolver: FieldResolver<
    "Mutation",
    "User"
> = async (
    _root,
    args: { name: string; currency: string; income: number },
    ctx: GraphQlContextType
) => {
    console.log(`Resolving update new user, args:`);
    console.log(args);

    const user = await ctx.prisma.user.update({
        where: {
            email: ctx.session?.user?.email ?? "devkauhere@gmail.com",
        },
        data: {
            name: args.name,
            Profile: {
                upsert: {
                    create: {
                        currency: args.currency,
                        income: args.income,
                    },
                    update: {
                        currency: args.currency,
                        income: args.income,
                    },
                },
            },
        },
    });

    console.log(`Successfully updated details of user: ${user.email}`);

    return user;
};
