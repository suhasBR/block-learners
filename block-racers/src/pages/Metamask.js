import React from "react";
import styles from "./Metamask.module.css";
import Navbar from "../components/Navbar";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

function Metamask() {
  return (
    <div className={styles["metamask"]}>
      <Navbar />
      <section className={styles["metamask-download"]}>
        <div className={styles["left-side"]}>
          <h2 className={styles["title"]}>Download Metamask !</h2>
          <p className={styles["text"]}>
            Metamask is a cryptocurrency wallet. <br></br>
            It is absolutely free ! and exists as a chrome extension
          </p>
          <p className={styles["text"]}>
            It is open source and non-custodial, this means that you will own
            the key to this wallet
          </p>
          <p className={styles["text"]}>
            You will have to first download the Metamask wallet to interact with
            the website and login
            <br></br>
            We will use your Metamask wallet address to download the
          </p>
          <p className={styles["text"]}>
            <a href="https://metamask.io/download/">
              https://metamask.io/download/
            </a>
          </p>
          <p className={styles["text"]}>
            Follow the instructions once you install the browser extension.
            <br></br>
            It is preferred to install metamask as an extension as it will allow
            easy access to funds.
          </p>
          <p className={styles["text"]}>
            Remember to save your seed phrase safely!! **
            <br></br>
            Plus you dont need to have any tokens in your wallet to connect, go
            ahead, we promise you'll have fun
          </p>

          <h2 className={styles["title"]}>
            Press the connect button right now
          </h2>

          <p className={styles["text"]}>
            Soon as you press the golden connect button, you should get a popup
            with your Metamask wallet
          </p>

          <p className={styles["text"]}>
            Go ahead and sign the wallet to connect !!
          </p>

          {/* <h2 className={styles["title"]}>Lets explore the Blocz Wallet!</h2>

          <p className={styles["text"]}>
            Soon as you press the golden connect button, you should get a popup
            with your Metamask wallet
          </p>

          <p className={styles["text"]}>
            Go ahead and sign the wallet to connect !!
          </p> */}
        </div>

        <div className={styles["right-side"]}>
          <img
            className={styles["metamask1"]}
            src="/images/metamask1.svg"
            alt="metamask"
          />
          <img
            className={styles["metamask2"]}
            src="/images/metamask2.svg"
            alt="metamask"
          />
        </div>
      </section>

      <div className={styles["connect-button-holder"]}>
        <button className={styles["connect-button"]}>connect wallet</button>
      </div>

    

      <div className={styles["explore-text"]}>
      <h2 className={styles["explore-title"]}>Lets Explore</h2>
        <p className={styles["explore-text"]}>
          Soon as you press the golden connect button, you should get a popup
          with your Metamask wallet
        </p>

        <p className={styles["explore-text"]}>
          Go ahead and sign the wallet to connect !!
        </p>
      </div>

      <div className={styles["blocz-wallet-button-holder"]}>
        <button className={styles["blocz-wallet"]}>
          Blocz wallet instructions
        </button>
      </div>

      <Divider />
      <Footer />
    </div>
  );
}

export default Metamask;
