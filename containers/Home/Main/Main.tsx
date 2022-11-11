import AddBalanceModal from "@/components/Home/AddBalanceModel";
import Banner from "@/components/Home/Banner/Banner";
import Copyrights from "@/components/Home/Copyrights/Copyrights";
import ExchangeModal from "@/components/Home/ExchangeModal";
import Metadata from "@/components/Home/Metadata/Metadata";
import MyAccounts from "@/components/Home/MyAccounts/MyAccounts";
import MyBills from "@/components/Home/MyBills/MyBills";
import News from "@/components/Home/News/News";
import SavingGoals from "@/components/Home/SavingGoals/SavingGoals";
import SendMoneyModal from "@/components/Home/SendMoneyModal";
import ShareFunds from "@/components/Home/ShareFunds/ShareFunds";
import Transactions from "@/components/Home/Transactions/Transactions";
import WithdrawModal from "@/components/Home/WithdrawModal";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <Banner />
                <AddBalanceModal />
                <WithdrawModal />
                <SendMoneyModal />
                <ExchangeModal />
                <Metadata />
                <Transactions />
                <MyAccounts />
                <ShareFunds />
                <MyBills />
                <SavingGoals />
                <News />
                <Copyrights />
            </div>
        </>
    );
};

export default Main;
