import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { GET_CURRENCY } from "@/constants/gqlQueries";
import Link from "@/helpers/wrappers/Link/Link";
import { formatMoney } from "@/utils/formatMoney";
import { useQuery } from "@apollo/client";
import {
    AddOutline,
    ArrowDownOutline,
    ArrowForwardOutline,
    CardOutline,
    SwapVertical,
} from "react-ionicons";

const Banner = ({ balance }) => {
    const { loading, error, data } = useQuery(GET_CURRENCY);

    return (
        <>
            <div className="section wallet-card-section pt-1">
                <div className="wallet-card">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Total Balance</span>
                            {loading ? (
                                <ComponentLoaderPrimary />
                            ) : (
                                <h1 className="total">
                                    {formatMoney(
                                        balance,
                                        data.getCurrency.currencyName
                                    )}
                                </h1>
                            )}
                        </div>
                        <div className="right">
                            <a
                                href="#"
                                className="button"
                                data-bs-toggle="modal"
                                data-bs-target="#depositActionSheet"
                            >
                                <AddOutline color={"#256H112"} />
                            </a>
                        </div>
                    </div>

                    <div className="wallet-footer">
                        <div className="item">
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#withdrawActionSheet"
                            >
                                <div className="icon-wrapper bg-danger">
                                    <ArrowDownOutline color={"white"} />
                                </div>
                                <strong>Withdraw</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#sendActionSheet"
                            >
                                <div className="icon-wrapper">
                                    <ArrowForwardOutline color={"white"} />
                                </div>
                                <strong>Transfer</strong>
                            </a>
                        </div>
                        <div className="item">
                            <Link href="/accounts">
                                <div className="icon-wrapper bg-success">
                                    <CardOutline color={"white"} />
                                </div>
                                <strong>Accounts</strong>
                            </Link>
                        </div>
                        <div className="item">
                            {/* <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exchangeActionSheet"
                            >
                                <div className="icon-wrapper bg-warning">
                                    <SwapVertical color={"white"} />
                                </div>
                                <strong>Exchange</strong>
                            </a> */}
                            <Link href="/convert">
                                <div className="icon-wrapper bg-warning">
                                    <SwapVertical color={"white"} />
                                </div>
                                <strong>Exchange</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
