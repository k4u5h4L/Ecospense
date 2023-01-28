type PropType = {
    icon: any;
    text: string;
    showOK: boolean;
    showOkCta?: () => void | Promise<void>;
    show: boolean;
    id?: number;
};

const Toast = ({ icon, text, showOK, show, showOkCta, id }: PropType) => {
    return (
        <>
            <div
                id={`toast-example-${id ? id : 1}`}
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
