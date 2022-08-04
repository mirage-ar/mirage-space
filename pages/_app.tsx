import { WagmiConfig, configureChains, chain, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { ApplicationProvider } from "../context/state";

import "../styles/globals.css";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.goerli],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
});

function Mirage({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ApplicationProvider>
        <Component {...pageProps} />
      </ApplicationProvider>
    </WagmiConfig>
  );
}

export default Mirage;
