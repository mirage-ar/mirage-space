import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // TODO: update to prod uri
    uri: "https://dxplittukg.execute-api.us-east-1.amazonaws.com",
    cache: new InMemoryCache(),
});

export default client;