import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import {AiFillLock} from "react-icons/ai";
import styles from "./Blockgen.module.css";

function Blockgen() {
  return (
    <div className={styles["Blockgen-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar/>
        </div>

        <div className={styles["main-content"]}>
          <div className={styles["left-column"]}>
            <img src="/images/blockgen.svg" alt="blockgen"/>
            <div className={styles["properties"]}>
              <h2 className={styles["properties-title"]}>Block properties</h2>
              <p className={styles["text"]}>Block number: #347890</p>
              <p className={styles["text"]}>Block size: 1 Mb</p>
              <p className={styles["text"]}>Network: Local Host</p>
              <p className={styles["text"]}>Block pattern: Normal</p>
            </div>
            <div className={styles["customize"]}>
              Customize Block <span><AiFillLock/></span>
            </div>

            <div className={styles["generate-block"]}>
              Generate Block
            </div>

            <div className={styles["start-racing"]}>
              Start Racing 
            </div>
          </div>
          <div className={styles["right-column"]}>
            <h2 className={styles["title"]}>Block Generation</h2>

            <div className={styles["box"]}>
              <p className={styles["box-text"]}>Block Affinities and Fuel</p>
              <AiFillLock 
              style={{"fontSize":"4rem"}}/>
            </div>

            <div className={styles["box"]}>
              <p className={styles["box-text"]}>Power Ups</p>
              <AiFillLock 
              style={{"fontSize":"4rem"}}/>
            </div>

            <div className={styles["miner-box"]}>
            <div className={styles["profile-pic"]}>
              <img
                className={styles["profile-image"]}
                src="/images/miner_image.svg"
                alt="miner-profile"
              ></img>
              <div className={styles["name"]}>
                <p className={styles["name-text"]}>N-Miner #345  Lv-2</p>
              </div>
              <div className={styles["progress-bar"]}>
                <div className={styles["fill"]}></div>
               
              </div>
              <p className={styles["progress-bar-text"]}>36/90XP</p>
            </div>

            <div className={styles["miner-details"]}>
              <h2 className={styles["miner-title"]}>Selected miner</h2>
              <p className={styles["miner-text"]}>
                Max Hash Rate: 300KH/s
              </p>
              <p className={styles["miner-text"]}>
                Types of networks: proof of work, proof of stake, partial validator, derivative chain
              </p>
              <p className={styles["miner-text"]}>
                Electricity consumption : 110 Watts
              </p>
            </div>
            </div>

          </div>
        </div>

        <div className={styles["wallet-container"]}>
          <Wallet />
        </div>
      </div>
      <Divider/>
      <Footer/>
    </div>
  );
}

export default Blockgen;
