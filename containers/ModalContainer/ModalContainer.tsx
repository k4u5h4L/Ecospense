import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { GET_ALL_ACCOUNTS } from "@/constants/gqlQueries";
import Link from "@/helpers/wrappers/Link/Link";
import { useQuery } from "@apollo/client";

const ModalContainer = ({ children }) => {
    const { loading, error, data } = useQuery(GET_ALL_ACCOUNTS, {
        variables: {
            page: 1,
            itemsPerPage: 999,
        },
    });

    if (loading) return <ComponentLoaderPrimary />;
    else if (data.getAllAccounts.length > 0) return <>{children}</>;

    return (
        <>
            <h5 className="modal-title">
                You will need to add accounts to do this action. Please visit
                the
                <Link href="/accounts" className="text-primary">
                    {" "}
                    Accounts{" "}
                </Link>
                page.
            </h5>
        </>
    );
};

export default ModalContainer;
