import { ChevronBackOutline } from "react-ionicons";
import { useRouter } from "next/router";

type PropTypes = {
    title: string;
    cta: any;
};

const InnerHeader = ({ title, cta }: PropTypes) => {
    const router = useRouter();

    const Cta = cta;

    return (
        <>
            <div className="appHeader">
                <div className="left">
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => router.back()}
                        className="headerButton goBack"
                    >
                        <ChevronBackOutline color={"#256l144"} />
                    </a>
                </div>
                <div className="pageTitle">{title}</div>
                <div className="right">
                    <Cta />
                </div>
            </div>
        </>
    );
};

export default InnerHeader;
