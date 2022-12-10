import Banner from "@/components/Home/Banner/Banner";
import Copyrights from "@/components/Home/Copyrights/Copyrights";
import Metadata from "@/components/Home/Metadata/Metadata";
import MyAccounts from "@/components/Home/MyAccounts/MyAccounts";
import MyBills from "@/components/Home/MyBills/MyBills";
import News from "@/components/Home/News/News";
import SavingGoals from "@/components/Home/SavingGoals/SavingGoals";
import ShareFunds from "@/components/Home/ShareFunds/ShareFunds";
import Transactions from "@/components/Home/Transactions/Transactions";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <Banner />
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
