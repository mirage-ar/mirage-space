import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import client, { allItems } from "../state/graph";
import { Mirage } from "../state/types";
import styles from "./index.module.css";

import Description from "../cards/description/Description";
import Display from "../cards/display/mobile/Display";
import Map from "../cards/map/Map";
import OtherItems from "../cards/other/OtherItems";
import Modal from "../components/modal/Modal";
import DesktopDisplay from "../cards/display/desktop/DesktopDisplay";
import ConnectButton from "../components/buttons/connect/ConnectButton";
import NoSSR from "../components/utils/NoSSR";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NoSSR>
      {isMobileView ? (
        <div className={styles.mobileContainer}>
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
          <ConnectButton />
          <Display />
          <Map />
          <Description />
          <OtherItems />
        </div>
      ) : (
        <div className={styles.desktopContainer}>
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
          <div className={styles.title}>
            <div className={styles.titleLeft}>
              <img src="/images/m.svg" className={styles.titleImage} />
              <p className={styles.titleText}>
                DISCOVER BOUNDLESS CREATION BETWEEN CODE AND CONCRETE
              </p>
            </div>

            <div className={styles.connected}>
              <ConnectButton />
            </div>
          </div>
          <DesktopDisplay />
          <OtherItems />
        </div>
      )}
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
  });

  return {
    props: {
      items: data?.items,
      isMobileView: Boolean(isMobileView),
      userAgent,
    },
  };
};

export default Home;
