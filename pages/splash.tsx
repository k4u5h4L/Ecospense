import Link from "@/helpers/wrappers/Link/Link";

const Splash = () => {
    return (
        <>
            <div className="appHeader no-border">
                <div className="left"></div>
                <div className="pageTitle">Ecospense</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div className="section">
                    <div className="splash-page mt-5 mb-5">
                        <div className="mb-3">
                            <img
                                src="/assets/img/sample/photo/vector1.png"
                                alt="image"
                                className="imaged w-100 square"
                            />
                        </div>
                        <h2 className="mb-2">Welcome to Ecospense!</h2>
                        <p>
                            Now save money like never before. Log in to get
                            started!
                        </p>
                    </div>
                </div>

                <div className="fixed-bar">
                    <div className="row">
                        <div className="col-6">
                            <Link
                                href="/about"
                                className="btn btn-lg btn-outline-secondary btn-block"
                            >
                                About Us
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link
                                href="/auth/login"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Splash;
