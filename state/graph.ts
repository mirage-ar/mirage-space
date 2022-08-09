import { ApolloClient, InMemoryCache } from "@apollo/client";

export interface Mirage {
  id: string;
  // name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  artist: Artist;
  token: Token;
}

export interface Artist {
  id: string;
  name: string;
  handle: string;
  icon: string;
}

export interface Token {
  id: string;
  tokenId: string;
  contractAddress: string;
}

const client = new ApolloClient({
  // TODO: update to prod uri
  uri: "https://dxplittukg.execute-api.us-east-1.amazonaws.com",
  cache: new InMemoryCache(),
});

export default client;
