import React from "react";
import styles from "./BloczHelp.module.css";


function BloczHelp() {
  return (
    <div className={styles["blocz-page"]}>
      <h2 className={styles["title"]}>Blocz Wallet</h2>

      <section className={styles["help"]}>
        <div className={styles["text-holder"]}>
          <p className={styles["text"]}>
            Wallets are the Gateways through which Users can interact with
            Decentralized finance.
          </p>
          <p className={styles["text"]}>
            They form the essential UI/UX layer betweent the user and the web
            3.0 application. Just go through these instructions even if you dont
            understand them yet , you will soon! Welcome to <span style={{"color":"#A000D9"}}>Blocz wallet</span>, You
            will use the Embedded blocz wallet to interact with the Webapp We
            hope to emulate the experience of an actual crypto wallet so that
            you get used to interacting with <span style={{"color":"#FFC600"}}>De-fi apps</span>
          </p>

          <p className={styles["text"]}>
            In order to make crypto free and easy for everyone to use we have
            created an erc-20 based token called BLOCZ which will be used to
            emulate higher value crypto currencies in defi The wallet balance is
            in g-USD = gigi USD = 0.000000001 USD. Thus each blocz token
            represents real cash , albeit really really small.
          </p>
        </div>
        <div className={styles["image-holder"]}>
          <img
            className={styles["image"]}
            src="/images/bloczwallet1.svg"
            alt="blocz-wallet-image"
          ></img>
        </div>
      </section>

      <section className={styles["help"]}>
        <div className={styles["image-holder"]}>
          <img
            className={styles["image"]}
            src="/images/bloczwallet2.svg"
            alt="blocz-wallet-image"
          ></img>
        </div>

        <div className={styles["text-holder"]}>
          <p className={styles["text"]}>
            Your <span style={{"color":"#A000D9"}}>Blocz wallet</span>, contains the virtual tokens that we generate for
            you to learn and play blocz hashing.
          </p>
          <p className={styles["text"]}>
            We hope to explain various <span style={{"color":"#FFC600"}}>De-fi apps and protocols</span> through the blocz
            webapp. The virtual tokens in your wallet are currently stored in a
            centralized wallet held by Blocz. The blocz wallet currently has 6
            tabs ,
          </p>

          <p className={styles["text"]}>
            The wallet : it shows the balance of all countable [fungible ]
            tokens. These tokens will be erc-20 compliant , this means, it can
            interact with the Ethereum Blockchain.
          </p>

          <p className={styles["text"]}>
            You will be able to withdraw and trade the official Blocz ERC-20
            token on Decetralized Exchanges and Centralized Exchanges in the
            near future.
          </p>
        </div>
      </section>

      <section className={styles["help"]}>
        <div className={styles["text-holder"]}>
          <p className={styles["text"]}>
            The NFTS and Collectibles are stored in the second tab of the <span style={{"color":"#A000D9"}}>Blocz wallet</span> . They’re used actively when participating in races and
            winning newer NFTs.
          </p>
          <p className={styles["text"]}>
            This tab will also store the unique Power-Up cards as NFTs in your
            wallet. In the current iteration these NFTs are stored centrally
            inside our servers. In our later iterations we will be storing these
            NFTs on IPFS and a blockchian.
          </p>
          <p className={styles["text"]}>
          <span style={{"color":"#52BA01","fontSize":"1.5rem"}}>Officially Minted Drops</span> can be minted
            on our website and be traded on Opensea or any other ethereum
            marketplace. These drops will be Actual NFTs that will be bridged to
            the Blocz wallet when used.
          </p>

          <p className={styles["text"]}>Drops will be starting shortly</p>

          <p className={styles["text-imp"]}>
            Its alright if you didnt understand mich of what was said above ,
            lets start playing the game and youll learn more along the way !
            <br></br>
            <span style={{"color":"#52BA01","textDecoration":"underline"}}>click below to continue !</span>
          </p>
        </div>
        <div className={styles["image-holder"]}>
          <img
            className={styles["image"]}
            src="/images/bloczwallet3.svg"
            alt="blocz-wallet-image"
          ></img>
        </div>
      </section>
    </div>
  );
}

export default BloczHelp;
