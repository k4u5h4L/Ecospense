import type { NextApiRequest, NextApiResponse } from "next";
import { Currency } from "@/constants/currencyEnum";

type Response = {
    currencies?: string[];
    error?: Object;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if (req.method == "GET") {
        res.status(200).json({ currencies: Object.keys(Currency) });
    } else {
        res.status(404).json({ error: "GET method accepted" });
    }
}
