import { ArrowForwardOutline } from "react-ionicons";

const Main = () => {
    return (
        <>
            <div id="appCapsule" className="full-height">
                <div className="section mt-2 mb-2">
                    <div className="listed-detail mt-3">
                        <div className="icon-wrapper">
                            <div className="iconbox">
                                <ArrowForwardOutline color={"white"} />
                            </div>
                        </div>
                        <h3 className="text-center mt-2">Payment Sent</h3>
                    </div>

                    <ul className="listview flush transparent simple-listview no-space mt-3">
                        <li>
                            <strong>Status</strong>
                            <span className="text-success">Success</span>
                        </li>
                        <li>
                            <strong>To</strong>
                            <span>Jordi Santiago</span>
                        </li>
                        <li>
                            <strong>Bank Name</strong>
                            <span>Envato Bank</span>
                        </li>
                        <li>
                            <strong>Transaction Category</strong>
                            <span>Shopping</span>
                        </li>
                        <li>
                            <strong>Receipt</strong>
                            <span>Yes</span>
                        </li>
                        <li>
                            <strong>Date</strong>
                            <span>Sep 25, 2020 10:45 AM</span>
                        </li>
                        <li>
                            <strong>Amount</strong>
                            <h3 className="m-0">$ 24</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;
