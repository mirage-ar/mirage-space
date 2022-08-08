// context/state.js
import { useState } from "react";
import { createContext, useContext } from "react";

interface ApplicationContext {
  isMobileView: boolean;
  setMobileView: any;
  isModalOpen: boolean;
  toggleModal: () => void;
  transactionHash: string;
  setTransactionHash: any;
}

const defaultContext: ApplicationContext = {
  isMobileView: false,
  setMobileView: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  transactionHash: "",
  setTransactionHash: () => {},
};

const Context = createContext(defaultContext);

export function ApplicationProvider({ children }) {
  const [isMobileView, setMobileView] = useState(false);
  const [isModalOpen, setModalState] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const toggleModal = () => setModalState(!isModalOpen);

  const value: ApplicationContext = {
    isMobileView,
    setMobileView,
    isModalOpen,
    toggleModal,
    transactionHash,
    setTransactionHash,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
