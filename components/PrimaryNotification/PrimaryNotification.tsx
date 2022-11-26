import { CloseCircle } from "react-ionicons";

type PropType = {
    showNotif: boolean;
    showHeader: boolean;
};

const PrimaryNotification = ({ showNotif, showHeader }: PropType) => {
    return (
        <>
            <div
                id="notification-13"
                className={`notification-box ${showNotif ? "show" : ""}`}
            >
                <div className="notification-dialog ios-style bg-primary">
                    {showHeader ? (
                        <div className="notification-header">
                            <div className="in">
                                <img
                                    src="/assets/img/sample/avatar/avatar3.jpg"
                                    alt="image"
                                    className="imaged w24 rounded"
                                />
                                <strong>John Pacheco</strong>
                            </div>
                            <div className="right">
                                <span>5 mins ago</span>
                                <a href="#" className="close-button">
                                    <CloseCircle />
                                </a>
                            </div>
                        </div>
                    ) : null}
                    <div className="notification-content">
                        <div className="in">
                            <h3 className="subtitle">Loading...</h3>
                            <div className="text">Please wait</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrimaryNotification;
