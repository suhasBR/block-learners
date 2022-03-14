import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import styles from "./Racelist.module.css";

function Racelist() {
  return (
    <div className={styles["racelist-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar />
        </div>

        <div className={styles["main-content"]}>
          <h1 className={styles["title"]}>Hash Racing</h1>
          <div className={styles["filters-container"]}>
            <p className={styles["filter-text"]}>Filters</p>
            <div className={styles["filter"]}></div>
            <div className={styles["filter"]}></div>
            <div className={styles["filter"]}></div>
            <div className={styles["filter"]}></div>
          </div>

          <div className={styles["headers"]}>
          <p className={styles["race-name-header"]}>
              Networks
            </p>
            <p className={styles["fill-header"]}>
              Fill
            </p>
            <p className={styles["reward-header"]}>
              Potential Rewards
            </p>
            <p className={styles["block-time-header"]}>
              Approx Block-time
            </p>
            <p className={styles["fee-header"]}>
              entry fee
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Localhost POW network (Bitcoin)
            </p>
            <p className={styles["fill"]}>
              0/1
            </p>
            <p className={styles["reward"]}>
              0.01sb-ETH<br></br>0.01blcz
            </p>
            <p className={styles["block-time"]}>
              2mins
            </p>
            <p className={styles["fee"]}>
              0blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Devnet POW network (Bitcoin)
            </p>
            <p className={styles["fill"]}>
              0/4
            </p>
            <p className={styles["reward"]}>
              0.2sb-BTC<br></br>0.04blcz
            </p>
            <p className={styles["block-time"]}>
              3mins
            </p>
            <p className={styles["fee"]}>
              0.01blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Testnet POW network (Bitcoin)
            </p>
            <p className={styles["fill"]}>
              3/10
            </p>
            <p className={styles["reward"]}>
              0.2sb-BTC<br></br>1blcz
            </p>
            <p className={styles["block-time"]}>
              5mins
            </p>
            <p className={styles["fee"]}>
              0.1blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Mainnet beta POW network (Bitcoin)
            </p>
            <p className={styles["fill"]}>
              10/20
            </p>
            <p className={styles["reward"]}>
              1sb-BTC<br></br>1blcz
            </p>
            <p className={styles["block-time"]}>
              10mins
            </p>
            <p className={styles["fee"]}>
              1blcz
            </p>
          </div>

          <Divider/>


          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Localhost POW network (Ethereum)
            </p>
            <p className={styles["fill"]}>
              0/1
            </p>
            <p className={styles["reward"]}>
              0.01sb-ETH<br></br>0.01blcz
            </p>
            <p className={styles["block-time"]}>
              2mins
            </p>
            <p className={styles["fee"]}>
              0blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Devnet POW network (Ethereum)
            </p>
            <p className={styles["fill"]}>
              0/4
            </p>
            <p className={styles["reward"]}>
              0.2sb-ETH<br></br>0.04blcz
            </p>
            <p className={styles["block-time"]}>
              3mins
            </p>
            <p className={styles["fee"]}>
              0.01blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Testnet POW network (Ethereum)
            </p>
            <p className={styles["fill"]}>
              3/10
            </p>
            <p className={styles["reward"]}>
              0.2sb-ETH<br></br>1blcz
            </p>
            <p className={styles["block-time"]}>
              5mins
            </p>
            <p className={styles["fee"]}>
              0.1blcz
            </p>
          </div>

          <div className={styles["race-container"]}>
            <div className={styles["circle"]}></div>
            <p className={styles["race-name"]}>
              Mainnet beta POW network (Ethereum)
            </p>
            <p className={styles["fill"]}>
              10/20
            </p>
            <p className={styles["reward"]}>
              1sb-ETH<br></br>1blcz
            </p>
            <p className={styles["block-time"]}>
              10mins
            </p>
            <p className={styles["fee"]}>
              1blcz
            </p>
          </div>
        </div>

        <div className={styles["wallet-container"]}>
          <Wallet />
        </div>
      </div>
      {/* <Divider />
      <Footer /> */}
    </div>
  );
}

export default Racelist;
