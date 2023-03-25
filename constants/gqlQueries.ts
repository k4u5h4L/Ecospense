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

export const GET_TXNS = gql`
    query GetAllTxns($page: Int, $itemsPerPage: Int) {
        getAllTxns(page: $page, itemsPerPage: $itemsPerPage) {
            amount
            desc
            icon
            id
            name
            timestamp
            action
        }

        getCurrency {
            id
            currencyName
        }
    }
`;
