import logger from "@/config/winstonConfig";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { BillStatus } from "@prisma/client";
import { FieldResolver } from "nexus";

type ArgType = {
    status: string;
    amount: number;
    desc: string;
    icon: string;
    name: string;
};

export const addBillResolver: FieldResolver<"Mutation", "Bill"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving add bill of user ${email}`);

    const bill = await ctx.prisma.bill.create({
        data: {
            icon: args.icon,
            name: args.name,
            desc: args.desc,
            status: BillStatus[args.status],
            amount: args.amount,
            history: [],
            user: {
                connect: {
                    email: email,
                },
            },
        },
    });

    logger.info(
        `Successfully added bill for user ${email}, name: ${bill.name}`
    );

    return bill;
};
