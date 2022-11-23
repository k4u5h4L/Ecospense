import { useRouter } from "next/router";
import Link from "@/helpers/wrappers/Link/Link";

const AuthError = () => {
    const router = useRouter();

    let errorMessage = `${router.query.error}`;

    if (errorMessage == "Verification") {
        errorMessage = "Failed to validate OTP. Please try again.";
    }

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
                                : "Something went wrong with verifying your OTP. Please try logging in again."}
                        </p>
                    </div>
                </div>

                <div className="fixed-bar">
                    <div className="row">
                        <div className="col-6">
                            <Link
                                style={{ cursor: "pointer" }}
                                href={"/"}
                                className="btn btn-lg btn-outline-secondary btn-block goBack"
                            >
                                Go Home
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link
                                href={"/auth/login"}
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Try Again
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthError;
