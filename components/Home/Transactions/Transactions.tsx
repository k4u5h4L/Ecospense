import Link from "next/link";

const Transactions = () => {
    return (
        <>
            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Transactions</h2>
                    <Link scroll={false} href="/transactions" className="link">
                        View All
                    </Link>
                </div>
                <div className="transactions">
                    <a href="app-transaction-detail.html" className="item">
                        <div className="detail">
                            <img
                                src="assets/img/sample/brand/1.jpg"
                                alt="img"
                                className="image-block imaged w48"
                            />
                            <div>
                                <strong>Amazon</strong>
                                <p>Shopping</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price text-danger">- $ 150</div>
                        </div>
                    </a>

                    <a href="app-transaction-detail.html" className="item">
                        <div className="detail">
                            <img
                                src="assets/img/sample/brand/2.jpg"
                                alt="img"
                                className="image-block imaged w48"
                            />
                            <div>
                                <strong>Apple</strong>
                                <p>Appstore Purchase</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price text-danger">- $ 29</div>
                        </div>
                    </a>

                    <a href="app-transaction-detail.html" className="item">
                        <div className="detail">
                            <img
                                src="assets/img/sample/avatar/avatar3.jpg"
                                alt="img"
                                className="image-block imaged w48"
                            />
                            <div>
                                <strong>Alex Ljung</strong>
                                <p>Transfer</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">+ $ 1,000</div>
                        </div>
                    </a>

                    <a href="app-transaction-detail.html" className="item">
                        <div className="detail">
                            <img
                                src="assets/img/sample/avatar/avatar4.jpg"
                                alt="img"
                                className="image-block imaged w48"
                            />
                            <div>
                                <strong>Beatriz Brito</strong>
                                <p>Transfer</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price text-danger">- $ 186</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Transactions;
