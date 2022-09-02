import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const allItems = gql`
  query AllItems {
    items(input: { latitude: 0, longitude: 0, radius: 0 }) {
      id
      name
      assetUri
      latitude
      longitude
      elevation
      cityName
      dropStart
      dropEnd
      artist {
        id
        name
        handle
        icon
      }
      token {
        contractAddress
        mintPrice
        tokenId
      }
      user {
        id
        wallet
        ens
      }
    }
  }
`;

export const authorizeUser = gql`
  mutation AuthorizeUser($wallet: String!, $nonce: Int!, $hash: String!) {
  authorizeUser(input: {
    wallet: $wallet
    nonce: $nonce
    hash: $hash
  }) {
    id
    authToken
    wallet
    ens
  }
}
`;

const client = new ApolloClient({
  uri: "https://37go84pa77.execute-api.us-east-1.amazonaws.com",
  cache: new InMemoryCache(),
});

export default client;
