import { ChevronBackOutline } from "react-ionicons";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
    const router = useRouter();

    return (
        <>
            <div className="appHeader no-border">
                <div className="left">
                    <a
                        style={{ cursor: "pointer" }}
                        className="headerButton goBack"
                        onClick={() => router.back()}
                    >
                        <ChevronBackOutline color={"#256l144"} />
                    </a>
                </div>
                <div className="pageTitle">Error 404</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div className="section">
                    <div className="splash-page mt-5 mb-5">
                        <h1>Uh oh....</h1>
                        <h2 className="mb-2">Page not found!</h2>
                        <p>
                            The page you requested was not found. Please check
                            once again.
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
                            <Link
                                href={"/"}
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
