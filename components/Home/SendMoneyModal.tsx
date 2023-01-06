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
    }
`;

const TRANSFER_BALANCE = gql`
    mutation Mutation(
        $fromAccountId: String!
        $toAccountId: String!
        $amount: Float!
    ) {
        transferBalance(
            fromAccountId: $fromAccountId
            toAccountId: $toAccountId
            amount: $amount
        ) {
            id
            balance
            name
            desc
        }
    }
`;

type InputType = {
    fromAccountId: string;
    toAccountId: string;
    amount: number;
};

const SendMoneyModal = () => {
    const { loading, error, data } = useQuery(GET_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 999,
        },
    });
    const [input, setInput] = useState<InputType>({
        fromAccountId: "",
        toAccountId: "",
        amount: 0,
    });

    const [transferBalance, { data: mData, loading: mLoading, error: mError }] =
        useMutation(TRANSFER_BALANCE, {
            update(
                cache,
                {
                    data: { transferBalance },
                }: { data: { transferBalance: BankAccount[] } }
            ) {
                cache.modify({
                    id: cache.identify(data.getAllAccounts),
                    fields: {
                        getAllAccounts(existingAccounts) {
                            const newArr: BankAccount[] = structuredClone(
                                data.getAllAccounts
                            );

                            let fromAccountId: string = input.fromAccountId;

                            if (
                                data &&
                                input.fromAccountId == "" &&
                                data.getAllAccounts.length > 0
                            ) {
                                fromAccountId = data.getAllAccounts[0].id;
                            }

                            for (let i = 0; i < newArr.length; i++) {
                                if (fromAccountId == newArr[i].id) {
                                    newArr[i].balance -= input.amount;
                                } else if (input.toAccountId == newArr[i].id) {
                                    newArr[i].balance += input.amount;
                                }
                            }

                            console.log("newArr: ", newArr);
                            console.log("transferBalance: ", transferBalance);

                            const newBalanceRef = cache.writeFragment({
                                data: newArr,
                                fragment: gql`
                                    fragment UpdatedAccounts on Account {
                                        id
                                        balance
                                        name
                                        desc
                                    }
                                `,
                            });
                            return [...newArr, newBalanceRef];
                        },
                    },
                });
            },
        });

    const handleInputChange = (
        accountId: string,
        type: "from" | "to"
    ): void => {
        if (type === "from") {
            setInput({
                ...input,
                fromAccountId: accountId,
            });
        } else {
            setInput({
                ...input,
                toAccountId: accountId,
            });
        }
    };

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        let fromAccountId: string = input.fromAccountId;

        if (
            data &&
            input.fromAccountId == "" &&
            data.getAllAccounts.length > 0
        ) {
            fromAccountId = data.getAllAccounts[0].id;
        }

        if (input.toAccountId == "") {
            alert("Please select to account");
            return;
        }

        await transferBalance({
            variables: {
                fromAccountId: fromAccountId,
                toAccountId: input.toAccountId,
                amount: input.amount,
            },
        });

        console.log({
            fromAccountId: input.fromAccountId,
            toAccountId: input.toAccountId,
            amount: input.amount,
        });
    };

    return (
        <>
            <div
                className="modal fade action-sheet"
                id="sendActionSheet"
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
                                    <h5 className="modal-title">
                                        Transfer Money Between Accounts
                                    </h5>
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
                                                        From
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="account2"
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
                                                                            account.id,
                                                                            "from"
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
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="account2"
                                                    >
                                                        To
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="account2"
                                                    >
                                                        <option
                                                            onClick={() =>
                                                                handleInputChange(
                                                                    "",
                                                                    "from"
                                                                )
                                                            }
                                                        >
                                                            Select Account
                                                        </option>
                                                        {data.getAllAccounts.map(
                                                            (
                                                                account: BankAccount,
                                                                index: number
                                                            ) => (
                                                                <option
                                                                    key={
                                                                        account.id
                                                                    }
                                                                    onClick={() =>
                                                                        handleInputChange(
                                                                            account.id,
                                                                            "to"
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
                                                        id="basic-addon1"
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
                                                    Transfer
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <PrimaryNotification
                                showNotif={mLoading}
                                title="Transferring balance..."
                                text="Please wait."
                                notifStyle="secondary"
                                showHeader={false}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default SendMoneyModal;
