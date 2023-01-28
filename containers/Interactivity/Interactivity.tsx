import ExchangeModal from "@/components/Home/ExchangeModal";
import SendMoneyModal from "@/components/Home/SendMoneyModal";
import WithdrawModal from "@/components/Home/WithdrawModal";
import VisDepositModal from "@/components/Visualise/Home/DepositModal";
import VisWithdrawModal from "@/components/Visualise/Home/WithdrawModal";
import VisSendModal from "@/components/Visualise/Home/SendModal";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddBalanceModal from "@/components/Home/AddBalanceModel";
import TandCModal from "@/components/TandC/TandCModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useIsOnline } from "react-use-is-online";
import { UNUSABLE_PATHS_FOR_NEW_USER } from "@/constants/commonConstants";
import AddAccountModal from "@/components/Accounts/AddAccountModal/AddAccountModal";
import Toast from "@/components/Toast/Toast";
import { CloudOfflineOutline } from "react-ionicons";

const Interactivity = () => {
    const { data: session, status } = useSession();
    const { isOffline } = useIsOnline();
    const router = useRouter();

    if (
        status !== "authenticated" ||
        UNUSABLE_PATHS_FOR_NEW_USER.includes(router.asPath.split("?")[0])
    )
        return null;

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
            <AddAccountModal />
            <Toast
                icon={CloudOfflineOutline}
                text="You seem to have lost your internet connection. Some features may be unavailable."
                showOK={false}
                show={isOffline}
                id={2}
            />
        </>
    );
};

export default Interactivity;
