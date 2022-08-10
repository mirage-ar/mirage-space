export interface Mirage {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    cityName: string;
    dropStart: Date;
    dropEnd: Date;
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
    mintPrice: number;
  }