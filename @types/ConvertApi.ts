export type ConvertApiResponse = {
    from?: string;
    to?: string;
    value?: number;
    rate?: number;
    error?: Object;
};

export type ConvertApiRequest = {
    from: string;
    to: string;
    value: number;
};
