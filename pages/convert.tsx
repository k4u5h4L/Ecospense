import InnerHeader from "@/components/InnerHeader/InnerHeader";
import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import Main from "@/containers/Convert/Main/Main";
import { Refresh } from "react-ionicons";

const Convert = () => {
    return (
        <>
            <InnerHeader title="Convert Currency" cta={Cta} />
            <Main />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a
                href="#"
                className="headerButton"
                onClick={() => console.log("refreshed!")}
            >
                <Refresh color={PRIMARY_COLOUR} />
            </a>
        </>
    );
};

export default Convert;
