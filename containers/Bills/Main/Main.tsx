import Billcard from "@/components/Bills/Billcard/Billcard";
import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import PaginationLoader from "@/components/PaginationLoader/PaginationLoader";
import { BillStatusEnum } from "@/constants/billStatusEnum";
import { isBillOverdue, isMonthOld } from "@/utils/timeUtils";
import { gql, useQuery } from "@apollo/client";
import { Bill } from "@prisma/client";
import PullToRefresh from "react-simple-pull-to-refresh";

const GET_BILLS = gql`
    query GetBills($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
        }
        getAllBills(page: $page, itemsPerPage: $itemsPerPage) {
            amount
            desc
            icon
            id
            name
            status
        }
    }
`;

let currentPage = 1;

const Main = () => {
    const { loading, error, data, fetchMore, refetch } = useQuery(GET_BILLS, {
        variables: {
            page: currentPage,
            itemsPerPage: 6,
        },
    });

    const handleRefresh = async () => {
        refetch();
    };

    const handleFetchMore = async () => {
        fetchMore({
            variables: {
                page: ++currentPage,
                itemsPerPage: 6,
            },
        });
    };

    const showFetchMore = (): boolean => {
        return !loading && data.getAllBills.length > 4;
    };

    return (
        <>
            <div id="appCapsule" className="extra-header-active full-height">
                <PullToRefresh
                    onRefresh={handleRefresh}
                    canFetchMore={showFetchMore()}
                    onFetchMore={handleFetchMore}
                    pullingContent=""
                    refreshingContent={<PaginationLoader />}
                    resistance={1}
                >
                    <div className="section tab-content mt-2 mb-1">
                        <div
                            className="tab-pane fade show active"
                            id="waiting"
                            role="tabpanel"
                        >
                            <div className="row">
                                {loading ? (
                                    <ComponentLoaderPrimary />
                                ) : (
                                    <>
                                        {data.getAllBills
                                            .filter(
                                                (bill: Bill) =>
                                                    bill.history.length > 0 &&
                                                    isBillOverdue(
                                                        bill.history.at(-1)
                                                    )
                                            )
                                            .map((bill: Bill) => (
                                                <Billcard
                                                    key={bill.id}
                                                    status={
                                                        BillStatusEnum.waiting
                                                    }
                                                    name={bill.name}
                                                    amount={bill.amount}
                                                    desc={bill.desc}
                                                    icon={bill.icon}
                                                    id={bill.id}
                                                    currency={
                                                        data.getCurrency
                                                            .currencyName
                                                    }
                                                />
                                            ))}
                                    </>
                                )}
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="paid"
                            role="tabpanel"
                        >
                            <div className="row">
                                {loading ? (
                                    <ComponentLoaderPrimary />
                                ) : (
                                    <>
                                        {data.getAllBills
                                            .filter(
                                                (bill: Bill) =>
                                                    bill.history.length > 0 &&
                                                    isMonthOld(
                                                        bill.history.at(-1)
                                                    ) == "NOW"
                                            )
                                            .map((bill: Bill) => (
                                                <Billcard
                                                    key={bill.id}
                                                    status={BillStatusEnum.paid}
                                                    name={bill.name}
                                                    amount={bill.amount}
                                                    desc={bill.desc}
                                                    icon={bill.icon}
                                                    id={bill.id}
                                                    currency={
                                                        data.getCurrency
                                                            .currencyName
                                                    }
                                                />
                                            ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </PullToRefresh>
            </div>
        </>
    );
};

export default Main;
