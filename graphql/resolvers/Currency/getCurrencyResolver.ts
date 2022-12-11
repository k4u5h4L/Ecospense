import { Currency as Currencies } from "@/constants/currencyEnum";
import { getUserEmail } from "@/graphql/utils/getUserEmail";
import { GraphQlContextType } from "@/types/GraphQL";
import { FieldResolver } from "nexus";

export const getCurrencyResolver: FieldResolver<"Query", "Testing"> = async (
    _root,
    _args,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);
    console.log(`Resolving selected currency of the user: ${email}`);

    const data = await ctx.prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            Profile: true,
        },
    });

    let curName: string = "USD";

    try {
        curName = Object.keys(Currencies).find(
            (key) => Currencies[key] === data.Profile.currency
        );
    } catch (e) {
        console.error(e);
    }

    return { currencyName: curName, currencySymbol: data.Profile.currency };
};
