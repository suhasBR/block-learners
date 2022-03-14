import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles["dashboard-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar />
        </div>

        <div className={styles["main-content"]}>
          <h1 className={styles["title"]}>Dashboard</h1>

          <div className={styles["cards"]}>
            <Link to="/racelist" className={styles["hash-racing"]}>
              <div>Hash Racing -&gt;</div>
            </Link>

            <div className={styles["nft-lockin"]}>NFT lockin -&gt;</div>

            <div className={styles["defi-services"]}>De-fi Services -&gt;</div>
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

export default Dashboard;
