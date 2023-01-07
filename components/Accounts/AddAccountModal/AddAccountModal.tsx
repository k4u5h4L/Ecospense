import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { GET_ALL_ACCOUNTS } from "@/constants/gqlQueries";
import { gql, useMutation, useQuery } from "@apollo/client";
import { BankAccount } from "@prisma/client";
import { useState } from "react";

type InputType = {
    name: string;
    desc: string;
    balance: number;
};

const ADD_ACCOUNT = gql`
    mutation AddAccount($name: String!, $desc: String!, $balance: Float!) {
        addAccount(name: $name, desc: $desc, balance: $balance) {
            balance
            desc
            id
            name
        }
    }
`;

const AddAccountModal = () => {
    const [input, setInput] = useState<InputType>({
        name: "",
        desc: "",
        balance: 0,
    });

    const { loading, error, data } = useQuery(GET_ALL_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 999,
        },
    });

    const [addAccount, { data: mData, loading: mLoading, error: mError }] =
        useMutation(ADD_ACCOUNT, {
            update(
                cache,
                { data: { addAccount } }: { data: { addAccount: BankAccount } }
            ) {
                cache.modify({
                    fields: {
                        getAllAccounts(existingAccounts = [], { readField }) {
                            const newAccountsRef = cache.writeFragment({
                                data: addAccount,
                                fragment: gql`
                                    fragment AddUpdatedAccounts on Account {
                                        id
                                        balance
                                        name
                                        desc
                                    }
                                `,
                            });

                            return [...existingAccounts, newAccountsRef];
                        },
                    },
                });
            },
        });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await addAccount({
            variables: {
                name: input.name,
                desc: input.desc,
                balance: input.balance,
            },
        });

        console.log("Account Added!");
    };

    return (
        <>
            <div
                className="modal fade action-sheet"
                id="addCardActionSheet"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add an Account</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="cardnumber1"
                                            >
                                                Account Name
                                            </label>
                                            <input
                                                type="text"
                                                id="cardnumber1"
                                                className="form-control"
                                                placeholder="Eg. Savings, Salary"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        name: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="cardnumber1"
                                            >
                                                Account Description
                                            </label>
                                            <input
                                                type="text"
                                                id="cardnumber1"
                                                className="form-control"
                                                placeholder="Eg. My savings"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        desc: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="cardnumber1"
                                            >
                                                Starting balance
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                placeholder={`100`}
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        balance: parseFloat(
                                                            e.target.value
                                                        ),
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="col-6">
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label className="label">
                                                        Expiry Date
                                                    </label>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <select
                                                                className="form-control custom-select"
                                                                id="exp-month"
                                                            >
                                                                <option value="01">
                                                                    01
                                                                </option>
                                                                <option value="02">
                                                                    02
                                                                </option>
                                                                <option value="03">
                                                                    03
                                                                </option>
                                                                <option value="04">
                                                                    04
                                                                </option>
                                                                <option value="05">
                                                                    05
                                                                </option>
                                                                <option value="06">
                                                                    06
                                                                </option>
                                                                <option value="07">
                                                                    07
                                                                </option>
                                                                <option value="08">
                                                                    08
                                                                </option>
                                                                <option value="09">
                                                                    09
                                                                </option>
                                                                <option value="10">
                                                                    10
                                                                </option>
                                                                <option value="11">
                                                                    11
                                                                </option>
                                                                <option value="12">
                                                                    12
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className="col-6">
                                                            <select
                                                                className="form-control custom-select"
                                                                id="exp-year"
                                                            >
                                                                <option value="2020">
                                                                    2020
                                                                </option>
                                                                <option value="2021">
                                                                    2021
                                                                </option>
                                                                <option value="2022">
                                                                    2022
                                                                </option>
                                                                <option value="2023">
                                                                    2023
                                                                </option>
                                                                <option value="2024">
                                                                    2024
                                                                </option>
                                                                <option value="2025">
                                                                    2025
                                                                </option>
                                                                <option value="2026">
                                                                    2026
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="cardcvv"
                                                    >
                                                        CVV
                                                        <a
                                                            href="#"
                                                            className="ms-05"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="3-4 digit number back of your card"
                                                        >
                                                            What is this?
                                                        </a>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="cardcvv"
                                                        className="form-control"
                                                        placeholder="Enter 3 digit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="form-group basic mt-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                            onSubmit={handleSubmit}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrimaryNotification
                showNotif={mLoading}
                title="Adding account..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default AddAccountModal;
