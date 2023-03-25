import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { GET_TXNS } from "@/constants/gqlQueries";
import { TxnAction } from "@/constants/txnConstants";
import Link from "@/helpers/wrappers/Link/Link";
import { formatDate } from "@/utils/formatDate";
import { formatMoney } from "@/utils/formatMoney";
import { useQuery } from "@apollo/client";
import { Transaction } from "@prisma/client";

let currentPage = 1;

type DataType = {
    getAllTxns: Transaction[];
    getCurrency: {
        id: string;
        currencyName: string;
        currencySymbol?: string;
    };
};

const Main = () => {
    const { loading, error, data, fetchMore, refetch } = useQuery<DataType>(
        GET_TXNS,
        {
            variables: {
                page: currentPage,
                itemsPerPage: 10,
            },
        }
    );

    const handleFetchMore = async () => {
        await fetchMore({
            variables: {
                page: ++currentPage,
                itemsPerPage: 10,
            },
        });
    };

    return (
        <>
            <div id="appCapsule">
                <div className="section mt-2">
                    {loading ? (
                        <ComponentLoaderPrimary />
                    ) : (
                        <>
                            {/* <div className="section-title">Today</div> */}
                            <div className="transactions">
                                {data.getAllTxns.map((txn) => (
                                    <Link
                                        href="#"
                                        className="item"
                                        key={txn.id}
                                    >
                                        <div className="detail">
                                            <img
                                                src={txn.icon}
                                                alt="img"
                                                className="image-block imaged w48"
                                            />
                                            <div>
                                                <strong>{txn.name}</strong>
                                                <p>
                                                    {formatDate(txn.timestamp)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            {txn.action == TxnAction.ADD ? (
                                                <div className="price text-success">
                                                    +{" "}
                                                    {formatMoney(
                                                        txn.amount,
                                                        data.getCurrency
                                                            .currencyName
                                                    )}
                                                </div>
                                            ) : txn.action ==
                                              TxnAction.WITHDRAW ? (
                                                <div className="price text-danger">
                                                    -{" "}
                                                    {formatMoney(
                                                        txn.amount,
                                                        data.getCurrency
                                                            .currencyName
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="price">
                                                    -{" "}
                                                    {formatMoney(
                                                        txn.amount,
                                                        data.getCurrency
                                                            .currencyName
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {data ? (
                    <div className="section mt-2 mb-2">
                        <a
                            style={{ cursor: "pointer" }}
                            className="btn btn-primary btn-block btn-lg"
                            onClick={handleFetchMore}
                        >
                            Load More
                        </a>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Main;
