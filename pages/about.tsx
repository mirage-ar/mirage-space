/**----------------------------------------------------------------------------------
 * Mirage Information Page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { NextPage } from "next";

import styles from "./about.module.css"
import Link from "next/link";

const About: NextPage = () => {
 
  return (
      <div className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.topBarLeft}>
                <img src="./images/M.png"/>
                <p>ABOUT MIRAGE</p>
            </div>
            <div className={styles.topBarRight}>
                <p> CLOSE</p>
                <Link href={"/rsvp"}>
                    <button className={styles.close}> <img src="./images/icon 24.png"/> </button>
                </Link>
            </div>
        </div>
        <div className={styles.pageContent}>
            <p>
            Empty storefronts. Decaying institutions. Makeshift dining 
            establishments. Around 2020, the physical world began to 
            take on a sort of alien quality. Meanwhile, the digital world 
            was reaching new frontiers with decentralized platforms 
            popping up everywhere. 
            </p>
            <p>
            Most physical arenas prohibit our curiosity and creativity, 
            and while digital media empowers individuals to create, 
            he medium has us glued to our screens. We believe the 
            solution lies in merging the two.
            </p>
            <p>
            Enter Mirage—a platform to deploy and discover 
            geolocated AR NFTs.
            </p>
            <p>
            We’re not interested in building a digital replica of our day-
            to-day environment. In fact, we’re doubling down on the 
            real world. We just think there’s more to be added to it, 
            and that it should be fun and simple for people to do so.
            </p>
            <p>
            We live in strange times. It might even feel like the world is ending. 
            With city real estate prices skyrocketing, our 
            immediate environments might feel less accessible than 
            ever. In the midst of an environmental crisis, it might feel 
            as though our world as we know it is on the brink of 
            collapse. With billionaires fixated on colonizing Mars, it 
            might appear as though we’ve discovered all there is to 
            discover, here on Earth. Mirage wants to assure you we’re 
            just getting started. 
            </p>
            <p>
            We’ll see you out there.
            </p>
        </div>
      </div>
  );
};

export default About;
