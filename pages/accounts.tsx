import Main from "@/containers/Accounts/Main/Main";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import { AddOutline } from "react-ionicons";

const Accounts = () => {
    return (
        <>
            <InnerHeader title="My Accounts" cta={Cta} />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a
                style={{ cursor: "pointer" }}
                className="headerButton"
                data-bs-toggle="modal"
                data-bs-target="#addCardActionSheet"
            >
                <AddOutline color={"#256l144"} />
            </a>
        </>
    );
};

export default Accounts;
