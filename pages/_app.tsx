/**----------------------------------------------------------------------------------
 * The App Page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import { WagmiConfig, configureChains, chain, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { ApplicationProvider } from "../state/context";

import "../styles/globals.css";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({ chains }),
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
