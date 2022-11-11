const SavingGoals = () => {
    return (
        <>
            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Saving Goals</h2>
                    <a href="app-savings.html" className="link">
                        View All
                    </a>
                </div>
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
                </div>
            </div>
        </>
    );
};

export default SavingGoals;
