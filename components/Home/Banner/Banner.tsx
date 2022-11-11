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
                                {/* <ion-icon name="add-outline"></ion-icon> */}
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
                                    {/* <ion-icon
                                        name="arrow-down-outline"
                                    ></ion-icon> */}
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
                                    {/* <ion-icon
                                        name="arrow-forward-outline"
                                    ></ion-icon> */}
                                </div>
                                <strong>Send</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="app-cards.html">
                                <div className="icon-wrapper bg-success">
                                    {/* <ion-icon name="card-outline"></ion-icon> */}
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
                                    {/* <ion-icon name="swap-vertical"></ion-icon> */}
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
