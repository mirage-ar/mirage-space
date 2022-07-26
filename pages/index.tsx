import React from "react"
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import styles from "./index.module.css"
import Description from "../cards/description/Description"
import Display from "../cards/display/Display"
import Map from "../cards/map/Map"
import Others from "../cards/others/Others"
import Connect from "../components/buttons/connect/Connect"
import Button from "../components/buttons/button"
import Modal from "../components/modal/Modal"
import Connected from "../components/connected/Connected"


const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Mirage',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme({
        accentColor: 'white',
        accentColorForeground: 'black',
        borderRadius: 'large',
        fontStack: 'system',
      })}>
        <div className={styles.container}>
          <Connected />
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
          />
          <Button toggleModal={toggleModal} />
          <Connect />
          <Display />
          <Map />
          <Description />
          <Others />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
