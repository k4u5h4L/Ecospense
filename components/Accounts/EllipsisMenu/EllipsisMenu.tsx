import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import { gql, useMutation } from "@apollo/client";
import { BankAccount } from "@prisma/client";
import {
    EllipsisHorizontal,
    PencilOutline,
    CloseOutline,
    ArrowUpCircleOutline,
} from "react-ionicons";

type PropType = {
    accountId: string;
    accounts: any;
};

const REMOVE_ACCOUNT = gql`
    mutation Mutation($accountId: String!) {
        removeAccount(accountId: $accountId) {
            balance
            desc
            id
            name
        }
    }
`;

const EllipsisMenu = ({ accountId }: PropType) => {
    const [removeAccount, { data: mData, loading: mLoading, error: mError }] =
        useMutation(REMOVE_ACCOUNT, {
            update(
                cache,
                {
                    data: { removeAccount },
                }: { data: { removeAccount: BankAccount[] } }
            ) {
                cache.modify({
                    fields: {
                        getAllAccounts(existingAccounts = []) {
                            existingAccounts = existingAccounts.filter(
                                (acc: any) =>
                                    acc.__ref !== `Account:${accountId}`
                            );

                            return existingAccounts;
                        },
                    },
                });
            },
        });

    const handleEditEvent = async () => {
        console.log("Edit event for account id: " + accountId);
    };

    const handleRemoveEvent = async () => {
        await removeAccount({
            variables: {
                accountId: accountId,
            },
        });

        console.log("Removed bank account for account id: " + accountId);
    };

    return (
        <>
            <div className="card-button dropdown">
                <button
                    type="button"
                    className="btn btn-link btn-icon"
                    data-bs-toggle="dropdown"
                >
                    <EllipsisHorizontal color={"white"} />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <a
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={handleEditEvent}
                    >
                        <PencilOutline />
                        Edit
                    </a>
                    <a
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={handleRemoveEvent}
                    >
                        <CloseOutline />
                        Remove
                    </a>
                    {/* <a className="dropdown-item" href="#">
                        <ArrowUpCircleOutline />
                        Upgrade
                    </a> */}
                </div>
            </div>

            <PrimaryNotification
                showNotif={mLoading}
                title="Removing account..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />
        </>
    );
};

export default EllipsisMenu;
