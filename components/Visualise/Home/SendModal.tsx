import { CloseCircle } from "react-ionicons";

const SendModal = () => {
    return (
        <>
            <div
                className="modal fade action-sheet"
                id="sendActionSheet"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Send</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic mb-2">
                                        <div className="input-wrapper">
                                            <label
                                                className="label"
                                                htmlFor="walletaddress"
                                            >
                                                Wallet Address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="walletaddress"
                                                placeholder="Enter a wallet address"
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
                                                htmlFor="sendAmount"
                                            >
                                                Enter Amount
                                            </label>
                                            <div className="exchange-group small">
                                                <div className="input-col">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg pe-0"
                                                        id="sendAmount"
                                                        placeholder="0"
                                                        value="380"
                                                        maxLength={14}
                                                    />
                                                </div>
                                                <div className="select-col">
                                                    <select className="form-select form-select-lg currency">
                                                        <option
                                                            value="BTC"
                                                            selected
                                                        >
                                                            BTC
                                                        </option>
                                                        <option value="ETH">
                                                            ETH
                                                        </option>
                                                        <option value="ADA">
                                                            ADA
                                                        </option>
                                                        <option value="USDT">
                                                            USDT
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
                                            Send
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

export default SendModal;
