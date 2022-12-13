import {
    InMemoryCache,
    ApolloClient,
    HttpLink,
    NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://ecospense-git-dev-k4u5h4l.vercel.app/api/graphql",
        }),
        cache: new InMemoryCache(),
    });
}

function initializeApollo() {
    apolloClient = apolloClient ?? createApolloClient();
    return apolloClient;
}

export function useApollo() {
    return initializeApollo();
}
