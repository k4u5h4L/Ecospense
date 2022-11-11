const MyBills = () => {
    return (
        <>
            <div className="section full mt-4">
                <div className="section-heading padding">
                    <h2 className="title">Monthly Bills</h2>
                    <a href="app-bills.html" className="link">
                        View All
                    </a>
                </div>

                <div className="carousel-multiple splide">
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide">
                                <div className="bill-box">
                                    <div className="img-wrapper">
                                        <img
                                            src="assets/img/sample/brand/1.jpg"
                                            alt="img"
                                            className="image-block imaged w48"
                                        />
                                    </div>
                                    <div className="price">$ 14</div>
                                    <p>Prime Monthly Subscription</p>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block btn-sm"
                                    >
                                        PAY NOW
                                    </a>
                                </div>
                            </li>

                            <li className="splide__slide">
                                <div className="bill-box">
                                    <div className="img-wrapper">
                                        <img
                                            src="assets/img/sample/brand/2.jpg"
                                            alt="img"
                                            className="image-block imaged w48"
                                        />
                                    </div>
                                    <div className="price">$ 9</div>
                                    <p>Music Monthly Subscription</p>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block btn-sm"
                                    >
                                        PAY NOW
                                    </a>
                                </div>
                            </li>

                            <li className="splide__slide">
                                <div className="bill-box">
                                    <div className="img-wrapper">
                                        <div className="iconbox bg-danger">
                                            {/* <ion-icon
                                                name="medkit-outline"
                                            ></ion-icon> */}
                                        </div>
                                    </div>
                                    <div className="price">$ 299</div>
                                    <p>Monthly Health Insurance</p>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block btn-sm"
                                    >
                                        PAY NOW
                                    </a>
                                </div>
                            </li>

                            <li className="splide__slide">
                                <div className="bill-box">
                                    <div className="img-wrapper">
                                        <div className="iconbox">
                                            {/* <ion-icon
                                                name="card-outline"
                                            ></ion-icon> */}
                                        </div>
                                    </div>
                                    <div className="price">$ 962</div>
                                    <p>Credit Card Statement</p>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block btn-sm"
                                    >
                                        PAY NOW
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyBills;
