const AddBillModal = () => {
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
                            <h5 className="modal-title">Add New Bill</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <label className="label">Bill ID</label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                            >
                                                #
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter an amount"
                                                value="41512"
                                                onChange={() =>
                                                    console.log("changed")
                                                }
                                            />
                                        </div>
                                        <div className="input-info">
                                            Enter the ID of the bill you want to
                                            add.
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
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
        </>
    );
};

export default AddBillModal;
