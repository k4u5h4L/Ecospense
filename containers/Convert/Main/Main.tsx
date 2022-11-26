import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { Currency } from "@/constants/currencyEnum";
import { ConvertApiResponse } from "@/types/ConvertApi";
import { useEffect, useState } from "react";
import { CloseCircle, SwapVerticalOutline } from "react-ionicons";

type CurrencyConvertType = {
    value: number;
    type: string;
};

const Main = () => {
    const currencies = Object.keys(Currency);

    const [fromCur, setFromCur] = useState<CurrencyConvertType>({
        value: 0,
        type: currencies[0],
    });
    const [toCur, setToCur] = useState<CurrencyConvertType>({
        value: 0,
        type: currencies[14],
    });

    const [convRate, setConvRate] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchConvRate = async (from: string, to: string, value: number) => {
        const res = await fetch(`/api/convert`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: from,
                to: to,
                value: value,
            }),
        });

        const data = await res.json();

        return data;
    };

    useEffect(() => {
        const defaultConvRate = async () => {
            const response: ConvertApiResponse = await fetchConvRate(
                fromCur.type,
                toCur.type,
                1
            );

            setConvRate(response.rate);
        };

        defaultConvRate();
    }, [fromCur, toCur]);

    const selectCurrency = (
        conversion: "from" | "to",
        currency: string
    ): void => {
        if (conversion == "from") {
            setFromCur((prev) => {
                prev.type = currency;
                return prev;
            });
        } else {
            setToCur((prev) => {
                prev.type = currency;
                return prev;
            });
        }
    };

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        setLoading(true);

        const response: ConvertApiResponse = await fetchConvRate(
            fromCur.type,
            toCur.type,
            fromCur.value
        );

        setToCur((prev) => {
            prev.value = response.rate;
            return prev;
        });

        setResult(response.rate);

        console.log(toCur);

        setLoading(false);
    };

    return (
        <>
            <div id="appCapsule">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="section mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic p-0">
                                    <div className="exchange-heading">
                                        <label
                                            className="group-label"
                                            htmlFor="fromAmount"
                                        >
                                            From
                                        </label>
                                        {/* <div className="exchange-wallet-info">
                                            Balance :{" "}
                                            <strong> 5.506,12 USD</strong>
                                        </div> */}
                                    </div>
                                    <div className="exchange-group">
                                        <div className="input-col">
                                            <input
                                                type="num"
                                                className="form-control form-control-lg pe-0 border-0"
                                                id="fromAmount"
                                                placeholder="0"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                maxLength={10}
                                                onChange={(e) =>
                                                    setFromCur((prev) => {
                                                        prev.value = parseFloat(
                                                            e.target.value
                                                        );
                                                        return prev;
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="select-col">
                                            <select className="form-select form-select-lg currency">
                                                {currencies.map(
                                                    (key, index) => (
                                                        <option
                                                            key={index}
                                                            selected={
                                                                key ==
                                                                fromCur.type
                                                            }
                                                            // value={key}
                                                            onClick={() =>
                                                                selectCurrency(
                                                                    "from",
                                                                    key
                                                                )
                                                            }
                                                        >
                                                            {key}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="exchange-line">
                            <div className="exchange-icon">
                                <SwapVerticalOutline color={"white"} />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic p-0">
                                    <div className="exchange-heading">
                                        <label
                                            className="group-label"
                                            htmlFor="toAmount"
                                        >
                                            To
                                        </label>
                                        {/* <div className="exchange-wallet-info">
                                            Balance :{" "}
                                            <strong> 0,504 BTC</strong>
                                        </div> */}
                                    </div>
                                    <div className="exchange-group">
                                        <div className="input-col">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg pe-0 border-0"
                                                id="toAmount"
                                                value={result}
                                                readOnly={true}
                                                maxLength={10}
                                            />
                                        </div>
                                        <div className="select-col">
                                            <select className="form-select form-select-lg currency">
                                                {currencies.map(
                                                    (key, index) => (
                                                        <option
                                                            key={index}
                                                            selected={
                                                                key ==
                                                                toCur.type
                                                            }
                                                            // value={key}
                                                            onClick={() =>
                                                                selectCurrency(
                                                                    "to",
                                                                    key
                                                                )
                                                            }
                                                        >
                                                            {key}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section mt-2">
                        <div className="row fontsize-caption">
                            <div className="col">
                                <b>1 {fromCur.type}</b> = {convRate}{" "}
                                {toCur.type}
                            </div>
                            {/* <div className="col text-end">
                                Commission rate : <b>2%</b>
                            </div> */}
                        </div>
                    </div>

                    <div className="form-button-group transparent">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            Check
                        </button>
                    </div>
                </form>
            </div>

            <PrimaryNotification
                title="Loading..."
                text="Please wait"
                showNotif={loading}
                showHeader={false}
            />
        </>
    );
};

export default Main;
