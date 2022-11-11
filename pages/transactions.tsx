import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Transactions/Main/Main";

const Transactions = () => {
    return (
        <>
            <InnerHeader title="Transactions" />
            <Main />
            <Navbar />
        </>
    );
};

export default Transactions;
