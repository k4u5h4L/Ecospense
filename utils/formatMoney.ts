export const formatMoney = (amount: number, currency: string = "GBP") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
    })
        .format(amount)
        .replace(/^(\D+)/, "$1 ")
        .replace(/\s+/, " ");
};
