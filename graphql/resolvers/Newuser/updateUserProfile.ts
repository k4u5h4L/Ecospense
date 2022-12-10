import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";

export const updateUserProfileResolver: FieldResolver<
    "Mutation",
    "ChatResponse"
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
        include: {
            Profile: true,
        },
    });

    const res = {
        username: user.name,
        email: user.email,
        profile: {
            name: user.name,
            currency: user.Profile.currency,
            income: user.Profile.income,
        },
    };

    console.log(`Successfully updated details of user: ${res.email}`);

    return res;
};
