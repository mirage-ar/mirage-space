/**----------------------------------------------------------------------------------
 * The description card for the contract page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import styles from "./Description.module.css";

import MintButton from "../../components/buttons/mint/MintButton";
import { Mirage } from "../../state/types";

interface DescriptionProps {
  item?: Mirage;
}

const Description: React.FC<DescriptionProps> = ({ item }) => {
  function getItemDescription(item: Mirage) {
    let artist = item?.artist?.name;

    console.log(item);

    switch (artist) {
      case "shloms":
        return (
          <>
            <p>
              BY CLAIMING THIS NONFUNGIBLE TOKEN YOU CRYPTOGRAPHICALLY VERIFY,
              BEYOND ANY REASONABLE DOUBT, THAT YOU ARE SHL0MS.
            </p>
            <p>
              ANY IDENTITY THEFT BY INDIVIDUALS WHO ARE NOT IN FACT SHL0MS WILL
              BE TRACKED VIA THE BLOCKCHAIN AND REPORTED TO THE FTC.
            </p>
          </>
        );
      case "fiigmnt":
        return (
          <p>
            Opening yourself to the word is an act of creation, sharing that
            creation is an act of bravery.
          </p>
        );
      case "jack warne":
        return (
          <>
            <p>The industrial seeps into the domestic</p>
            <p>Gaunt is the Vessel</p>
          </>
        );
      case "Chloe Karayiannis":
        return (
          <>
            <p>
              Chloe is a multidisciplinary cyborg creator. Working with new
              mediums to experiment in our future digital spaces.
            </p>
            <p>
              3D Motion Graphics / Art Direction / Creative Technology / Fine
              Art{" "}
            </p>
          </>
        );
      default:
        return "";
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>DESCRIPTION</p>
        </div>
        <div className={styles.artistStatement}>{getItemDescription(item)}</div>
        <div className={styles.buttonContainer}>
          <MintButton />
        </div>
      </div>
    </>
  );
};

export default Description;
