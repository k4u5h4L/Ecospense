import { objectType } from "nexus";

export const Currency = objectType({
    name: "Currency",
    definition(t) {
        t.string("id");
        t.string("currencyName");
        t.string("currencySymbol");
    },
});
