import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Visualise/Home/Main/Main";
import { NotificationsOutline } from "react-ionicons";

const Visualise = () => {
    return (
        <>
            <InnerHeader title="Visualise" cta={Cta} bg={"bg-primary"} />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a href="app-notifications.html" className="headerButton">
                <NotificationsOutline color={"white"} />
                {/* <span className="badge badge-danger">8</span> */}
            </a>
        </>
    );
};

export default Visualise;
