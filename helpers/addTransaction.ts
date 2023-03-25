import logger from "@/config/winstonConfig";
import { PrismaClient } from "@prisma/client";

export const addTransaction = async (
    icon: string,
    name: string,
    desc: string,
    amount: number,
    email: string,
    prisma: PrismaClient
): Promise<void> => {
    logger.info(`Adding Transaction for user: ${email} with name: ${name}`);

    try {
        const txn = await prisma.transaction.create({
            data: {
                icon: icon,
                name: name,
                desc: desc,
                amount: amount,
                user: {
                    connect: {
                        email: email,
                    },
                },
            },
        });

        logger.info(
            `Successfully added Transaction for user: ${email} ID: ${txn.id}`
        );
    } catch (err) {
        logger.error(err);
    }
};
