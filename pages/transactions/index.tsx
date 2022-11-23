import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Transactions/Main/Main";
import Link from "next/link";
import { NotificationsOutline } from "react-ionicons";

const Transactions = () => {
    return (
        <>
            <InnerHeader title="Transactions" cta={Cta} />
            <Main />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <Link
                scroll={false}
                href={"/notifications"}
                className="headerButton"
            >
                <NotificationsOutline color={"#256l144"} />
                {/* <span className="badge badge-danger">4</span> */}
            </Link>
        </>
    );
};

export default Transactions;
