import { CloseCircle } from "react-ionicons";

type PropType = {
    showNotif: boolean;
    showHeader: boolean;
    headerTitle?: string;
    headerText?: string;
    notifStyle?: string;
    title: string;
    text: string;
};

const DangerNotification = ({
    showNotif,
    showHeader,
    headerTitle,
    headerText,
    title,
    text,
    notifStyle,
}: PropType) => {
    return (
        <>
            <div
                id="notification-13"
                className={`notification-box ${showNotif ? "show" : ""}`}
            >
                <div className={`notification-dialog ios-style bg-danger`}>
                    {showHeader ? (
                        <div className="notification-header">
                            <div className="in">
                                <img
                                    src="/assets/img/sample/avatar/avatar3.jpg"
                                    alt="image"
                                    className="imaged w24 rounded"
                                />
                                <strong>{headerTitle}</strong>
                            </div>
                            <div className="right">
                                <span>{headerText}</span>
                                <a
                                    style={{ cursor: "pointer" }}
                                    className="close-button"
                                >
                                    <CloseCircle />
                                </a>
                            </div>
                        </div>
                    ) : null}
                    <div className="notification-content">
                        <div className="in">
                            <h3 className="subtitle">{title}</h3>
                            <div className="text">{text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DangerNotification;
