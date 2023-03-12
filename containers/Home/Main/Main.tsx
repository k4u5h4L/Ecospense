import Banner from "@/components/Home/Banner/Banner";
import Copyrights from "@/components/Home/Copyrights/Copyrights";
import Metadata from "@/components/Home/Metadata/Metadata";
import MyAccounts from "@/components/Home/MyAccounts/MyAccounts";
import MyBills from "@/components/Home/MyBills/MyBills";
import News from "@/components/Home/News/News";
import SavingGoals from "@/components/Home/SavingGoals/SavingGoals";
import ShareFunds from "@/components/Home/ShareFunds/ShareFunds";
import Transactions from "@/components/Home/Transactions/Transactions";
import Loader from "@/components/Loader/Loader";
import PaginationLoader from "@/components/PaginationLoader/PaginationLoader";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import PullToRefresh from "react-simple-pull-to-refresh";

const GET_SUMMARY = gql`
    query FetchSummary {
        getCurrentExpenseStatus {
            id
            balance
            bills
            expenses
            income
            savings
        }
    }
`;

const Main = () => {
    const { loading, error, data, refetch } = useQuery(GET_SUMMARY);
    const router = useRouter();

    if (loading) return <Loader />;

    if (error) {
        router.push(
            `/error?error=${encodeURIComponent(
                "Error fetching data. Please try again later :("
            )}")}`
        );
    }

    const handleRefresh = async () => {
        console.log("Refreshing metatdata content");
        refetch();
    };

    return (
        <>
            <div id="appCapsule">
                <PullToRefresh
                    onRefresh={handleRefresh}
                    pullingContent=""
                    refreshingContent={<PaginationLoader />}
                    resistance={1}
                >
                    <>
                        <Banner
                            balance={data.getCurrentExpenseStatus.balance}
                        />
                        <Metadata data={data.getCurrentExpenseStatus} />
                        <Transactions />
                        <MyAccounts />
                        {/* <ShareFunds /> */}
                        <MyBills />
                        <SavingGoals />
                        <News />
                        <Copyrights />
                    </>
                </PullToRefresh>
            </div>
        </>
    );
};

export default Main;
