import { useState } from "react";

const UpdateGoal = ({
    handleCancel,
    handleSubmit,
    handleActionChange,
    input,
    setInput,
}) => {
    return (
        <>
            <div
                className="modal fade dialogbox"
                id="UpdateGoalDialog"
                data-bs-backdrop="static"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Goal</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body text-start mb-2">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label
                                            className="label"
                                            htmlFor="account1"
                                        >
                                            Action
                                        </label>
                                        <select
                                            className="form-control custom-select"
                                            id="account1"
                                        >
                                            <option
                                                value="+"
                                                defaultChecked
                                                onClick={() => {
                                                    handleActionChange("+");
                                                }}
                                            >
                                                Add (+)
                                            </option>
                                            <option
                                                value="-"
                                                onClick={() => {
                                                    handleActionChange("-");
                                                }}
                                            >
                                                Subtract (-)
                                            </option>
                                        </select>
                                    </div>
                                    <div className="input-info">
                                        Select an action
                                    </div>
                                </div>

                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label
                                            className="label"
                                            htmlFor="text1"
                                        >
                                            Enter Amount
                                        </label>
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
                                                        e.target.value
                                                    ),
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="btn-inline">
                                    <button
                                        type="button"
                                        className="btn btn-text-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={handleCancel}
                                    >
                                        CANCEL
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-text-primary"
                                        data-bs-dismiss="modal"
                                        onSubmit={handleSubmit}
                                    >
                                        UPDATE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateGoal;
