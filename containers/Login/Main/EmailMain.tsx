import { CloseCircle } from "react-ionicons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const EmailMain = ({ email, setEmail, setSendOtp }) => {
    const { data: session, status } = useSession();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(`Logging in email: ${email}`);

        signIn("email", {
            email: email,
            callbackUrl: `/verify`,
            redirect: false,
        });

        setSendOtp(true);
    };

    if (status == "authenticated") {
        return (
            <>
                <div className="section mt-2 text-center">
                    <h1>You seem to be logged in already!</h1>
                    <h4>
                        Not <b>{session.user.email}?</b> Then logout and login
                        again!
                    </h4>
                </div>

                <div className="form-button-group transparent">
                    <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="section mt-2 text-center">
                <h1>Log in</h1>
                <h4>Fill in your email address to sign in!</h4>
            </div>
            <div className="section mb-5 p-2">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="card">
                        <div className="card-body pb-1">
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="email1">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email1"
                                        placeholder="Your Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required={true}
                                    />
                                    <i className="clear-input">
                                        <CloseCircle />
                                    </i>
                                </div>
                            </div>

                            {/* <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="password1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password1"
                                        autoComplete="off"
                                        placeholder="Your password"
                                    />
                                    <i className="clear-input">
                                        <CloseCircle />
                                    </i>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className="form-links mt-2">
                        <div>
                            <a href="app-register.html">Register Now</a>
                        </div>
                        <div>
                            <a
                                href="app-forgot-password.html"
                                className="text-muted"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div> */}

                    <div className="form-button-group transparent">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            Get OTP
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmailMain;
