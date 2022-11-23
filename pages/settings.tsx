import InnerHeader from "@/components/InnerHeader/InnerHeader";
import { NotificationsOutline } from "react-ionicons";
import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import Main from "@/containers/Settings/Main/Main";
import Navbar from "@/components/Navbar/Navbar";

const Settings = () => {
    return (
        <>
            <InnerHeader title="Settings" cta={Cta} />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a href="app-notifications.html" className="headerButton">
                <NotificationsOutline color={PRIMARY_COLOUR} />
                {/* <span className="badge badge-danger">4</span> */}
            </a>
        </>
    );
};

export default Settings;
