import EllipsisMenu from "../../../components/Accounts/EllipsisMenu/EllipsisMenu";
import { gql, useQuery } from "@apollo/client";
import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { BankAccount } from "@prisma/client";
import { formatMoney } from "@/utils/formatMoney";

const GET_CURRENCY_AND_ACCOUNTS = gql`
    query GetCurrencyAndAccounts($page: Int, $itemsPerPage: Int) {
        getAllAccounts(page: $page, itemsPerPage: $itemsPerPage) {
            id
            name
            balance
            desc
        }

        getCurrency {
            id
            currencyName
            currencySymbol
        }
    }
`;

const bgArray = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-dark",
];

const Main = () => {
    const { loading, error, data } = useQuery(GET_CURRENCY_AND_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 999, // ideally keep it at 7, and fetch with pagination
        },
    });

    return (
        <>
            <div id="appCapsule">
                <div className="section mt-2">
                    {loading ? (
                        <ComponentLoaderPrimary />
                    ) : (
                        <>
                            {data.getAllAccounts.map(
                                (account: BankAccount, index: number) => (
                                    <div
                                        className={`card-block ${
                                            bgArray[index % bgArray.length]
                                        } mb-2`}
                                        key={account.id}
                                    >
                                        <div className="card-main">
                                            <EllipsisMenu
                                                accountId={account.id}
                                                accounts={data.getAllAccounts}
                                            />
                                            <div className="balance">
                                                <span className="label">
                                                    BALANCE
                                                </span>
                                                <h1 className="title">
                                                    {formatMoney(
                                                        account.balance,
                                                        data.getCurrency
                                                            .currencyName,
                                                        "standard"
                                                    )}
                                                </h1>
                                            </div>
                                            <div className="in">
                                                <div className="card-number">
                                                    <span className="label">
                                                        Account name
                                                    </span>
                                                    {account.name}
                                                </div>
                                                <div className="bottom">
                                                    <div className="card-expiry">
                                                        <span className="label">
                                                            Description
                                                        </span>
                                                        {account.desc}
                                                    </div>
                                                    {/* <div className="card-ccv">
                                                        <span className="label">
                                                            CCV
                                                        </span>
                                                        553
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Main;
