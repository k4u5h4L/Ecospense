import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { GET_CURRENCY } from "@/constants/gqlQueries";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Goal } from "@prisma/client";
import { useState } from "react";
import { CloseCircle } from "react-ionicons";

const ADD_GOAL = gql`
    mutation AddGoal($name: String!, $totalAmount: Float!, $desc: String!) {
        addGoal(name: $name, totalAmount: $totalAmount, desc: $desc) {
            collectedAmount
            desc
            id
            name
            totalAmount
        }
    }
`;

type InputType = {
    name: string;
    desc: string;
    totalAmount: number;
};

const initialInput: InputType = {
    name: "",
    desc: "",
    totalAmount: 0,
};

const AddGoalModal = () => {
    const { loading, error, data } = useQuery(GET_CURRENCY);
    const [input, setInput] = useState<InputType>(initialInput);

    const [addGoal, { data: mData, loading: mLoading, error: mError }] =
        useMutation(ADD_GOAL, {
            update(cache, { data: { addGoal } }: { data: { addGoal: Goal } }) {
                cache.modify({
                    fields: {
                        getAllGoals(existingGoals = [], { readField }) {
                            const newAccountsRef = cache.writeFragment({
                                data: addGoal,
                                fragment: gql`
                                    fragment AddUpdatedGoals on Goal {
                                        collectedAmount
                                        desc
                                        id
                                        name
                                        totalAmount
                                    }
                                `,
                            });

                            return [...existingGoals, newAccountsRef];
                        },
                    },
                });
            },
        });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await addGoal({
            variables: {
                name: input.name,
                totalAmount: input.totalAmount,
                desc: input.desc,
            },
        });

        console.log("Added goal successfully");
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
                    {loading ? (
                        <ComponentLoaderPrimary />
                    ) : (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Saving Goal</h5>
                            </div>
                            <div className="modal-body">
                                <div className="action-sheet-content">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group basic">
                                            <div className="input-wrapper">
                                                <label className="label">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Eg. Laptop"
                                                    onChange={(e) =>
                                                        setInput({
                                                            ...input,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                                <i className="clear-input">
                                                    <CloseCircle />
                                                </i>
                                            </div>
                                            <div className="input-info">
                                                Enter a name for the goal.
                                            </div>
                                        </div>

                                        <div className="form-group basic">
                                            <div className="input-wrapper">
                                                <label className="label">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Eg. Laptop for college"
                                                    onChange={(e) =>
                                                        setInput({
                                                            ...input,
                                                            desc: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                                <i className="clear-input">
                                                    <CloseCircle />
                                                </i>
                                            </div>
                                            <div className="input-info">
                                                Enter a description for the
                                                goal.
                                            </div>
                                        </div>

                                        <div className="form-group basic">
                                            <label className="label">
                                                Enter Total Amount
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
                                                    placeholder={`1000`}
                                                    onChange={(e) =>
                                                        setInput({
                                                            ...input,
                                                            totalAmount: Number(
                                                                e.target.value
                                                            ),
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="input-info">
                                                Enter the total amount of the
                                                goal.
                                            </div>
                                        </div>

                                        <div className="form-group basic">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block btn-lg"
                                                data-bs-dismiss="modal"
                                                onSubmit={handleSubmit}
                                            >
                                                Add Goal
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <PrimaryNotification
                showNotif={mLoading}
                title="Adding goal..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default AddGoalModal;
