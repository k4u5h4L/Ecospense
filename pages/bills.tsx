import AddBillModal from "@/components/Bills/AddBillModal/AddBillModal";
import StatusTabs from "@/components/Bills/StatusTabs/StatusTabs";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Bills/Main/Main";
import { AddOutline } from "react-ionicons";

const Bills = () => {
    return (
        <>
            <InnerHeader title="Monthly Bills" cta={Cta} />
            <StatusTabs />
            <AddBillModal />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a
                href="#"
                className="headerButton"
                data-bs-toggle="modal"
                data-bs-target="#actionSheetForm"
            >
                <AddOutline color={"#256l144"} />
            </a>
        </>
    );
};

export default Bills;
