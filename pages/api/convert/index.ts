import type { NextApiRequest, NextApiResponse } from "next";
import CC from "currency-converter-lt";
import { ConvertApiRequest, ConvertApiResponse } from "@/types/ConvertApi";
import { Currency } from "@/constants/currencyEnum";
import logger from "@/config/winstonConfig";

let currencyConverter = new CC();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ConvertApiResponse>
) {
    if (req.method == "POST") {
        try {
            const { from, to, value }: ConvertApiRequest = req.body;

            if (!(from in Currency)) {
                res.status(400).json({
                    error: "'from' currency is not supported for now. Please visit `/api/convert/currencies` for supported currencies.",
                });
            } else if (!(to in Currency)) {
                res.status(400).json({
                    error: "'to' currency is not supported for now. Please visit `/api/convert/currencies` for supported currencies.",
                });
            } else {
                const val = value <= 0 ? 1 : value;

                const rate: number = await currencyConverter
                    .from(from)
                    .to(to)
                    .amount(val)
                    .convert();

                const result = { from: from, to: to, value: val, rate: rate };

                logger.info("Converted currency: ", result);

                res.status(200).json(result);
            }
        } catch (err) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(404).json({ error: "POST method accepted" });
    }
}
