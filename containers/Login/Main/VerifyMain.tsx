import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { TWO_MINS_IN_MS } from "@/constants/commonConstants";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

const VerifyMain = ({ otp, setOtp, handleSubmit }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <div id="appCapsule">
                <div className="section mt-2 text-center">
                    <h1>Enter OTP Code</h1>
                    <h4>Enter the 4 digit OTP email verification code</h4>
                </div>
                <div className="section mb-5 p-2">
                    <form
                        onSubmit={() => {
                            setLoading(true);
                            handleSubmit();
                            setLoading(false);
                        }}
                    >
                        <div className="form-group basic">
                            <input
                                type="text"
                                className="form-control verification-input"
                                id="smscode"
                                placeholder="••••"
                                pattern="[0-9]*"
                                autoFocus
                                inputMode="numeric"
                                maxLength={4}
                                onChange={(e) => {
                                    setOtp(e.target.value);
                                }}
                            />
                        </div>
                        <div className="section mt-2 text-center">
                            <h4>Please enter within:</h4>
                            <Countdown
                                date={Date.now() + TWO_MINS_IN_MS}
                                renderer={(props) => (
                                    <h2>
                                        {zeroPad(props.minutes)}:
                                        {zeroPad(props.seconds)}
                                    </h2>
                                )}
                                onComplete={() => {
                                    router.replace(
                                        `/auth/error?error=${encodeURIComponent(
                                            "You failed to enter the OTP in the given time, hence the session expired. Don't worry, you can login again!"
                                        )}`
                                    );
                                }}
                            />
                        </div>

                        <div className="form-button-group transparent">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-lg"
                                onSubmit={() => {
                                    setLoading(true);
                                    handleSubmit();
                                    setLoading(false);
                                }}
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <PrimaryNotification
                title="Loading..."
                text="Please wait"
                showNotif={loading}
                showHeader={false}
            />
        </>
    );
};

export default VerifyMain;
