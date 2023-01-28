type PropType = {
    icon: any;
    text: string;
    showOK: boolean;
    showOkCta?: () => void | Promise<void>;
    show: boolean;
};

const Toast = ({ icon, text, showOK, show, showOkCta }: PropType) => {
    return (
        <>
            <div
                id="toast-example-1"
                className={`toast-box toast-bottom bg-primary ${
                    show ? "show" : ""
                }`}
            >
                <div className="in">
                    {icon}
                    <div className="text">{text}</div>
                </div>
                {showOK ? (
                    <button
                        type="button"
                        className="btn btn-sm btn-text-light close-button"
                        onClick={showOkCta}
                    >
                        OK
                    </button>
                ) : null}
            </div>
        </>
    );
};

export default Toast;
