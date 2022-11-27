import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Transactions/TransactionDetail/Main/Main";

const TransactionDetail = () => {
    return (
        <>
            <InnerHeader title="Transaction Detail" cta={() => <></>} />
            <Main />
            <Navbar />
            <Navbar />
        </>
    );
};

export default TransactionDetail;
