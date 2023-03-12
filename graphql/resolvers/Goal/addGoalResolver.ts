import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { BillStatus } from "@prisma/client";
import { FieldResolver } from "nexus";

type ArgType = {
    name: string;
    desc: string;
    totalAmount: number;
};

export const addGoalResolver: FieldResolver<"Mutation", "Goal"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    console.log(`Resolving add goal of user ${email}`);

    const goal = await ctx.prisma.goal.create({
        data: {
            name: args.name,
            desc: args.desc,
            totalAmount: args.totalAmount,
            collectedAmount: 0,
            user: {
                connect: {
                    email: email,
                },
            },
        },
    });

    console.log(
        `Successfully added goal for user ${email}, name: ${goal.name}`
    );

    return goal;
};
