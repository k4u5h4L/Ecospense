import { FieldResolver } from "nexus";

export const healthCheckResolver: FieldResolver<"Query", "Testing"> = async (
    _root,
    _args,
    ctx
) => {
    return { message: "Health check passed!" };
};
