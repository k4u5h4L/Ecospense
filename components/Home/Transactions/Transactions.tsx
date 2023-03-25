import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import NoResults from "@/components/NotFound/NoResults";
import { GET_CURRENCY, GET_TXNS } from "@/constants/gqlQueries";
import Link from "@/helpers/wrappers/Link/Link";
import { formatMoney } from "@/utils/formatMoney";
import { gql, useQuery } from "@apollo/client";
import { Transaction } from "@prisma/client";

const Transactions = () => {
    const { loading, error, data } = useQuery(GET_TXNS, {
        variables: {
            page: 1,
            itemsPerPage: 4,
        },
    });

    return (
        <>
            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Transactions</h2>
                    <Link href="/transactions" className="link">
                        View All
                    </Link>
                </div>

                {data && data.getAllTxns.length == 0 ? (
                    <NoResults />
                ) : (
                    <>
                        {loading ? (
                            <div className="transactions">
                                <ComponentLoaderPrimary />
                            </div>
                        ) : (
                            <div className="transactions">
                                {data.getAllTxns.map((txn: Transaction) => (
                                    <Link
                                        key={txn.id}
                                        href={`/transaction/${encodeURIComponent(
                                            txn.id
                                        )}`}
                                        className="item"
                                    >
                                        <div className="detail">
                                            <img
                                                src={txn.icon}
                                                alt="img"
                                                className="image-block imaged w48"
                                            />
                                            <div>
                                                <strong>{txn.name}</strong>
                                                <p>{txn.desc}</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div
                                                className={`price ${
                                                    txn.amount < 0
                                                        ? "text-danger"
                                                        : ""
                                                }`}
                                            >
                                                {formatMoney(
                                                    txn.amount,
                                                    data.getCurrency
                                                        .currencyName
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Transactions;
