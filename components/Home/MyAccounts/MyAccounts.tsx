import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "@/helpers/wrappers/Link/Link";
import {
    ArrowUpCircleOutline,
    CloseOutline,
    EllipsisHorizontal,
    PencilOutline,
} from "react-ionicons";
import { gql, useQuery } from "@apollo/client";
import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { BankAccount } from "@prisma/client";
import { formatMoney } from "@/utils/formatMoney";
import NoResults from "@/components/NotFound/NoResults";

const GET_ACCOUNTS = gql`
    query GetAccounts($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
        }
        getAllAccounts(page: $page, itemsPerPage: $itemsPerPage) {
            balance
            desc
            id
            name
        }
    }
`;

const cartBg = ["primary", "dark", "secondary"];

const MyAccounts = () => {
    const { loading, error, data } = useQuery(GET_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 4,
        },
    });

    return (
        <>
            <div className="section full mt-4">
                <div className="section-heading padding">
                    <h2 className="title">My Accounts</h2>
                    <Link scroll={false} href="/accounts" className="link">
                        View All
                    </Link>
                </div>

                {data && data.getAllAccounts.length == 0 ? (
                    <NoResults />
                ) : (
                    <>
                        <Splide
                            className="carousel-single splide"
                            hasTrack={false}
                            options={{
                                rewind: true,
                                gap: "1rem",
                                arrows: false,
                                pagination: false,
                                perPage: 1,
                                // type: "loop",
                                padding: {
                                    left: "9%",
                                },
                            }}
                        >
                            <SplideTrack className="splide__track">
                                {loading ? (
                                    <ComponentLoaderPrimary />
                                ) : (
                                    <>
                                        {data.getAllAccounts.map(
                                            (
                                                account: BankAccount,
                                                index: number
                                            ) => (
                                                <SplideSlide
                                                    key={account.id}
                                                    className="splide__slide"
                                                >
                                                    <div
                                                        className={`card-block bg-${
                                                            cartBg[
                                                                index %
                                                                    cartBg.length
                                                            ]
                                                        }`}
                                                    >
                                                        <div className="card-main">
                                                            {/* <div className="card-button dropdown">
                                            <button
                                                type="button"
                                                className="btn btn-link btn-icon"
                                                data-bs-toggle="dropdown"
                                            >
                                                <EllipsisHorizontal
                                                    color={"white"}
                                                />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <PencilOutline />
                                                    Edit
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <CloseOutline />
                                                    Remove
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <ArrowUpCircleOutline />
                                                    Upgrade
                                                </a>
                                            </div>
                                        </div> */}
                                                            <div className="balance">
                                                                <span className="label">
                                                                    BALANCE
                                                                </span>
                                                                <h1 className="title">
                                                                    {formatMoney(
                                                                        account.balance,
                                                                        data
                                                                            .getCurrency
                                                                            .currencyName,
                                                                        "standard"
                                                                    )}
                                                                </h1>
                                                            </div>
                                                            <div className="in">
                                                                <div className="card-number">
                                                                    <span className="label">
                                                                        Account
                                                                        name
                                                                    </span>
                                                                    {
                                                                        account.name
                                                                    }
                                                                </div>
                                                                <div className="bottom">
                                                                    <div className="card-expiry">
                                                                        <span className="label">
                                                                            Description
                                                                        </span>
                                                                        {
                                                                            account.desc
                                                                        }
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
                                                </SplideSlide>
                                            )
                                        )}
                                    </>
                                )}
                            </SplideTrack>
                        </Splide>
                    </>
                )}
            </div>
        </>
    );
};

export default MyAccounts;
