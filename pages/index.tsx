import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "./index.module.css";
import client, { allItems } from "../state/graph";

import { useApplicationContext } from "../state/context";
import { isSameAddress } from "../components/utils/functions";
import ConnectButton from "../components/buttons/connect/ConnectButton";
import MiniView from "../components/mini/MiniView";
import Modal from "../components/modal/Modal";
import NoSSR from "../components/utils/NoSSR";

interface Props {
  isMobileView?: boolean;
}

const Home: NextPage<Props> = ({ isMobileView }) => {
  const { setMobileView, items, setItems, isModalOpen, toggleModal } =
    useApplicationContext();

  useEffect(() => {
    setMobileView(isMobileView);

    const loadData = async () => {
      const { data } = await client.query({
        query: allItems,
        fetchPolicy: "no-cache",
      });

      console.log(data);

      setItems(data ? data.items : []);
    };

    loadData();

    // TODO: create check contract function
    // if (!contract.includes("0x") || !contract.includes("0X")) {
    //   router.replace(`/${contract}`, `/`);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NoSSR>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/back.mp4" />
        </video>
        {isMobileView ? (
          <div className={styles.container}>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
            <div className={styles.topBar}>
              <img src="/images/M.png" className={styles.logo} />
              <ConnectButton />
            </div>
            <div className={styles.introGraphic}>
              <img src="/images/Friends.png" />
              <div className={styles.codeConcrete}>
                <p>DISCOVER BOUNDLESS CREATION BETWEEN</p>
                <p>CODE AND CONCRETE</p>
              </div>
            </div>
            <div className={styles.pieceViewer}>
              <button className={styles.viewPieces}>
                {" "}
                VIEW PIECES <img src="/images/dropDown.png" />
              </button>
            </div>
            <div className={styles.links}>
              <div className={styles.linkBox}>
                <div className={styles.topLinks}>
                  <img src="/images/MIRAGE.svg" />
                  <div className={styles.socials}>
                    <button className={styles.socialLink}>
                      TWITTER <img src="/images/navigate.svg" />
                    </button>
                    <button className={styles.socialLink}>
                      TELEGRAM <img src="/images/navigate.svg" />
                    </button>
                    <button className={styles.socialLink}>
                      DISCORD <img src="/images/navigate.svg" />
                    </button>
                    <button className={styles.socialLink}>
                      INSTAGRAM <img src="/images/navigate.svg" />
                    </button>
                  </div>
                </div>
                <div className={styles.bottomLinks}>
                  <div className={styles.getApp}>
                    <img src="/images/getAppSmall.png" />
                  </div>
                  <div className={styles.download}>
                    <p>IOS / ANDROID SOON</p>
                    <button className={styles.downloadButton}>
                      <img src="/images/download.png" />
                    </button>
                    <img src="/images/mirageLogo.png" className={styles.logo} />
                  </div>
                </div>
              </div>
              <p className={styles.copyright}>
                Copyright @ mirage. All rights reserved 2022.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.dtContainer}>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
            <div className={styles.dtTopBar}>
              <img src="/images/M.png" className={styles.logo} />
              <ConnectButton />
            </div>
            <div className={styles.dtIntroGraphic}>
              <img src="/images/Friends.png" />
              <div className={styles.dtCodeConcrete}>
                <p>DISCOVER BOUNDLESS CREATION BETWEEN</p>
                <p>CODE AND CONCRETE</p>
              </div>
            </div>
            <div className={styles.dtPieceViewer}>
              <div className={styles.dtMiniViews}>
                {items.map((item) => {
                  if (item.token?.tokenId == "0") {
                    return <MiniView key={item.id} item={item} />;
                  }
                })}
              </div>
            </div>
            <div className={styles.dtLinks}>
              <div className={styles.dtBottomContent}>
                <div className={styles.dtLinkBox}>
                  <div className={styles.dtTopLinks}>
                    <img src="/images/MIRAGE.svg" />
                    <div className={styles.dtSocialSection}>
                      <div className={styles.dtFollowUs}>
                        <p>FOLLOW US</p>
                      </div>
                      <div className={styles.dtSocials}>
                        <button className={styles.dtSocialLink}>
                          TWITTER <img src="/images/navigate.svg" />
                        </button>
                        <button className={styles.dtSocialLink}>
                          TELEGRAM <img src="/images/navigate.svg" />
                        </button>
                        <button className={styles.dtSocialLink}>
                          DISCORD <img src="/images/navigate.svg" />
                        </button>
                        <button className={styles.dtSocialLink}>
                          INSTAGRAM <img src="/images/navigate.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dtBottomLinks}>
                    <div className={styles.dtGetApp}>
                      <img src="/images/getAppLarge.png" />
                    </div>
                    <div className={styles.dtDownload}>
                      <p>IOS / ANDROID SOON</p>
                      <button className={styles.dtDownloadButton}>
                        <img src="/images/download.png" />
                      </button>
                      <img
                        src="/images/mirageLogo.png"
                        className={styles.dtLogo}
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.dtCopyright}>
                  Copyright @ mirage. All rights reserved 2022.
                </p>
              </div>
            </div>
          </div>
        )}
      </NoSSR>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const isMobileView = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return {
    props: {
      isMobileView: Boolean(isMobileView),
      userAgent,
    },
  };
};

export default Home;
