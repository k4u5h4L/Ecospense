import { FieldResolver } from "nexus";
import { GraphQlContextType } from "@/types/GraphQL";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import logger from "@/config/winstonConfig";
import { addLog } from "@/helpers/addLog";
import { LogActions } from "@/constants/logActionConstants";

export const updateProfilePicResolver: FieldResolver<
    "Mutation",
    "Profile"
> = async (_root, args: { pic: string }, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);
    logger.info(`Resolving update profile pic of user: ${email}, args: `, args);

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

    logger.info(`Successfully updated details of user: ${email}`);

    addLog(
        `Updated your profile pic!`,
        LogActions.UPDATE_PFP,
        email,
        ctx.prisma
    );

    return user.Profile;
};
