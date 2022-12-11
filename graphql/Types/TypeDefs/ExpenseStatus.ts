import { objectType } from "nexus";

export const ExpenseStatus = objectType({
    name: "ExpenseStatus",
    definition(t) {
        t.float("balance");
        t.float("income");
        t.float("expenses");
        t.float("bills");
        t.float("savings");
        t.string("currency");
    },
});
