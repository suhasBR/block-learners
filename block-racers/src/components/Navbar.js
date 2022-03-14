import React from "react";
import styles from "./Navbar.module.css";
import { Link as Link2 } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar({ connectWalletHandler, address }) {
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
        <Link2 to="" spy={true} smooth={true}>
          <h4 className={styles["nav-link"]}>Jobs</h4>
        </Link2>
        <Link to="/vision" spy={true} smooth={true}>
          <h4 className={styles["nav-link"]}>Vision</h4>
        </Link>
        <Link to="/tokenomics" spy={true} smooth={true}>
          <h4 className={styles["nav-link"]}>Tokenomics</h4>
        </Link>
        <Link to="/login">
          <h4 className={styles["nav-link"]}>Login</h4>
        </Link>
      </div>

      {/* <div className={styles["connect-button-holder"]}>
        {!address ? (
          <button
            onClick={connectWalletHandler}
            className={styles["connect-button"]}
          >
            connect wallet -&gt;
          </button>
        ) : (
          <button
            onClick={connectWalletHandler}
            className={styles["connect-button"]}
          >
            Connected {address.substring(0, 6)}...
          </button>
        )}
      </div> */}
    </div>
  );
}

export default Navbar;
