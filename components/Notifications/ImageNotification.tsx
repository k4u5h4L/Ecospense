type PropType = {
    show: boolean;
    image: string;
    text: string;
    body: string;
    cancelCta: any;
    proceedCta: any;
};

const ImageNotification = ({
    show,
    image,
    text,
    body,
    cancelCta,
    proceedCta,
}: PropType) => {
    return (
        <>
            <div
                id="notification-9"
                className={`notification-box tap-to-close ${
                    show ? "show" : ""
                }`}
            >
                <div className="notification-dialog ios-style">
                    {/* <div className="notification-header">
                        <div className="in">
                            <img
                                src="assets/img/sample/avatar/avatar3.jpg"
                                alt="image"
                                className="imaged w24 rounded"
                            />
                            <strong>John Pacheco</strong>
                        </div>
                        <div className="right">
                            <span>5 mins ago</span>
                        </div>
                    </div> */}
                    <div className="notification-content">
                        <div className="in">
                            <h3 className="subtitle">{text}</h3>
                            {body ? <div className="text">{body}</div> : null}
                        </div>
                        <img
                            src={image}
                            alt="new profile pic"
                            className="imaged w64"
                        />
                    </div>
                    <div className="notification-footer">
                        <a
                            style={{ cursor: "pointer" }}
                            className="notification-button"
                            onClick={cancelCta}
                        >
                            No, go back
                        </a>
                        <a
                            style={{ cursor: "pointer" }}
                            className="notification-button"
                            onClick={proceedCta}
                        >
                            Sure, go ahead
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageNotification;
