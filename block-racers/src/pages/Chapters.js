import React, { Fragment, useState } from "react";
import styles from "./Chapters.module.css";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Divider from "../components/Divider";
import Wallet from "../components/wallet/Balance";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

function MinerProfile() {
  const [section, changeSection] = useState(1);

  return (
    <Fragment>
      <div className={styles["chapters-page"]}>
        <NavbarLoggedIn />
        <div className={styles["full-page"]}>
          <section className={styles["main-content"]}>
            <div className={styles["navigation"]}>
              <h2 className={styles["navigation-title"]}>Chapters</h2>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>basics</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>defi investing</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>defi understanding</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>smart contracts</h3>
              </div>
            </div>

            <div className={styles["gallery"]}>
           
              <div className={styles["study-card"]}>
              <Link to="/basics">
                <img
                  className={styles["chapter-image"]}
                  src="/images/attack1.svg"
                  alt="chapter"
                />
                <div className={styles["text-holder"]}>
                  <p className={styles["chapter-text"]}>Blocz Introduction</p>
                  <p className={styles["chapter-text"]}>3 mins</p>
                </div>
                </Link>
              </div>
              <div className={styles["study-card"]}></div>
              <div className={styles["study-card"]}></div>

              <div className={styles["study-card"]}></div>
              <div className={styles["study-card"]}></div>
              <div className={styles["study-card"]}></div>

              <div className={styles["study-card"]}></div>
              <div className={styles["study-card"]}></div>
              <div className={styles["study-card"]}></div>

            
              
            </div>
          </section>

          <div className={styles["wallet-container"]}>
            <Wallet />
          </div>
        </div>
        <Divider />
        <Footer />
      </div>
    </Fragment>
  );
}

export default MinerProfile;
