import React from "react";
import { NextPage } from "next";

import styles from "./rsvp.module.css";
import NoSSR from "../components/utils/NoSSR";
import Link from "next/link";

const Rsvp: NextPage= () => {
  return (
    <NoSSR>
        <div className={styles.container}>
          <div>
            <p className={styles.topText}>
              Limited EDITION, Unlimited POSSIBILITY
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardTitle}>
              <img src="/images/M.png" />
              <p className={styles.inviteText}>
                <p>SOMEWHERE BETWEEN CODE AND CONCRETE IS A CANVAS.</p>
                <p>ON TUESDAY, OCTOBER 25, 2022, PROSPECT PARK,</p>
                <p>THAT CANVAS WILL BE ACTIVATED,</p>
                <p>AND YOU'RE INVITED.</p>
              </p>
            </div>
            <div className={styles.bottomText}>
              <div className={styles.leftText}>
                <div className={styles.times}>
                  <p>3:00</p>
                  <p>3:15</p>
                  <p>3:30</p>
                  <p>4:30</p>
                </div>
                <div className={styles.activities}>
                  <p>ARRIVAL</p>
                  <p>OPENING REMARKS</p>
                  <p>TREASURE HUNT</p>
                  <p>DJ SETS BY...</p>
                </div>
              </div>
              <div className={styles.rsvpContainer}>
                <button className={styles.rsvp}>
                  <p>I WILL COME</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.bottomTitle}>
            <p className={styles.bottomTitle}>MIRAGE IS DROPPING SOON</p>
            <Link href={"https://beta.mirage.space/about"}>
              <button className={styles.bottomButton}>
                {" "}
                MORE ABOUT MIRAGE
              </button>
            </Link>
          </div>
        </div>
    </NoSSR>
  );
};

export default Rsvp;
