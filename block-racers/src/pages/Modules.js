import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import styles from "./Modules.module.css";
import {Link} from "react-router-dom";

function Modules() {
  return (
    <div className={styles["modules-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar/>
        </div>

        <div className={styles["main-content"]}>
          <h1 className={styles["title"]}>Chapters</h1>
          <p className={styles["subtitle"]}>Go back to the learnings page to see updated chapters</p>

          <section className={styles["gallery-holder"]}>
          <div className={styles["gallery-title"]}>basics</div>
          <div className={styles["gallery"]}>
          <div className={styles["study-card"]}>
              <Link to="/learning">
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
          </div>
          <Divider/>
          </section>


          <section>
          <div className={styles["gallery-title"]}>defi investing</div>
          <div className={styles["gallery"]}>


                <div className={styles["study-card"]}></div>
                <div className={styles["study-card"]}></div>

                <div className={styles["study-card"]}></div>

                <div className={styles["study-card"]}></div>

                <div className={styles["study-card"]}></div>
          </div>
          <Divider/>
          </section>
        
        
        </div>

        <div className={styles["wallet-container"]}>
          <Wallet />
        </div>
      </div>
      {/* <Divider/>
      <Footer/> */}
    </div>
  );
}

export default Modules;
