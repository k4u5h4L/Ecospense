import { CloseCircle } from "react-ionicons";

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
                            <h5 className="modal-title">Withdraw</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic mb-2">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="account3"
                                            >
                                                Select Account
                                            </label>
                                            <select
                                                className="form-control custom-select"
                                                id="account3"
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

                                    <div className="form-group basic mb-2">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="iban1"
                                            >
                                                IBAN
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="iban1"
                                                placeholder="Enter your IBAN"
                                            />
                                            <i className="clear-input">
                                                <CloseCircle />
                                            </i>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="withdrawAmount"
                                            >
                                                Enter Amount
                                            </label>
                                            <div className="exchange-group small">
                                                <div className="input-col">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg pe-0"
                                                        id="withdrawAmount"
                                                        placeholder="0"
                                                        maxLength={14}
                                                    />
                                                </div>
                                                <div className="select-col">
                                                    <select className="form-select form-select-lg currency">
                                                        <option
                                                            value="USD"
                                                            defaultChecked
                                                        >
                                                            USD
                                                        </option>
                                                        <option value="EUR">
                                                            EUR
                                                        </option>
                                                        <option value="AUD">
                                                            AUD
                                                        </option>
                                                        <option value="CAD">
                                                            CAD
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg btn-block"
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
