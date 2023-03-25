export const DEFAULT_URL = `https://ecospense.kaush.me`;

export const getCurrentUrl = () => {
    return process.env.VERCEL_URL ?? DEFAULT_URL;
};
