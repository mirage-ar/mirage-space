export interface Mirage {
    id: string;
    name: string;
    assetUri: string;
    latitude: number;
    longitude: number;
    elevation: number;
    cityName: string;
    dropStart: Date;
    dropEnd: Date;
    artist: Artist;
    token: Token;
    user: User;
  }
  
  export interface Artist {
    id: string;
    name: string;
    handle: string;
    icon: string;
  }
  
  export interface Token {
    id: string;
    tokenId: string | null;
    contractAddress: string;
    mintPrice: number;
  }

  export interface User {
    id: string;
    wallet: string;
    ens: string;
  }