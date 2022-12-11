import { ExpenseStatusType } from "@/types/ExpenseStatusType";
import { formatMoney } from "@/utils/formatMoney";
import { gql, useMutation, useQuery } from "@apollo/client";
import { BankAccount } from "@prisma/client";
import { useState } from "react";
import ComponentLoaderPrimary from "../ComponentLoader/ComponentLoaderPrimary";
import PrimaryNotification from "../Notifications/PrimaryNotification/PrimaryNotification";

const GET_ACCOUNTS = gql`
    query GetAccounts($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
            currencySymbol
        }
        getAllAccounts(page: $page, itemsPerPage: $itemsPerPage) {
            balance
            desc
            id
            name
        }
        getCurrentExpenseStatus {
            id
            balance
            bills
            expenses
            income
            savings
        }
    }
`;

const ADD_BALANCE = gql`
    mutation Mutation($accountId: String!, $amount: Float!) {
        addBalance(accountId: $accountId, amount: $amount) {
            balance
            id
            name
            desc
            user {
                email
            }
        }
    }
`;

type InputType = {
    accountId: string;
    amount: number;
};

const AddBalanceModal = () => {
    const { loading, error, data } = useQuery(GET_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 999,
        },
    });
    const [input, setInput] = useState<InputType>({
        accountId: "",
        amount: 0,
    });
    const [addBalance, { data: mData, loading: mLoading, error: mError }] =
        useMutation(ADD_BALANCE, {
            update(cache, { data: { addBalance } }) {
                cache.modify({
                    fields: {
                        getCurrentExpenseStatus(existingBalance) {
                            let newBalance: ExpenseStatusType = structuredClone(
                                data.getCurrentExpenseStatus
                            );
                            newBalance.balance += input.amount;
                            const newBalanceRef = cache.writeFragment({
                                data: newBalance,
                                fragment: gql`
                                    fragment NewBalance on ExpenseStatus {
                                        id
                                        balance
                                        bills
                                        expenses
                                        income
                                        savings
                                    }
                                `,
                            });
                            return { ...newBalance, newBalanceRef };
                        },
                    },
                });
            },
        });

    const handleInputChange = (accountId: string): void => {
        setInput({
            ...input,
            accountId: accountId,
        });
    };

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        let accountId: string;

        if (data && input.accountId == "" && data.getAllAccounts.length > 0) {
            accountId = data.getAllAccounts[0].id;
        }

        await addBalance({
            variables: {
                accountId: input.accountId ? input.accountId : accountId,
                amount: input.amount,
            },
        });

        console.log({
            accountId: input.accountId ? input.accountId : accountId,
            amount: input.amount,
        });
    };

    return (
        <>
            <div
                className="modal fade action-sheet"
                id="depositActionSheet"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    {loading ? (
                        <ComponentLoaderPrimary />
                    ) : (
                        <>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Balance</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="action-sheet-content">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="account1"
                                                    >
                                                        To
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="account1"
                                                        required
                                                    >
                                                        {data.getAllAccounts.map(
                                                            (
                                                                account: BankAccount,
                                                                index: number
                                                            ) => (
                                                                <option
                                                                    key={
                                                                        account.id
                                                                    }
                                                                    defaultChecked={
                                                                        index ==
                                                                        0
                                                                    }
                                                                    onClick={() =>
                                                                        handleInputChange(
                                                                            account.id
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        account.name
                                                                    }{" "}
                                                                    (
                                                                    {formatMoney(
                                                                        account.balance,
                                                                        data
                                                                            .getCurrency
                                                                            .currencyName
                                                                    )}
                                                                    )
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <label className="label">
                                                    Enter Amount
                                                </label>
                                                <div className="input-group mb-2">
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addona1"
                                                    >
                                                        {
                                                            data.getCurrency
                                                                .currencySymbol
                                                        }
                                                    </span>
                                                    <input
                                                        type="number"
                                                        // step="0.01"
                                                        className="form-control"
                                                        pattern="[0-9]*"
                                                        inputMode="numeric"
                                                        placeholder={`100`}
                                                        onChange={(e) =>
                                                            setInput({
                                                                ...input,
                                                                amount: Number(
                                                                    e.target
                                                                        .value
                                                                ),
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block btn-lg"
                                                    data-bs-dismiss="modal"
                                                    onSubmit={handleSubmit}
                                                >
                                                    Deposit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <PrimaryNotification
                showNotif={mLoading}
                title="Adding balance..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default AddBalanceModal;
