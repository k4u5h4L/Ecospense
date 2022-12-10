import { GraphQlContextType } from "@/types/GraphQL";
import { objectType } from "nexus";
import { Account } from "./Account";
import { Bill } from "./Bill";
import { Goal } from "./Goal";
import { Log } from "./Log";
import { Profile } from "./Profile";
import { Transaction } from "./Transaction";

export const User = objectType({
    name: "User",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("email");
        t.field("Profile", {
            type: Profile,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.profile.findFirst({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Account", {
            type: Account,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.bankAccount.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Bill", {
            type: Bill,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.bill.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Goal", {
            type: Goal,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.goal.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Log", {
            type: Log,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.log.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
        t.list.field("Transaction", {
            type: Transaction,
            resolve: async (parent, args, ctx: GraphQlContextType, info) => {
                return await ctx.prisma.transaction.findMany({
                    where: {
                        user: {
                            id: parent.id,
                        },
                    },
                });
            },
        });
    },
});
