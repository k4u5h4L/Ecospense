const Toast = ({ icon, text }) => {
    return (
        <>
            <div
                id="toast-example-1"
                className="toast-box toast-bottom bg-primary"
            >
                <div className="in">
                    {icon}
                    <div className="text">{text}</div>
                </div>
                <button
                    type="button"
                    className="btn btn-sm btn-text-light close-button"
                >
                    OK
                </button>
            </div>
        </>
    );
};

export default Toast;
