import {
    ArrowDownOutline,
    ArrowForwardOutline,
    ChatbubbleOutline,
    KeyOutline,
} from "react-ionicons";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <div className="section full">
                    <ul className="listview image-listview flush">
                        <li className="active">
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-primary">
                                    <ArrowDownOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Payment Received</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            John sent you <b>$ 50</b>
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                    <span className="badge badge-primary badge-empty"></span>
                                </div>
                            </a>
                        </li>
                        <li className="active">
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-success">
                                    <ArrowForwardOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Money has been sent</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            The money you sent to John was
                                            successfully sent.
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                    <span className="badge badge-primary">
                                        3
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-danger">
                                    <KeyOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Password changed</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            Your password has been changed
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-warning">
                                    <ChatbubbleOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>New Messages</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            You have new messages from John
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-primary">
                                    <ArrowDownOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Payment Received</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            John sent you <b>$ 50</b>
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-success">
                                    <ArrowForwardOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Money has been sent</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            The money you sent to John was
                                            successfully sent.
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-danger">
                                    <KeyOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>Password changed</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            Your password has been changed
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="app-notification-detail.html"
                                className="item"
                            >
                                <div className="icon-box bg-warning">
                                    <ChatbubbleOutline color={"white"} />
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05">
                                            <strong>New Messages</strong>
                                        </div>
                                        <div className="text-small mb-05">
                                            You have new messages from John
                                        </div>
                                        <div className="text-xsmall">
                                            5/3/2020 10:30 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;
