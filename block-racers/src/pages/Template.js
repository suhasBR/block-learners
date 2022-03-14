import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import styles from "./Template.module.css";

function Template() {
  return (
    <div className={styles["template-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar/>
        </div>

        <div className={styles["main-content"]}>

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

export default Template;
