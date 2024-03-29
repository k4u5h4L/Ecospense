import { BillStatusEnum } from "@/constants/billStatusEnum";
import { formatMoney } from "@/utils/formatMoney";
import { BankAccount } from "@prisma/client";

type PropType = {
    status: string;
    amount: number;
    desc: string;
    icon: string;
    id: string;
    name: string;
    currency: string;
    onPayment?: (billId: string) => Promise<void> | void;
    accounts?: BankAccount[];
};

const Billcard = ({
    status,
    amount,
    desc,
    icon,
    id,
    name,
    currency,
    onPayment,
    accounts,
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
                    {status == BillStatusEnum.waiting ? (
                        <a
                            style={{ cursor: "pointer" }}
                            className="btn btn-primary btn-block btn-sm"
                            onClick={() => {
                                onPayment(id);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#selectAccountAction"
                        >
                            Pay Now
                        </a>
                    ) : status == BillStatusEnum.paid ? (
                        <a
                            style={{ cursor: "pointer" }}
                            className="btn btn-success btn-block btn-sm"
                        >
                            Already paid
                        </a>
                    ) : (
                        <a
                            style={{ cursor: "pointer" }}
                            className="btn btn-danger btn-block btn-sm"
                        >
                            Overdue
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default Billcard;
