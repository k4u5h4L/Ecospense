import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import { ChevronBackOutline } from "react-ionicons";

const LoginHeader = () => {
    return (
        <>
            <div className="appHeader no-border transparent position-absolute">
                <div className="left">
                    <a href="#" className="headerButton goBack">
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
