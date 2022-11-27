const StatusTabs = () => {
    return (
        <>
            <div className="extraHeader pe-0 ps-0">
                <ul className="nav nav-tabs lined" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#waiting"
                            role="tab"
                        >
                            Waiting
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#paid"
                            role="tab"
                        >
                            Paid
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default StatusTabs;
