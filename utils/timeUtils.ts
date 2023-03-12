export const getTimeFromIsoString = (isoTime: string): string => {
    console.log(isoTime);

    const d = new Date(isoTime);
    const h = (d.getHours() < 10 ? "0" : "") + d.getHours();
    const m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

    return `${h}:${m}`;
};

export type MonthOldType = "NOW" | "PAST" | "FUTURE";

/**
 * Checks if provided date is older than the current date, in terms of months.
 * @param date Returns "NOW" if given month is equal to current month, "PAST" if older, "FUTURE" otherwise.
 */
export const isMonthOld = (date: Date | string): MonthOldType => {
    if (typeof date == "string") {
        date = new Date(date);
    }

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();

    const now = new Date();

    const yearNow = now.getUTCFullYear();
    const monthNow = now.getUTCMonth();

    if (year == yearNow && month == monthNow) {
        return "NOW";
    } else if (year < yearNow && month < monthNow) {
        return "PAST";
    } else {
        return "FUTURE";
    }
};

/**
 * Check if bill is overdue by checking last bill pay date.
 * @param date last bill pay date.
 * @returns true is bill is overdue, else otherwise.
 */
export const isBillOverdue = (date: Date | string): boolean => {
    if (typeof date == "string") {
        date = new Date(date);
    }

    const now = new Date();

    if (
        date.getUTCFullYear() < now.getUTCFullYear() &&
        date.getUTCMonth() < 11
    ) {
        return true;
    }

    return (
        date.getUTCFullYear() <= now.getUTCFullYear() &&
        (date.getUTCMonth() + 1) % 12 < now.getUTCMonth()
    );
};
