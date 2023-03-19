import logger from "@/config/winstonConfig";
import { Currency as Currencies } from "@/constants/currencyEnum";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

export const getProfileResolver: FieldResolver<"Query", "Profile"> = async (
    _root,
    _args,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);
    logger.info(`Resolving get profile of the user: ${email}`);

    const profile = await ctx.prisma.profile.findFirst({
        where: {
            user: {
                email: email,
            },
        },
    });

    return profile;
};
