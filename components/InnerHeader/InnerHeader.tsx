import { ChevronBackOutline } from "react-ionicons";
import { useRouter } from "next/router";

type PropTypes = {
    title: string;
    cta: any;
    bg?: string;
};

const InnerHeader = ({ title, cta, bg }: PropTypes) => {
    const router = useRouter();

    const Cta = cta;

    return (
        <>
            <div className={`appHeader ${bg ? bg : ""}`}>
                <div className="left">
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => router.back()}
                        className="headerButton goBack"
                    >
                        <ChevronBackOutline
                            color={!bg ? "#256l144" : "white"}
                        />
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
