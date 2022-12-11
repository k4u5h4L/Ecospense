import ExchangeModal from "@/components/Home/ExchangeModal";
import SendMoneyModal from "@/components/Home/SendMoneyModal";
import WithdrawModal from "@/components/Home/WithdrawModal";
import VisDepositModal from "@/components/Visualise/Home/DepositModal";
import VisWithdrawModal from "@/components/Visualise/Home/WithdrawModal";
import VisSendModal from "@/components/Visualise/Home/SendModal";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddBalanceModal from "@/components/Home/AddBalanceModel";
import TandCModal from "@/components/TandC/TandCModal";

const Interactivity = () => {
    return (
        <>
            <Sidebar />
            <AddBalanceModal />
            <WithdrawModal />
            <SendMoneyModal />
            <ExchangeModal />
            <VisDepositModal />
            <VisWithdrawModal />
            <VisSendModal />
            <TandCModal />
        </>
    );
};

export default Interactivity;
