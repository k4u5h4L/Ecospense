import {
    CheckmarkDoneOutline,
    ClipboardOutline,
    LogoFacebook,
    LogoInstagram,
    LogoLinkedin,
    LogoTwitter,
} from "react-ionicons";
import Toast from "@/components/Toast/Toast";
import { useState } from "react";

const ShareBlogModal = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            setCopied(true);

            navigator.clipboard.writeText(window.location.href);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    };

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
                                        className="btn btn-list"
                                        data-bs-dismiss="modal"
                                        style={{ cursor: "pointer" }}
                                        onClick={handleCopyLink}
                                    >
                                        <span>
                                            <ClipboardOutline /> Copy Link
                                        </span>
                                    </a>
                                </li>
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Toast
                icon={() => <CheckmarkDoneOutline color={"white"} />}
                text="Copied link to clipboard"
                showOK={false}
                show={copied}
            />
        </>
    );
};

export default ShareBlogModal;
