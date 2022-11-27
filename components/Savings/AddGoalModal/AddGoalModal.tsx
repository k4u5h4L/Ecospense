import { CloseCircle } from "react-ionicons";

const AddGoalModal = () => {
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
                        <div className="modal-header">
                            <h5 className="modal-title">New Saving Goal</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="account1"
                                            >
                                                Saving Category
                                            </label>
                                            <select
                                                className="form-control custom-select"
                                                id="account1"
                                            >
                                                <option value="0">
                                                    Lifestyle
                                                </option>
                                                <option value="1">
                                                    Living
                                                </option>
                                                <option value="2">
                                                    Gaming
                                                </option>
                                                <option value="3">
                                                    Mortgage
                                                </option>
                                                <option value="4">
                                                    Travel
                                                </option>
                                                <option value="5">Gift</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label className="label">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter a title"
                                                onChange={() =>
                                                    console.log("changed")
                                                }
                                            />
                                            <i className="clear-input">
                                                <CloseCircle />
                                            </i>
                                        </div>
                                        <div className="input-info">
                                            Minimum $100
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
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter an amount"
                                                value="100"
                                                onChange={() =>
                                                    console.log("changed")
                                                }
                                            />
                                        </div>
                                        <div className="input-info">
                                            Minimum $50
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                        >
                                            Add Goal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddGoalModal;
