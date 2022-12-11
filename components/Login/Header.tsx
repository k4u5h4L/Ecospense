import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import { useRouter } from "next/router";
import { ChevronBackOutline } from "react-ionicons";

const LoginHeader = () => {
    const router = useRouter();
    return (
        <>
            <div className="appHeader no-border transparent position-absolute">
                <div className="left">
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => router.back()}
                        className="headerButton goBack"
                    >
                        <ChevronBackOutline color={PRIMARY_COLOUR} />
                    </a>
                </div>
                <div className="pageTitle"></div>
                <div className="right"></div>
            </div>
        </>
    );
};

export default LoginHeader;
