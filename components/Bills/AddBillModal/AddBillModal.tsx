import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { getIcon } from "@/utils/getNewAvatar";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Bill, BillStatus } from "@prisma/client";
import { useState } from "react";

const ADD_BILL = gql`
    mutation AddBill(
        $status: String!
        $amount: Float!
        $desc: String!
        $icon: String!
        $name: String!
    ) {
        addBill(
            status: $status
            amount: $amount
            desc: $desc
            icon: $icon
            name: $name
        ) {
            amount
            desc
            icon
            id
            name
            status
            history
        }
    }
`;

const GET_CURRENCY = gql`
    query GetCurrency {
        getCurrency {
            currencyName
            currencySymbol
            id
        }
    }
`;

type InputType = {
    status: string;
    amount: number;
    desc: string;
    name: string;
};

const initialInput: InputType = {
    status: BillStatus.ACTIVE.toString(),
    amount: 0,
    desc: "",
    name: "",
};

const AddBillModal = () => {
    const [input, setInput] = useState<InputType>(initialInput);

    const { loading, error, data } = useQuery(GET_CURRENCY);

    const [addBill, { data: mData, loading: mLoading, error: mError }] =
        useMutation(ADD_BILL, {
            update(cache, { data: { addBill } }: { data: { addBill: Bill } }) {
                cache.modify({
                    fields: {
                        getAllBills(existingBills = [], { readField }) {
                            const newBillRef = cache.writeFragment({
                                data: addBill,
                                fragment: gql`
                                    fragment AddUpdatedBill on Bill {
                                        amount
                                        desc
                                        icon
                                        id
                                        name
                                        status
                                        history
                                    }
                                `,
                            });

                            return [...existingBills, newBillRef];
                        },
                    },
                });
            },
        });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await addBill({
            variables: {
                status: input.status,
                amount: input.amount,
                desc: input.desc,
                icon: getIcon(input.name),
                name: input.name,
            },
        });

        console.log("Successfully added bill.");

        setInput(initialInput);
    };

    return (
        <>
            <div
                className="modal fade action-sheet"
                id="actionSheetForm"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {loading ? (
                            <ComponentLoaderPrimary />
                        ) : (
                            <>
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Add a new monthly bill
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="action-sheet-content">
                                        <div className="iconbox">
                                            <img
                                                src={getIcon(input.name)}
                                                alt="image"
                                                className="imaged w64 rounded"
                                            />
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group basic">
                                                <label className="label">
                                                    Bill Name
                                                </label>
                                                <div className="input-group">
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addon1"
                                                    ></span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Eg. Netflix"
                                                        required
                                                        onChange={(e) => {
                                                            setInput({
                                                                ...input,
                                                                name: e.target
                                                                    .value,
                                                            });
                                                        }}
                                                        value={input.name}
                                                    />
                                                </div>
                                                <div className="input-info">
                                                    Enter the name of the bill.
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <label className="label">
                                                    Bill Description
                                                </label>
                                                <div className="input-group">
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addon1"
                                                    ></span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="Eg. For montly Netflix streaming"
                                                        onChange={(e) =>
                                                            setInput({
                                                                ...input,
                                                                desc: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        value={input.desc}
                                                    />
                                                </div>
                                                <div className="input-info">
                                                    Enter the bill description.
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <label className="label">
                                                    Bill Amount
                                                </label>
                                                <div className="input-group">
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
                                                        required
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
                                                <div className="input-info">
                                                    Enter the monthly amount of
                                                    the bill.
                                                </div>
                                            </div>

                                            <div className="form-group basic">
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
                            </>
                        )}
                    </div>
                </div>
            </div>

            <PrimaryNotification
                showNotif={mLoading}
                title="Adding bill..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default AddBillModal;
