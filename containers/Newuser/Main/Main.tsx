import { Currency } from "@/constants/currencyEnum";
import { NewuserConfig } from "@/types/NewuserConfig";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CloseCircle } from "react-ionicons";

const defaultCurrency = "GBP";

const UPDATE_USER = gql`
    mutation Mutation($name: String!, $currency: String!, $income: Int!) {
        updateUserProfile(name: $name, currency: $currency, income: $income) {
            email
            name
            Profile {
                currency
                id
                income
            }
        }
    }
`;

const Main = () => {
    const currencies = Object.keys(Currency);
    const [config, setConfig] = useState<NewuserConfig>({
        name: "",
        currency: defaultCurrency,
        income: 0,
    });
    const [agreed, setAgreed] = useState(false);
    const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);
    const router = useRouter();

    const selectCurrency = (key: string): void => {
        console.log("selected currency: ", key);
        setConfig((prev) => {
            // prev.currency = Currency[key];
            prev.currency = key;
            return prev;
        });
    };

    const nameHandler = (e) => {
        setConfig((prev) => {
            prev.name = e.target.value;
            return prev;
        });
    };

    const incomeHandler = (e) => {
        setConfig((prev) => {
            prev.income = parseInt(e.target.value);
            return prev;
        });
    };

    const agreeHandler = (e) => {
        setAgreed(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(config);

        await updateUser({
            variables: {
                name: config.name,
                currency: config.currency,
                income: config.income,
            },
        });

        if (error) {
            console.error(error);
        } else {
            console.log(data);
            router.replace(`/`);
        }
    };

    return (
        <>
            <div id="appCapsule">
                <div className="section mt-2 text-center">
                    <h1>Let&apos;s get to know each other!</h1>
                    <h4>Enter some of your basic details below</h4>
                </div>
                <div className="section mb-5 p-2">
                    <form onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label
                                            className="label"
                                            htmlFor="email1"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email1"
                                            placeholder="John Doe"
                                            onChange={nameHandler}
                                            required
                                        />
                                        <i className="clear-input">
                                            <CloseCircle />
                                        </i>
                                    </div>
                                </div>

                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label
                                            className="label"
                                            htmlFor="password1"
                                        >
                                            Your preferred currency
                                        </label>
                                        <select className="form-select form-select-lg">
                                            {currencies.map((key, index) => (
                                                <option
                                                    key={index}
                                                    selected={
                                                        key == defaultCurrency
                                                    }
                                                    // value={key}
                                                    onClick={() =>
                                                        selectCurrency(key)
                                                    }
                                                >
                                                    {key}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label
                                            className="label"
                                            htmlFor="password2"
                                        >
                                            Your income per month
                                        </label>
                                        <input
                                            type="number"
                                            pattern="[0-9]*"
                                            inputMode="numeric"
                                            className="form-control"
                                            id="password2"
                                            autoComplete="off"
                                            placeholder="5000"
                                            required
                                            onChange={incomeHandler}
                                        />
                                        <i className="clear-input">
                                            <CloseCircle />
                                        </i>
                                    </div>
                                </div>

                                <div className="custom-control custom-checkbox mt-2 mb-1">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheckb1"
                                            onChange={agreeHandler}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheckb1"
                                        >
                                            I agree to{" "}
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#termsModal"
                                            >
                                                terms and conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {agreed ? (
                            <div className="form-button-group transparent">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block btn-lg"
                                    onSubmit={handleSubmit}
                                >
                                    Get started!
                                </button>
                            </div>
                        ) : null}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Main;
