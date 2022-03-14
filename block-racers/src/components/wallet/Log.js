import React, { useState } from "react";
import { FaMinus, FaPlus, FaWallet } from "react-icons/fa";
import styles from "./Log.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import { Divider } from "@mui/material";
import {useSelector} from "react-redux";

function Collectibles() {

  const walletDetails = useSelector((state) => state.wallet);
  
  return (
    <div>
      <div className={styles["top-section"]}>
        <div className={styles["connected"]}></div>
        <div className={styles["wallet-title"]}>
          <p className={styles["wallet-title-text"]}>Transaction Log</p>
          <p className={styles["wallet-title-text-2"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
        </div>
        <div className={styles["icon-holder"]}>
          <GiHamburgerMenu />
        </div>
      </div>

      <Divider />

      <div className={styles["main-content"]}>
        <div className={styles["search-container"]}>
          <div className={styles["input-container-1"]}>
            <label className={styles["label"]}>Search</label>
            <input
              name="search"
              type="text"
              className={styles["input-search"]}
            ></input>
          </div>

          <div className={styles["input-container-2"]}>
            <label className={styles["label"]}>Filter by date</label>
            <input
              type="date"
              name="date"
              className={styles["input-date"]}
            ></input>
          </div>
        </div>

        <div className={styles["cards"]}>

          <div className={styles["card"]}>
            <div className={styles["img-holder"]}>
              <img
                src="/images/miner_image.svg"
                className={styles["img"]}
              ></img>
            </div>
            <div className={styles["text-holder"]}>
              <p className={styles["to-text"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
              <Divider />
              <p className={styles["time-text"]}>Mar 13, 2022 at 11:40 PM</p>
            </div>

            <div className={styles["amount"]}>
              <div className={styles["indicator"]}>
                  <AiOutlineArrowDown/>
              </div>
              <p className={styles["magnitudee"]}>10 BLCZ</p>
            </div>
          </div>

          <div className={styles["card"]}>
            <div className={styles["img-holder"]}>
              <img
                src="/images/miner_image.svg"
                className={styles["img"]}
              ></img>
            </div>
            <div className={styles["text-holder"]}>
              <p className={styles["to-text"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
              <Divider />
              <p className={styles["time-text"]}>Mar 13, 2022 at 11:40 PM</p>
            </div>

            <div className={styles["amount"]}>
              <div className={styles["indicator"]}>
                  <AiOutlineArrowDown/>
              </div>
              <p className={styles["magnitudee"]}>10 BLCZ</p>
            </div>
          </div>

          <div className={styles["card"]}>
            <div className={styles["img-holder"]}>
              <img
                src="/images/miner_image.svg"
                className={styles["img"]}
              ></img>
            </div>
            <div className={styles["text-holder"]}>
              <p className={styles["to-text"]}>{walletDetails.bloczAddress.substring(0,5)}..</p>
              <Divider />
              <p className={styles["time-text"]}>Mar 13, 2022 at 11:40 PM</p>
            </div>

            <div className={styles["amount"]}>
              <div className={styles["indicator"]}>
                  <AiOutlineArrowDown/>
              </div>
              <p className={styles["magnitudee"]}>10 BLCZ</p>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
}

export default Collectibles;
