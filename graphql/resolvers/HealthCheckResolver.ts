import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

export const healthCheckResolver: FieldResolver<"Query", "Testing"> = async (
    _root,
    _args,
    ctx: GraphQlContextType
) => {
    return { message: "Health check passed!" };
};
