// context/state.js
import { useState } from "react";
import { createContext, useContext } from "react";

import { Mirage } from "./graph";

interface ApplicationContext {
  isMobileView: boolean;
  setMobileView: any;
  isModalOpen: boolean;
  toggleModal: any;
  transactionHash: string;
  setTransactionHash: any;
  items: Array<Mirage>;
  setItems: any;
  contract?: string;
  setContract: any;
  defaultItem: Mirage;
}

const defaultItem: Mirage = {
  id: "0",
  name: "Rebased",
  latitude: 40.777,
  longitude: -73.97,
  elevation: 0,
  cityName: "New York",
  dropStart: new Date("2019-08-01 13:28:20.548"),
  dropEnd: new Date("2019-08-10 13:28:20.548"),
  artist: {
    id: "0",
    name: "Fiigmnt",
    handle: "fiigmnt",
    icon: "",
  },
  token: {
    id: "0",
    tokenId: "0",
    contractAddress: "0x00001111",
  },
};

const defaultContext: ApplicationContext = {
  isMobileView: false,
  setMobileView: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  transactionHash: "",
  setTransactionHash: () => {},
  items: [],
  setItems: () => {},
  contract: null,
  setContract: () => {},
  defaultItem,
};

const Context = createContext(defaultContext);

export function ApplicationProvider({ children }) {
  const [isMobileView, setMobileView] = useState(false);
  const [isModalOpen, setModalState] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [items, setItems] = useState([]);
  const [contract, setContract] = useState(null);

  const toggleModal = () => setModalState(!isModalOpen);

  const value: ApplicationContext = {
    isMobileView,
    setMobileView,
    isModalOpen,
    toggleModal,
    transactionHash,
    setTransactionHash,
    items,
    setItems,
    contract,
    setContract,
    defaultItem,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
