import { useRouter } from "next/router";

const GeneralError = () => {
    const router = useRouter();

    let errorMessage = `${router.query.error}`;

    return (
        <>
            <div className="appHeader no-border">
                <div className="pageTitle">Oops...</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div className="section">
                    <div className="splash-page mt-5 mb-5">
                        <h1>Uh oh... An error has occured</h1>
                        <h2 className="mb-2">Something went wrong!</h2>
                        <p>
                            {errorMessage
                                ? errorMessage
                                : "Something went wrong! Please try again later."}
                        </p>
                    </div>
                </div>

                <div className="fixed-bar">
                    <div className="row">
                        <div className="col-6">
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => router.back()}
                                className="btn btn-lg btn-outline-secondary btn-block goBack"
                            >
                                Go Back
                            </a>
                        </div>
                        <div className="col-6">
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => router.reload()}
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Try Again
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneralError;
