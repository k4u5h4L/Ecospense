import logger from "@/config/winstonConfig";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GoalActions } from "@/types/Common";
import { GraphQlContextType } from "@/types/GraphQL";
import { Goal } from "@prisma/client";
import { GraphQLError } from "graphql";
import { FieldResolver } from "nexus";

type ArgType = {
    id: string;
    action: GoalActions;
    amount: number;
};

export const updateGoalResolver: FieldResolver<"Mutation", "Goal"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving update goal of user ${email}`);
    let updatedGoal: Goal;

    const goal = await ctx.prisma.goal.findFirst({
        where: {
            id: args.id,
        },
        include: {
            user: true,
        },
    });

    if (goal.user.email != email) {
        throw new GraphQLError(
            "The goal you are tryingto update doesn't seem to belong to you.",
            {
                extensions: {
                    code: "UNAUTHORIZED",
                },
            }
        );
    }

    if (args.action == "+") {
        updatedGoal = await ctx.prisma.goal.update({
            where: {
                id: args.id,
            },
            data: {
                collectedAmount: {
                    increment: args.amount,
                },
            },
        });
        logger.debug("Added amount");
    } else if (args.action == "-") {
        updatedGoal = await ctx.prisma.goal.update({
            where: {
                id: args.id,
            },
            data: {
                collectedAmount: {
                    decrement: args.amount,
                },
            },
        });
        logger.debug("Subtracted amount");
    }

    logger.info(
        `Successfully updated goal for user ${email}, name: ${goal.name}`
    );

    return updatedGoal;
};
