import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["left-side"]}>

        <div className={styles["logo-title"]}>
          <span className={styles["logo"]}>
            <img
              src="images/logo.svg"
              className={styles["logo-img"]}
              alt="logo"
            ></img>
            
          </span>
          <p className={styles["pre-alpha"]}>pre-alpha</p>
          <h3 className={styles["title"]}>Blocz</h3>
        </div>

        <p className={styles["subtitle"]}>
          Where you learn by playing
        </p>


        <p className={styles["copyright"]}>
          Copyright &#169;2022 Blocz
        </p>

        <p className={styles["rights"]}>
          All Rights Reserved
        </p>


      </div>



      <div className={styles["right-side"]}>
        <a href="">
          <p className={styles["social-link"]}>
          Twitter
          </p>
        </a>
        <a href="">
        <p className={styles["social-link"]}>
          Discord
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
