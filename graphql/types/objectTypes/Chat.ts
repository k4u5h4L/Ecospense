import { objectType } from "nexus";

export const Chat = objectType({
    name: "Chat",
    definition(t) {
        t.string("message");
        t.string("timestamp");
        t.string("user");
        t.string("sender");
    },
});
