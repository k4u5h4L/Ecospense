const WithdrawModal = () => {
    return (
        <>
            <div
                className="modal fade action-sheet"
                id="withdrawActionSheet"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Withdraw Money</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="account2d"
                                            >
                                                From
                                            </label>
                                            <select
                                                className="form-control custom-select"
                                                id="account2d"
                                            >
                                                <option value="0">
                                                    Savings (*** 5019)
                                                </option>
                                                <option value="1">
                                                    Investment (*** 6212)
                                                </option>
                                                <option value="2">
                                                    Mortgage (*** 5021)
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="text11d"
                                            >
                                                To
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="text11d"
                                                placeholder="Enter IBAN"
                                                onChange={() =>
                                                    console.log("changed")
                                                }
                                            />
                                            <i className="clear-input">
                                                {/* <ion-icon
                                                    name="close-circle"
                                                ></ion-icon> */}
                                            </i>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <label className="label">
                                            Enter Amount
                                        </label>
                                        <div className="input-group mb-2">
                                            <span
                                                className="input-group-text"
                                                id="basic-addonb1"
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
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                        >
                                            Withdraw
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

export default WithdrawModal;
