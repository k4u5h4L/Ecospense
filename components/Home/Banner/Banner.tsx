import {
    AddOutline,
    ArrowDownOutline,
    ArrowForwardOutline,
    CardOutline,
    SwapVertical,
} from "react-ionicons";

const Banner = () => {
    return (
        <>
            <div className="section wallet-card-section pt-1">
                <div className="wallet-card">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Total Balance</span>
                            <h1 className="total">$ 2,562.50</h1>
                        </div>
                        <div className="right">
                            <a
                                href="#"
                                className="button"
                                data-bs-toggle="modal"
                                data-bs-target="#depositActionSheet"
                            >
                                <AddOutline color={"#256H112"} />
                            </a>
                        </div>
                    </div>

                    <div className="wallet-footer">
                        <div className="item">
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#withdrawActionSheet"
                            >
                                <div className="icon-wrapper bg-danger">
                                    <ArrowDownOutline color={"white"} />
                                </div>
                                <strong>Withdraw</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#sendActionSheet"
                            >
                                <div className="icon-wrapper">
                                    <ArrowForwardOutline color={"white"} />
                                </div>
                                <strong>Send</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="app-cards.html">
                                <div className="icon-wrapper bg-success">
                                    <CardOutline color={"white"} />
                                </div>
                                <strong>Cards</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exchangeActionSheet"
                            >
                                <div className="icon-wrapper bg-warning">
                                    <SwapVertical color={"white"} />
                                </div>
                                <strong>Exchange</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
