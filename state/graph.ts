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
      }
    }
  }
`;

const client = new ApolloClient({
  uri: "https://9bago6zw91.execute-api.us-east-1.amazonaws.com",
  cache: new InMemoryCache(),
});

export default client;
