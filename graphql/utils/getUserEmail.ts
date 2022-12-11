import { GraphQlContextType } from "@/types/GraphQL";

export const getUserEmail = (ctx: GraphQlContextType): string => {
    if (process.env.NODE_ENV == "development") {
        return ctx.session?.user?.email ?? process.env.TESTING_EMAIL;
    } else {
        return ctx.session?.user?.email ?? "NA";
    }
};
