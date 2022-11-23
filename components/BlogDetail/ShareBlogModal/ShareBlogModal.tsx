import {
    LogoFacebook,
    LogoInstagram,
    LogoLinkedin,
    LogoTwitter,
} from "react-ionicons";

const ShareBlogModal = () => {
    return (
        <>
            <div
                className="modal fade action-sheet inset"
                id="actionSheetShare"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Share with</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="action-button-list">
                                <li>
                                    <a
                                        href="#"
                                        className="btn btn-list"
                                        data-bs-dismiss="modal"
                                    >
                                        <span>
                                            <LogoFacebook />
                                            Facebook
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="btn btn-list"
                                        data-bs-dismiss="modal"
                                    >
                                        <span>
                                            <LogoTwitter />
                                            Twitter
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="btn btn-list"
                                        data-bs-dismiss="modal"
                                    >
                                        <span>
                                            <LogoInstagram />
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="btn btn-list"
                                        data-bs-dismiss="modal"
                                    >
                                        <span>
                                            <LogoLinkedin />
                                            Linkedin
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShareBlogModal;
