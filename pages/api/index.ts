// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import logger from "@/config/winstonConfig";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    logger.info("Hit welcome API");
    res.status(200).json({
        message: `Welcome to Ecospense. Please visit https://${process.env.VERCEL_URL}`,
    });
}
