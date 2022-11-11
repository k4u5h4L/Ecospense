const Metadata = () => {
    return (
        <>
            <div className="section">
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Income</div>
                            <div className="value text-success">$ 552.95</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Expenses</div>
                            <div className="value text-danger">$ 86.45</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Total Bills</div>
                            <div className="value">$ 53.25</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Savings</div>
                            <div className="value">$ 120.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Metadata;
