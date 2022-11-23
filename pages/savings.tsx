import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import AddGoalModal from "@/components/Savings/AddGoalModal/AddGoalModal";
import Main from "@/containers/Savings/Main/Main";
import { AddOutline } from "react-ionicons";

const Savings = () => {
    return (
        <>
            <InnerHeader title="My Savings" cta={Cta} />
            <AddGoalModal />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <div className="right">
                <a
                    href="#"
                    className="headerButton"
                    data-bs-toggle="modal"
                    data-bs-target="#actionSheetForm"
                >
                    <AddOutline color={"#256l144"} />
                </a>
            </div>
        </>
    );
};

export default Savings;
