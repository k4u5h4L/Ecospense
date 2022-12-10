import { objectType } from "nexus";
import { User } from "./User";

export const Profile = objectType({
    name: "Profile",
    definition(t) {
        t.string("name");
        t.string("currency");
        t.string("income");
        // t.field("user", {
        //     type: User,
        // });
    },
});
