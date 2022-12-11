import { BankAccount, Bill, Goal, Profile, Transaction } from "@prisma/client";

export const getBalance = (accounts: BankAccount[]): number => {
    return accounts.reduce(
        (accumulator, currentValue) =>
            accumulator + (!currentValue.balance ? 0 : currentValue.balance),
        0
    );
};

export const getIncome = (profile: Profile): number => {
    return !profile.income ? 0 : profile.income;
};

export const getExpenses = (txns: Transaction[]): number => {
    return txns.reduce(
        (accumulator, currentValue) =>
            accumulator + (!currentValue.amount ? 0 : currentValue.amount),
        0
    );
};

export const getBills = (bills: Bill[]): number => {
    return bills.reduce(
        (accumulator, currentValue) =>
            accumulator + (!currentValue.amount ? 0 : currentValue.amount),
        0
    );
};

export const getGoals = (goals: Goal[]): number => {
    return goals.reduce(
        (accumulator, currentValue) =>
            accumulator +
            (!currentValue.collectedAmount ? 0 : currentValue.collectedAmount),
        0
    );
};
