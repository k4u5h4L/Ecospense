import { Currency } from "@/constants/currencyEnum";
import { SwapVerticalOutline } from "react-ionicons";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <form>
                    <div className="section mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic p-0">
                                    <div className="exchange-heading">
                                        <label
                                            className="group-label"
                                            htmlFor="fromAmount"
                                        >
                                            From
                                        </label>
                                        <div className="exchange-wallet-info">
                                            Balance :{" "}
                                            <strong> 5.506,12 USD</strong>
                                        </div>
                                    </div>
                                    <div className="exchange-group">
                                        <div className="input-col">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg pe-0 border-0"
                                                id="fromAmount"
                                                placeholder="0"
                                                maxLength={10}
                                            />
                                        </div>
                                        <div className="select-col">
                                            <select className="form-select form-select-lg currency">
                                                {/* {Currency} */}
                                                <option value="USD" selected>
                                                    USD
                                                </option>
                                                <option value="BTC">BTC</option>
                                                <option value="ETH">ETH</option>
                                                <option value="ADA">ADA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="exchange-line">
                            <div className="exchange-icon">
                                <SwapVerticalOutline color={"white"} />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic p-0">
                                    <div className="exchange-heading">
                                        <label
                                            className="group-label"
                                            htmlFor="toAmount"
                                        >
                                            To
                                        </label>
                                        <div className="exchange-wallet-info">
                                            Balance :{" "}
                                            <strong> 0,504 BTC</strong>
                                        </div>
                                    </div>
                                    <div className="exchange-group">
                                        <div className="input-col">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg pe-0 border-0"
                                                id="toAmount"
                                                placeholder="0"
                                                maxLength={10}
                                            />
                                        </div>
                                        <div className="select-col">
                                            <select className="form-select form-select-lg currency">
                                                <option value="USD">USD</option>
                                                <option value="BTC" selected>
                                                    BTC
                                                </option>
                                                <option value="ETH">ETH</option>
                                                <option value="ADA">ADA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section mt-2">
                        <div className="row fontsize-caption">
                            <div className="col">
                                <b>1 BTC</b> = 39.019,09 USD
                            </div>
                            <div className="col text-end">
                                Commission rate : <b>2%</b>
                            </div>
                        </div>
                    </div>

                    <div className="form-button-group transparent">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Main;
