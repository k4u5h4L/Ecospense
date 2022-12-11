import { gql } from "@apollo/client";

export const GET_CURRENCY = gql`
    query GetCurrency {
        getCurrency {
            currencyName
            currencySymbol
        }
    }
`;
