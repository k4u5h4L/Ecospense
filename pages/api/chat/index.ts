import type { NextApiRequest, NextApiResponse } from "next";
import { ChatMessage } from "@/types/ChatMessage";
import { getAiResponse } from "@/graphql/utils/getAiResponse";
import { getSession } from "next-auth/react";
import logger from "@/config/winstonConfig";

interface Response extends ChatMessage {
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if (req.method == "POST") {
        const { message: m, sender: s } = req.body;

        logger.info(`Resolving chat response, message: ${m}, sender: ${s}`);

        const session = await getSession({ req });

        if (!session) {
            res.status(401).json({ error: "You need to be logged in." });
        }

        const message = getAiResponse(m);

        const response: Response = {
            message: message,
            timestamp: new Date().toISOString(),
            sender: "Ecospense Helper",
            user: session?.user?.email ?? "Unknown",
        };

        logger.info(`query: ${m}, response: ${message}`);

        res.status(200).json(response);
    } else {
        res.status(404).json({ error: "POST method accepted" });
    }
}
