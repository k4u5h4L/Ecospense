import { TRENDING_UP_GREEN_COLOUR } from "@/constants/commonConstants";
import {
    TrendingUpOutline,
    ArrowUpOutline,
    ArrowDownOutline,
    ArrowForwardOutline,
    SwapVerticalOutline,
} from "react-ionicons";

const Banner = () => {
    return (
        <>
            <div className="section full gradientSection">
                <div className="in">
                    <h5 className="title mb-2">Current Balance</h5>
                    <h1 className="total">$ 2,562.50</h1>
                    <h4 className="caption">
                        <span className="iconbox text-success">
                            <TrendingUpOutline
                                color={TRENDING_UP_GREEN_COLOUR}
                            />
                        </span>
                        0.053205 BTC
                    </h4>
                    <div className="wallet-inline-button mt-5">
                        <a
                            href="#"
                            className="item"
                            data-bs-toggle="modal"
                            data-bs-target="#depositActionSheet"
                        >
                            <div className="iconbox">
                                <ArrowUpOutline color={"white"} />
                            </div>
                            <strong>Deposit</strong>
                        </a>
                        <a
                            href="#"
                            className="item"
                            data-bs-toggle="modal"
                            data-bs-target="#withdrawActionSheet"
                        >
                            <div className="iconbox">
                                <ArrowDownOutline color={"white"} />
                            </div>
                            <strong>Withdraw</strong>
                        </a>
                        <a
                            href="#"
                            className="item"
                            data-bs-toggle="modal"
                            data-bs-target="#sendActionSheet"
                        >
                            <div className="iconbox">
                                <ArrowForwardOutline color={"white"} />
                            </div>
                            <strong>Send</strong>
                        </a>
                        <a href="crypto-exchange.html" className="item">
                            <div className="iconbox">
                                <SwapVerticalOutline color={"white"} />
                            </div>
                            <strong>Exchange</strong>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
