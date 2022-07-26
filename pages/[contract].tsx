/**----------------------------------------------------------------------------------
 * Mirage Contract Page for Loading NFT's
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import client, { allItems } from "../state/graph";
import { Mirage } from "../state/types";
import styles from "./contract.module.css";
import Mapbox from "../cards/mapbox/Mapbox";
import Description from "../cards/description/Description";
import Display from "../cards/display/Display";
import OtherItems from "../cards/other/OtherItems";
import Modal from "../components/modal/Modal";
import ConnectButton from "../components/buttons/connect/ConnectButton";
import NoSSR from "../components/utils/NoSSR";
import { SnackbarProvider } from "material-ui-snackbar-provider";

import { useApplicationContext } from "../state/context";
import Link from "next/link";
import { isSameAddress } from "../components/utils/functions";

interface Props {
  items?: Array<Mirage>;
  isMobileView?: boolean;
}

const Home: NextPage<Props> = ({ isMobileView, items }) => {
  const router = useRouter();
  const { contract } = router.query;
  const { isModalOpen, toggleModal, setMobileView, setItems, setContract } =
    useApplicationContext();

  const [item, setItem] = useState(null);

  useEffect(() => {
    setMobileView(isMobileView);
    // setItems(items);
    setContract(contract);

    const loadData = async () => {
      const { data } = await client.query({
        query: allItems,
        fetchPolicy: "no-cache",
      });

      console.log(data);

      setItems(data ? data.items : []);

      if (data && contract) {
        setItem(
          data.items.find((item) =>
            isSameAddress(item.token.contractAddress, contract as string)
          )
        );
      }
    };

    loadData();

    // TODO: create check contract function
    // if (!contract.includes("0x") || !contract.includes("0X")) {
    //   router.replace(`/${contract}`, `/`);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NoSSR>
      <div className={styles[isMobileView ? "containerNoVideo" : "container"]}>
        <SnackbarProvider SnackbarProps={{ autoHideDuration: 2000 }}>
          {isMobileView ? (
            <div className={styles.mobileContainer}>
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
              <div className={styles.mobileTopBar}>
                <Link href={"/"}>
                  <button className={styles.mobileHomeButton}>
                    <img src="/images/M.png" />
                  </button>
                </Link>
                <ConnectButton isLarge />
              </div>
              <Display />
              <Mapbox />
              <Description item={item} />
              <OtherItems />
            </div>
          ) : (
            <>
              <video autoPlay playsInline muted loop className={styles.video}>
                <source src="/videos/back.mp4" />
              </video>
              <div className={styles.desktopContainer}>
                <Modal isOpen={isModalOpen} onClose={toggleModal} />
                <div className={styles.title}>
                  <div className={styles.titleLeft}>
                    <Link href={"/"}>
                      <button className={styles.homepageLink}>
                        <img
                          src="/images/logo.svg"
                          className={styles.titleImage}
                        />
                      </button>
                    </Link>
                    <p className={styles.titleText}>
                      DISCOVER BOUNDLESS CREATION BETWEEN CODE AND CONCRETE
                    </p>
                  </div>
                  <div className={styles.connected}>
                    <ConnectButton isLarge />
                  </div>
                </div>
                <Display />
                <OtherItems />
              </div>
            </>
          )}
        </SnackbarProvider>
      </div>
    </NoSSR>
  );
};

export const getServerSideProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const isMobileView = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return {
    props: {
      items: [],
      isMobileView: Boolean(isMobileView),
      userAgent,
    },
  };
};

export default Home;
