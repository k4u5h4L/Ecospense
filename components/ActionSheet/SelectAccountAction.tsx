import ModalContainer from "@/containers/ModalContainer/ModalContainer";
import { formatMoney } from "@/utils/formatMoney";
import { BankAccount } from "@prisma/client";
import { useState } from "react";

type PropType = {
    accounts: BankAccount[];
    handleSubmit: any;
    currencyName: string;
};

const SelectAccountAction = ({
    accounts,
    handleSubmit,
    currencyName,
}: PropType) => {
    const [accountId, setAccountId] = useState<string>(
        accounts.length > 0 ? accounts[0].id : ""
    );

    const handleInputChange = (accountIdEntered: string) => {
        setAccountId(accountIdEntered);
    };

    return (
        <>
            <div
                className="modal fade action-sheet"
                id="selectAccountAction"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Pay Bill</h5>
                            </div>
                            <div className="modal-body">
                                <div className="action-sheet-content">
                                    <ModalContainer>
                                        <form
                                            onSubmit={async (e) => {
                                                await handleSubmit(
                                                    e,
                                                    accountId
                                                );
                                            }}
                                        >
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label
                                                        className="label"
                                                        htmlFor="account1"
                                                    >
                                                        From Account
                                                    </label>
                                                    <select
                                                        className="form-control custom-select"
                                                        id="account1"
                                                        required
                                                    >
                                                        {accounts.map(
                                                            (
                                                                account: BankAccount,
                                                                index: number
                                                            ) => (
                                                                <option
                                                                    key={
                                                                        account.id
                                                                    }
                                                                    defaultChecked={
                                                                        index ==
                                                                        0
                                                                    }
                                                                    onClick={() =>
                                                                        handleInputChange(
                                                                            account.id
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        account.name
                                                                    }{" "}
                                                                    (
                                                                    {formatMoney(
                                                                        account.balance,
                                                                        currencyName
                                                                    )}
                                                                    )
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block btn-lg"
                                                    data-bs-dismiss="modal"
                                                    onSubmit={async (e) => {
                                                        await handleSubmit(
                                                            e,
                                                            accountId
                                                        );
                                                    }}
                                                >
                                                    Pay
                                                </button>
                                            </div>
                                        </form>
                                    </ModalContainer>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

export default SelectAccountAction;
