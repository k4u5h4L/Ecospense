export const getTimeFromIsoString = (isoTime: string): string => {
    console.log(isoTime);

    const d = new Date(isoTime);
    const h = (d.getHours() < 10 ? "0" : "") + d.getHours();
    const m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

    return `${h}:${m}`;
};
