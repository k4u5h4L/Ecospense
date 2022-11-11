import { ChevronBackOutline, NotificationsOutline } from "react-ionicons";
import { useRouter } from "next/router";

type PropTypes = {
    title: string;
};

const InnerHeader = ({ title }: PropTypes) => {
    const router = useRouter();

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
                    <a href="app-notifications.html" className="headerButton">
                        <NotificationsOutline />
                        {/* <span className="badge badge-danger">4</span> */}
                    </a>
                </div>
            </div>
        </>
    );
};

export default InnerHeader;
