import { useRouter } from "next/router";
import { useCallback, useRef, useState } from "react";
import EmailMain from "./EmailMain";
import VerifyMain from "./VerifyMain";

const Main = () => {
    const [sendOtp, setSendOtp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [otp, setOtp] = useState<string>("");
    const router = useRouter();

    const onReady = useCallback(() => {
        router.replace(
            `/api/auth/callback/email?email=${encodeURIComponent(
                email
            )}&token=${otp}&callbackUrl=%2F`
        );
    }, [otp, email, router]);

    const handleSubmit = () => {
        onReady();
    };

    if (!sendOtp) {
        return (
            <EmailMain
                email={email}
                setEmail={setEmail}
                setSendOtp={setSendOtp}
            />
        );
    } else {
        return (
            <>
                <VerifyMain
                    otp={otp}
                    setOtp={setOtp}
                    handleSubmit={handleSubmit}
                />
            </>
        );
    }
};

export default Main;
