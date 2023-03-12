import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";

export const updateProfilePicResolver: FieldResolver<
    "Mutation",
    "Profile"
> = async (_root, args: { pic: string }, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);
    console.log(`Resolving update profile pic of user: ${email}, args:`);
    console.log(args);

    const user = await ctx.prisma.user.update({
        where: {
            email: email,
        },
        data: {
            Profile: {
                update: {
                    pic: args.pic,
                },
            },
        },
        select: {
            Profile: true,
        },
    });

    console.log(`Successfully updated details of user: ${email}`);

    return user.Profile;
};
