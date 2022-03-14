import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainSection.module.css";

function MainSection({ connectWalletHandler }) {

   

  return (
    <div className={styles["main-section"]}>
      <div className={styles["left-section"]}>
        <div className={styles["title"]}>
          <h3 className={styles["title-text"]}>
            <span className={styles["text-gradient-first"]}>Learn De-Fi, </span>
            Understand Crypto, Play to learn to Earn !
          </h3>
        </div>
        <div className={styles["description"]}>
          <p className={styles["description-text"]}>
            If you are a beginner at web3, De-fi, then this is the perfect place
            to learn while playing a game that could let you earn real rewards.
            Take the plunge and dive into the world of blockchain technology,
            Decentralized finance with play to earn mechanics
          </p>
        </div>
        <div onClick={connectWalletHandler} className={styles["button"]}>
          <Link to="/signup">
            <button className={styles["start-playing"]}>
              start playing now
            </button>
          </Link>
        </div>
      </div>

      <div className={styles["right-section"]}>
        <img
          className={styles["background-block"]}
          src="/images/block_background.svg"
          alt="background"
        />
        <img src="/images/block.svg" className={styles["block"]} alt="block" />
      </div>
    </div>
  );
}

export default MainSection;
