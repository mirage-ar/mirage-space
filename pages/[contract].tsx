import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import client, { allItems } from "../state/graph";
import { Mirage } from "../state/types";
import styles from "./index.module.css";
import Mapbox from "../cards/mapbox/Mapbox";
import Description from "../cards/description/Description";
import Display from "../cards/display/Display";
import OtherItems from "../cards/other/OtherItems";
import Modal from "../components/modal/Modal";
import ConnectButton from "../components/buttons/connect/ConnectButton";
import NoSSR from "../components/utils/NoSSR";
import { SnackbarProvider } from "material-ui-snackbar-provider";

import { useApplicationContext } from "../state/context";

interface Props {
  items?: Array<Mirage>;
  isMobileView?: boolean;
}

const Home: NextPage<Props> = ({ isMobileView, items }) => {
  const router = useRouter();
  const { contract } = router.query;
  const { isModalOpen, toggleModal, setMobileView, setItems, setContract } =
    useApplicationContext();

  useEffect(() => {
    setMobileView(isMobileView);
    setItems(items);
    setContract(contract);

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
              <ConnectButton />
              <Display />
              <Mapbox />
              <Description />
              <OtherItems />
            </div>
          ) : (
            <>
              <video autoPlay muted loop className={styles.video}>
                <source src="/videos/back.mp4" />
              </video>
              <div className={styles.desktopContainer}>
                <Modal isOpen={isModalOpen} onClose={toggleModal} />
                <div className={styles.title}>
                  <div className={styles.titleLeft}>
                    <img src="/images/logo.svg" className={styles.titleImage} />
                    <p className={styles.titleText}>
                      DISCOVER BOUNDLESS CREATION BETWEEN CODE AND CONCRETE
                    </p>
                  </div>

                  <div className={styles.connected}>
                    <ConnectButton />
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

  const { data } = await client.query({
    query: allItems,
    fetchPolicy: "no-cache",
  });

  // console.log("- APOLLO DATA -");
  // console.log(data);

  return {
    props: {
      items: data?.items,
      isMobileView: Boolean(isMobileView),
      userAgent,
    },
  };
};

export default Home;
