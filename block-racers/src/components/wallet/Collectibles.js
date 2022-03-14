import React, { useState } from "react";
import { FaMinus, FaPlus, FaWallet } from "react-icons/fa";
import styles from "./Collectibles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io";
import { Divider } from "@mui/material";
import {useSelector} from "react-redux";

function Collectibles() {

  const walletDetails = useSelector((state) => state.wallet);

  return (
    <div>
      <div className={styles["top-section"]}>
        <div className={styles["connected"]}></div>
        <div className={styles["wallet-title"]}>
          <p className={styles["wallet-title-text"]}>Collectibles</p>
          <p className={styles["wallet-title-text-2"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
        </div>
        <div className={styles["icon-holder"]}>
          <GiHamburgerMenu />
        </div>
      </div>

      <Divider />

      <div className={styles["collectibles"]}>
        {walletDetails && walletDetails.collectibles.map((image,index) => {
          return (<div key={index}
          className={styles["image-holder"]}>
            <img src={"/learning/"+image} alt="nft"/>
            </div>)
        })}
      </div>

    </div>
  );
}

export default Collectibles;
