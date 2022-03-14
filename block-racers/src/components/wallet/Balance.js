import React, { useState } from "react";
import { FaMinus, FaPlus, FaWallet } from "react-icons/fa";
import styles from "./Balance.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io";
import { Divider } from "@mui/material";
import {useSelector} from "react-redux";

function Balance() {

  const walletDetails = useSelector((state) => state.wallet);

  return (
    <div>
      <div className={styles["top-section"]}>
        <div className={styles["connected"]}></div>
        <div className={styles["wallet-title"]}>
          <p className={styles["wallet-title-text"]}>Wallet-I</p>
          <p className={styles["wallet-title-text-2"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
        </div>
        <div className={styles["icon-holder"]}>
          <GiHamburgerMenu />
        </div>
      </div>

      <Divider />

      <h1 className={styles["title-balance"]}>${walletDetails.bloczbal}</h1>

      <div className={styles["wallet-buttons"]}>
        <button className={styles["wallet-button"]}>Deposit</button>
        <button className={styles["wallet-button"]}>Send</button>
      </div>

      <Divider />

      <div className={styles["cards"]}>
        <div className={styles["card"]}>
          <div className={styles["tokens"]}>
            <img
              className={styles["token-img"]}
              src="/images/token2.svg"
              alt="token"
            />
          </div>
          <div className={styles["token-text"]}>
            <p className={styles["token-title"]}>Blocz token</p>
            <p className={styles["token-subtitle"]}>{walletDetails.bloczbal} BLCZ</p>
          </div>
          <button className={styles["button-balance"]}>{walletDetails.bloczbal} g-USD</button>
        </div>

        <div className={styles["card"]}>
          <div className={styles["tokens"]}>
            <img
              className={styles["token-img"]}
              src="/images/token1.svg"
              alt="token"
            />
          </div>
          <div className={styles["token-text"]}>
            <p className={styles["token-title"]}>Blocz token</p>
            <p className={styles["token-subtitle"]}>3500 BLCZ</p>
          </div>
          <button className={styles["button-balance"]}>2 g-USD</button>
        </div>

        
      </div>
    </div>
  );
}

export default Balance;
