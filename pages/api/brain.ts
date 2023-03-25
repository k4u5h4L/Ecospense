import logger from "@/config/winstonConfig";
import type { NextApiRequest, NextApiResponse } from "next";
import { Matrix, solve } from "ml-matrix";

type Data = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    logger.info("Hit brain API");

    const x = [1, 2, 3, 4, 5];
    const y = [1, 40, 90, 160, 250];

    const sx = x.reduce(Ex);
    const sy = y.reduce(Ex);
    const sx2 = x.reduce(Ex2);
    const sx3 = x.reduce(Ex3);
    const sx4 = x.reduce(Ex4);
    const sxy = Exy(x, y).reduce(Ex);
    const sx2y = Ex2y(x, y).reduce(Ex);

    const b = [sy, sxy, sx2y];
    const a = [
        [x.length, sx, sx2],
        [sx, sx2, sx3],
        [sx2, sx3, sx4],
    ];

    const X = new Matrix(a);
    const Y = Matrix.columnVector(b);
    const roots = solve(X, Y, true);

    logger.debug(`Roots: ${roots}`);

    logger.debug(`Predict: ${predict(6.0, roots)}`);

    res.status(200).json({
        message: `Brain.js working!`,
    });
}

function predict(x_new: any, roots: Matrix) {
    roots.get(0, 0);
    const x_sq = x_new ** 2;
    const pred =
        roots.get(0, 0) + roots.get(1, 0) * x_new + roots.get(2, 0) * x_sq;
    return pred;
}

const Ex = (accumulator: number, currentValue: number): number =>
    accumulator + currentValue;
const Ex2 = (accumulator: number, currentValue: number): number =>
    accumulator + currentValue ** 2;
const Ex3 = (accumulator: number, currentValue: number): number =>
    accumulator + currentValue ** 3;
const Ex4 = (accumulator: number, currentValue: number): number =>
    accumulator + currentValue ** 4;
const Exy = (x: number[], y: number[]): number[] => {
    const res: number[] = [];
    for (const i in x) {
        res.push(x[i] * y[i]);
    }
    return res;
};
const Ex2y = (x: number[], y: number[]): number[] => {
    const res: number[] = [];
    for (const i in x) {
        res.push(x[i] ** 2 * y[i]);
    }
    return res;
};
