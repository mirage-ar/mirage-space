import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "./index.module.css";
import Description from "../cards/description/Description";
import Display from "../cards/display/mobile/Display";
import Map from "../cards/map/Map";
import OtherItems from "../cards/other/OtherItems";
import Modal from "../components/modal/Modal";
import DesktopDisplay from "../cards/display/desktop/DesktopDisplay";
import ConnectButton from "../components/buttons/connect/ConnectButton";
import NoSSR from "../components/utilities/NoSSR";

import { useApplicationContext } from "../context/state";

interface Props {
  isMobileView?: boolean;
}

const Home: NextPage<Props> = ({ isMobileView }) => {
  const { isModalOpen, toggleModal, setMobileView } = useApplicationContext();

  useEffect(() => {
    setMobileView(isMobileView);
  }, [isMobileView]);

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
            <img src="/images/m.svg" className={styles.titleImage} />
            <p className={styles.titleText}>
              DISCOVER BOUNDLESS CREATION BETWEEN CODE AND CONCRETE
            </p>
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
