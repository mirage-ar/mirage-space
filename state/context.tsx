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
}

const defaultContext: ApplicationContext = {
  isMobileView: false,
  setMobileView: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  transactionHash: "",
  setTransactionHash: () => {},
  items: [],
  setItems: () => {},
};

const Context = createContext(defaultContext);

export function ApplicationProvider({ children }) {
  const [isMobileView, setMobileView] = useState(false);
  const [isModalOpen, setModalState] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [items, setItems] = useState([]);

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
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
