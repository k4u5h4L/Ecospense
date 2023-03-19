import logger from "@/config/winstonConfig";
import { PrismaClient } from "@prisma/client";

export const addLog = async (
    name: string,
    action: string,
    email: string,
    prisma: PrismaClient
): Promise<void> => {
    logger.info(`Adding Log for user: ${email} with name: ${name}`);

    try {
        const log = await prisma.log.create({
            data: {
                name: name,
                action: action,
                user: {
                    connect: {
                        email: email,
                    },
                },
            },
        });

        logger.info(`Successfully added Log for user: ${email} ID: ${log.id}`);
    } catch (err) {
        logger.error(err);
    }
};
