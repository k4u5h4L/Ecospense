export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
};
