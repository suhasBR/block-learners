import React, { Fragment, useState } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Divider from "../components/Divider";
import styles from "./MinerProfile.module.css";
import Wallet from "../components/wallet/Balance";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

function MinerProfile() {
  const [section, changeSection] = useState(1);

  return (
      <Fragment>
    <div className={styles["miner-profile-page"]}>
      <NavbarLoggedIn/>
      <div className={styles["full-page"]}>
        <section className={styles["main-section"]}>
          <div className={styles["quests-section"]}>
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
              <button className={styles["edit-profile-button"]}>
                <span style={{"marginRight":"0.5rem"}}><BsFillGearFill/></span>
                Edit Miner Profile
              </button>
            </div>
            <div className={styles["quests"]}>
              <h2 className={styles["quests-title"]}>Active Quests:</h2>
              <div className={styles["quest"]}>
                <div className={styles["done"]}></div>
                <p className={styles["quest-text"]}>
                  Learn about the Blocz wallet by following the tutorial
                </p>
                <p className={styles["text-reward"]}>10 BLCZ</p>
              </div>
              <div className={styles["quest"]}>
                <div className={styles["done"]}></div>
                <p className={styles["quest-text"]}>
                  Create your first block, by following the tutorial
                </p>
                <p className={styles["text-reward"]}>10 BLCZ</p>
              </div>
              <div className={styles["quest"]}>
                <div className={styles["done"]}></div>
                <p className={styles["quest-text"]}>Finish the tutorial</p>
                <p className={styles["text-reward"]}>10 BLCZ</p>
              </div>
              <div className={styles["quest"]}>
                <p className={styles["quest-text-last"]}>
                  <FaPlus/>
                </p>
              </div>
            </div>
          </div>

          <div className={styles["buttons"]}>
          <button className={styles["button-nft"]}>
              NFT lock-in
            </button>
            <button className={styles["button-defi"]}>
              De-Fi Services -&gt;
            </button>
            <button className={styles["button-racing"]}>
              Hash Racing -&gt;
            </button>
          </div>

          <Divider />

          <section className={styles["gallery"]}>
            <div className={styles["header"]}>
              <div
                onClick={() => changeSection(1)}
                className={section === 1 ? styles["header-element-selected"] :styles["header-element"]}
              >
                Blocks
              </div>
              <div
                onClick={() => changeSection(2)}
                className={section === 2 ? styles["header-element-selected"] :styles["header-element"]}
              >
                Power ups
              </div>
              <div
                onClick={() => changeSection(3)}
                className={section === 3 ? styles["header-element-selected"] :styles["header-element"]}
              >
                Block tokens
              </div>
            </div>

            <div className={styles["display"]}>
              {section === 1 && (
                <Fragment>
                  <div className={styles["card"]}>
                    <div className={styles["card-img"]}>
                      <img
                        className={styles["img"]}
                        src="/images/block1.svg"
                        alt="block"
                      />
                    </div>
                    <div className={styles["text-holder"]}>
                      <p className={styles["text"]}>Block #211</p>
                      <p className={styles["text"]}></p>
                    </div>
                  </div>

                  <div className={styles["card"]}>
                    <div className={styles["card-img"]}>
                      <img
                        className={styles["img"]}
                        src="/images/block1.svg"
                        alt="block"
                      />
                    </div>
                    <div className={styles["text-holder"]}>
                      <p className={styles["text"]}>Block #3456</p>
                      <p className={styles["text"]}></p>
                    </div>
                  </div>
                </Fragment>
              )}

              {section === 2 && (
                <Fragment>
                  <div className={styles["card"]}>
                    <div className={styles["card-img"]}>
                      <img
                        className={styles["img"]}
                        src="/images/attack1.svg"
                        alt="block"
                      />
                    </div>
                    <div className={styles["text-holder"]}>
                      <p className={styles["text"]}>Overclock attack</p>
                      <p className={styles["text"]}>
                        boost your block's hashrate
                      </p>
                    </div>
                  </div>
                </Fragment>
              )}

              {section === 3 && (
                <Fragment>
                  <div className={styles["card"]}>
                    <div className={styles["card-img"]}>
                      <img
                        className={styles["img"]}
                        src="/images/token2.svg"
                        alt="block"
                      />
                    </div>
                    <div className={styles["text-holder"]}>
                      <p className={styles["text"]}>blocz - Solana token</p>
                      <p className={styles["text"]}>X10</p>
                    </div>
                  </div>

                  <div className={styles["card"]}>
                    <div className={styles["card-img"]}>
                      <img
                        className={styles["img"]}
                        src="/images/token1.svg"
                        alt="block"
                      />
                    </div>
                    <div className={styles["text-holder"]}>
                      <p className={styles["text"]}>blocz - Solana token</p>
                      <p className={styles["text"]}>X10</p>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </section>
        </section>
        <div className={styles["wallet-container"]}>
        <Wallet />
        </div>
        
      </div>
      <Divider/>
      <Footer/>
    </div>
   
    </Fragment>
  );
}

export default MinerProfile;
