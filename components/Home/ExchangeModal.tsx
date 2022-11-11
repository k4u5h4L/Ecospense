const ExchangeModal = () => {
    return (
        <>
            <div
                className="modal fade action-sheet"
                id="exchangeActionSheet"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Exchange Money</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="currency1"
                                                    >
                                                        From
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="currency1"
                                                    >
                                                        <option value="1">
                                                            EUR
                                                        </option>
                                                        <option value="2">
                                                            USD
                                                        </option>
                                                        <option value="3">
                                                            AUD
                                                        </option>
                                                        <option value="4">
                                                            CAD
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="currency2"
                                                    >
                                                        To
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="currency2"
                                                    >
                                                        <option value="1">
                                                            USD
                                                        </option>
                                                        <option value="1">
                                                            EUR
                                                        </option>
                                                        <option value="2">
                                                            AUD
                                                        </option>
                                                        <option value="3">
                                                            CAD
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <label className="label">
                                            Enter Amount
                                        </label>
                                        <div className="input-group mb-2">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon2"
                                            >
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter an amount"
                                                value="100"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                        >
                                            Exchange
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

export default ExchangeModal;
