const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <div className="section mt-2 mb-2">
                    <div className="goals">
                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>Gaming Console</h4>
                                    <p>Gaming</p>
                                </div>
                                <div className="price">$ 499</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow={85}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    85%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>New House</h4>
                                    <p>Living</p>
                                </div>
                                <div className="price">$ 100,000</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "55%" }}
                                    aria-valuenow={55}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    55%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>Sport Car</h4>
                                    <p>Lifestyle</p>
                                </div>
                                <div className="price">$ 42,500</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "15%" }}
                                    aria-valuenow={15}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    15%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>Education</h4>
                                    <p>Lifestyle</p>
                                </div>
                                <div className="price">$ 25,200</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow={35}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    35%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>Computer</h4>
                                    <p>Lifestyle</p>
                                </div>
                                <div className="price">$ 1,500</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "60%" }}
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    60%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>World Tour</h4>
                                    <p>Travel</p>
                                </div>
                                <div className="price">$ 10,000</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "55%" }}
                                    aria-valuenow={55}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    55%
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="in">
                                <div>
                                    <h4>Birthday Gift</h4>
                                    <p>Gift</p>
                                </div>
                                <div className="price">$ 500</div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={90}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    90%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
