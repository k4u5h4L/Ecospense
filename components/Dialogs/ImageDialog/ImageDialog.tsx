type PropType = {
    show: boolean;
    image: string;
    text: string;
    body?: string;
    cancelCta: any;
    proceedCta: any;
};

const ImageDialog = ({
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
                className={`modal fade dialogbox ${show ? "show" : ""}`}
                id="DialogImaged"
                data-bs-backdrop="static"
                tabIndex={-1}
                role="dialog"
                style={{ display: show ? "block" : "none" }}
                aria-modal={true}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="pt-3 text-center">
                            <img
                                src={image}
                                alt="image"
                                className="imaged w48 rounded mb-1"
                            />
                        </div>
                        <div className="modal-header pt-2">
                            <h5 className="modal-title">{text}</h5>
                        </div>
                        {body ? <div className="modal-body">{body}</div> : null}
                        <div className="modal-footer">
                            <div className="btn-inline">
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={cancelCta}
                                    className="btn btn-text-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    CANCEL
                                </a>
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={proceedCta}
                                    className="btn btn-text-primary"
                                    data-bs-dismiss="modal"
                                >
                                    SEND
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageDialog;
