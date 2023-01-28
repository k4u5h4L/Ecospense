import { DICEBEAR_API_URL } from "@/constants/commonConstants";

/**
 * Generates 11 char random string everytime.
 * @returns the random string.
 */
export const getRandomString = (): string => {
    return Math.random().toString(36).slice(2, 13);
};

export const getNewAvatar = (): string => {
    return `${DICEBEAR_API_URL}?seed=${encodeURIComponent(getRandomString())}`;
};
