type NotationType = "standard" | "scientific" | "engineering" | "compact";

export const formatMoney = (
    amount: number,
    currency: string = "GBP",
    notation: NotationType = "compact"
) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        notation: notation,
    })
        .format(amount)
        .replace(/^(\D+)/, "$1 ")
        .replace(/\s+/, " ")
        .replace(/[A-Za-z]$/, " $&");
};
