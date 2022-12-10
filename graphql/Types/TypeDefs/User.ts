import { objectType } from "nexus";
import { Profile } from "./Profile";

export const User = objectType({
    name: "User",
    definition(t) {
        t.string("username");
        t.string("email");
        t.field("profile", {
            type: Profile,
        });
    },
});
