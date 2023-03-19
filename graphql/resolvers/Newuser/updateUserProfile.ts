import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import logger from "@/config/winstonConfig";

export const updateUserProfileResolver: FieldResolver<
    "Mutation",
    "User"
> = async (
    _root,
    args: { name: string; currency: string; income: number; pic: string },
    ctx: GraphQlContextType
) => {
    logger.info(`Resolving update new user, args: `, args);

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
                        pic: args.pic,
                    },
                    update: {
                        currency: args.currency,
                        income: args.income,
                        pic: args.pic,
                    },
                },
            },
        },
    });

    logger.info(`Successfully updated details of user: ${user.email}`);

    return user;
};
