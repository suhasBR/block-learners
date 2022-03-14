import React from "react";
import styles from "./NavbarLoggedIn.module.css";
import { Link as Link2 } from "react-scroll";
import {Link} from "react-router-dom";

function Navbar2({ connectWalletHandler, address }) {
  return (
    <div className={styles["navbar"]}>
      <Link to="/">
        <div className={styles["logo-holder"]}>
          <img
            src="images/logo.svg"
            className={styles["logo-img"]}
            alt="logo"
          ></img>
          <div className={styles["text-holder"]}>
          <p className={styles["pre-alpha"]}>pre-alpha</p>
          </div>
        </div>
      </Link>

      <div className={styles["nav-links-holder"]}>
        <Link to="/learning">
          <h4 className={styles["nav-link"]}>Learning</h4>
        </Link>
        <Link to="">
          <h4 className={styles["nav-link"]}>Marketplace</h4>
        </Link>
        <Link to="">
          <h4 className={styles["nav-link"]}>Community</h4>
        </Link>
      </div>

      {/* <div className={styles["chapters-button-holder"]}>
        <Link to="/chapters">
        <button
          onClick={connectWalletHandler}
          className={styles["chapters-button"]}
        >
          Chapters -&gt;
        </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Navbar2;
