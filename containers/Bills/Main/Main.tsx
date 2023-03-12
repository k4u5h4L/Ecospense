import SelectAccountAction from "@/components/ActionSheet/SelectAccountAction";
import Billcard from "@/components/Bills/Billcard/Billcard";
import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import PaginationLoader from "@/components/PaginationLoader/PaginationLoader";
import { BillStatusEnum } from "@/constants/billStatusEnum";
import { isBillOverdue, isMonthOld } from "@/utils/timeUtils";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Bill } from "@prisma/client";
import { useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

const GET_BILLS = gql`
    query GetBills(
        $page: Int
        $itemsPerPage: Int
        $accountsPage: Int
        $accountsItemsPerPage: Int
    ) {
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
            history
        }
        getAllAccounts(
            page: $accountsPage
            itemsPerPage: $accountsItemsPerPage
        ) {
            id
            balance
            name
        }
    }
`;

const PAY_BILL = gql`
    mutation PayBill($billId: String!, $accountId: String!) {
        payBill(id: $billId, accountId: $accountId) {
            id
            icon
            name
            desc
            status
            amount
            history
        }
    }
`;

let currentPage = 1;

const Main = () => {
    const { loading, error, data, fetchMore, refetch } = useQuery(GET_BILLS, {
        variables: {
            page: currentPage,
            itemsPerPage: 999,
            accountsPage: 1,
            accountsItemsPerPage: 999,
        },
    });

    if (data) {
        console.log(data.getAllBills);
    }

    const [payBill, { data: mData, loading: mLoading, error: mError }] =
        useMutation(PAY_BILL);

    const [billId, setBillId] = useState<string>("");

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

    const handlePayNow = (billId: string) => {
        setBillId(billId);
    };

    const handleSubmit = async (e: any, accountId: string) => {
        e.preventDefault();

        await payBill({
            variables: {
                billId: billId,
                accountId: accountId,
            },
        });

        await handleRefresh();

        console.log("Bill paid successfully: ", billId);
    };

    // uncomment the PullToRefresh code to enable pagination, but
    // it may cause blank screen on account select modal
    return (
        <>
            <div id="appCapsule" className="extra-header-active full-height">
                {/* <PullToRefresh
                    onRefresh={handleRefresh}
                    canFetchMore={showFetchMore()}
                    onFetchMore={handleFetchMore}
                    pullingContent=""
                    refreshingContent={<PaginationLoader />}
                    resistance={1}
                > */}
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
                                                bill.history.length == 0 ||
                                                isBillOverdue(
                                                    bill.history.at(-1)
                                                )
                                        )
                                        .map((bill: Bill) => (
                                            <Billcard
                                                key={bill.id}
                                                status={BillStatusEnum.waiting}
                                                name={bill.name}
                                                amount={bill.amount}
                                                desc={bill.desc}
                                                icon={bill.icon}
                                                id={bill.id}
                                                currency={
                                                    data.getCurrency
                                                        .currencyName
                                                }
                                                onPayment={handlePayNow}
                                                accounts={
                                                    data.getAllAccounts ?? []
                                                }
                                            />
                                        ))}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="tab-pane fade" id="paid" role="tabpanel">
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
                {/* </PullToRefresh> */}
            </div>

            {data ? (
                <SelectAccountAction
                    accounts={data.getAllAccounts}
                    handleSubmit={handleSubmit}
                    currencyName={data.getCurrency.currencyName}
                />
            ) : null}

            <PrimaryNotification
                showNotif={mLoading}
                title="Paying bill..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default Main;
