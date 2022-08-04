import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { NextPage } from "next";

import styles from "./index.module.css";
import Description from "../cards/description/Description";
import Display from "../cards/display/mobile/Display";
import Map from "../cards/map/Map";
import Others from "../cards/others/Others";
import Modal from "../components/modal/Modal";
import DesktopDisplay from "../cards/display/desktop/DesktopDisplay";
import ConnectedUser from "../components/user/ConnectedUser";
import ConnectButton from "../components/buttons/ConnectButton";

import NoSSR from "../components/utilities/NoSSR";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.goerli],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Mirage",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

interface Props {
  isMobileView?: boolean;
}

const Home: NextPage<Props> = ({ isMobileView }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={midnightTheme({
          accentColor: "white",
          accentColorForeground: "black",
          borderRadius: "large",
          fontStack: "system",
        })}
      >
        <NoSSR>
          {isMobileView ? (
            <div className={styles.mobileContainer}>
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
              <ConnectButton  toggleModal={ toggleModal }/>
              <Display />
              <Map isMobileView={isMobileView} />
              <Description toggleModal={toggleModal}/>
              <Others isMobileView={isMobileView} />
            </div>
          ) : (
            <div className={styles.desktopContainer}>
               <Modal isOpen={isModalOpen} onClose={toggleModal} />
              <div className={styles.title}>
                <img src="/images/m.svg" className={styles.titleImage} />
                <p className={styles.titleText}>
                  DISCOVER BOUNDLESS CREATION BETWEEN CODE AND CONCRETE
                </p>
                <div className={styles.connected}>
                  <ConnectedUser />
                </div>
              </div>
              <DesktopDisplay toggleModal={toggleModal} />
              <Others isMobileView={isMobileView} />
            </div>
          )}
        </NoSSR>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const isMobileView = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return {
    isMobileView: Boolean(isMobileView),
    userAgent,
  };
};

export default Home;
