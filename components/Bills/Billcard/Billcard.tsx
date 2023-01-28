import { formatMoney } from "@/utils/formatMoney";

type PropType = {
    status: "paid" | "waiting";
    amount: number;
    desc: string;
    icon: string;
    id: string;
    name: string;
    currency: string;
};

const Billcard = ({
    status,
    amount,
    desc,
    icon,
    id,
    name,
    currency,
}: PropType) => {
    return (
        <>
            <div className="col-6 mb-2">
                <div className="bill-box">
                    <div className="img-wrapper">
                        <img
                            src={icon}
                            alt="img"
                            className="image-block imaged w48"
                        />
                    </div>
                    <div className="price">
                        {formatMoney(amount, currency, "standard")}
                    </div>
                    <strong>{name}</strong>
                    <p>{desc}</p>
                    {status == "waiting" ? (
                        <a
                            href="#"
                            className="btn btn-primary btn-block btn-sm"
                        >
                            Pay Now
                        </a>
                    ) : (
                        <>
                            <strong>Amount Paid:</strong>
                            <a
                                href="#"
                                className="btn btn-success btn-block btn-sm"
                            >
                                $230.00
                            </a>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Billcard;
