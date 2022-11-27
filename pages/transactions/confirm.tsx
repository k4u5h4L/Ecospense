import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Main from "@/containers/ConfirmTxn/Main/Main";

const ConfirmTransaction = () => {
    return (
        <>
            <InnerHeader title="Confirm Transaction" cta={() => null} />
            <Main />
        </>
    );
};

export default ConfirmTransaction;
