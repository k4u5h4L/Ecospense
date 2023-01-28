import { gql } from "@apollo/client";

export const GET_CURRENCY = gql`
    query GetCurrency {
        getCurrency {
            id
            currencyName
            currencySymbol
        }
    }
`;

export const GET_ALL_ACCOUNTS = gql`
    query GetAllAccounts($page: Int, $itemsPerPage: Int) {
        getAllAccounts(page: $page, itemsPerPage: $itemsPerPage) {
            id
            name
            balance
            desc
        }
    }
`;

export const GET_PROFILE = gql`
    query GetProfile {
        getProfile {
            id
            pic
        }
    }
`;
