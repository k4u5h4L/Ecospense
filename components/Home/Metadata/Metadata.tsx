import ComponentLoaderDanger from "@/components/ComponentLoader/ComponentLoaderDanger";
import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import ComponentLoaderSuccess from "@/components/ComponentLoader/ComponentLoaderSuccess";
import { GET_CURRENCY } from "@/constants/gqlQueries";
import { formatMoney } from "@/utils/formatMoney";
import { useQuery } from "@apollo/client";

const Metadata = ({ data }) => {
    const { loading, error, data: cur } = useQuery(GET_CURRENCY);

    return (
        <>
            <div className="section">
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Income</div>
                            {loading ? (
                                <ComponentLoaderSuccess />
                            ) : (
                                <div className="value text-success">
                                    {formatMoney(
                                        data.income,
                                        cur.getCurrency.currencyName
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Expenses</div>
                            {loading ? (
                                <ComponentLoaderDanger />
                            ) : (
                                <div className="value text-danger">
                                    {formatMoney(
                                        data.expenses,
                                        cur.getCurrency.currencyName
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Total Bills</div>
                            {loading ? (
                                <ComponentLoaderPrimary />
                            ) : (
                                <div className="value">
                                    {formatMoney(
                                        data.bills,
                                        cur.getCurrency.currencyName
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="stat-box">
                            <div className="title">Savings</div>
                            {loading ? (
                                <ComponentLoaderPrimary />
                            ) : (
                                <div className="value">
                                    {formatMoney(
                                        data.savings,
                                        cur.getCurrency.currencyName
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Metadata;
