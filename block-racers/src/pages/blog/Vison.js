import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./Blog.module.css";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider";

function Vison() {
  return (
    <div className={styles["full-page"]}>
      <Navbar />

      <div className={styles["main-content"]}>
        <h1 className={styles["title"]}>Vision</h1>

        <p className={styles["text"]}>
          <b>What is the vision of Blocz ?</b>
          <br></br>
          The aim of Blocz is to onboard a billion users to Web3.
        </p>

        <p className={styles["text"]}>
          Blocz aims to create a very unique crypto ecosystem with the mechanism
          of <b>“Play to Learn to Earn”</b>. We plan on following 2 major rules
          for this app.
        </p>

        <p className={styles["text"]}>
          Blocz tokens cannot be minted in conventional ways. They can only be
          minted by:
        </p>

        <ol>
          <li>
            By using <b>knowledge</b> i.e :-
            <ul>
              <li>Finishing the Learning Cards </li>
              <li>Doing daily smart contract challenges</li>
              <li>
                Contributing to Cards , Crypto concepts by content generation
              </li>
              <li>Participating in Q n A in the blocz Community</li>
            </ul>
          </li>
          <li>
          By <b>participating</b> in the ecosystem
            <ul>
              <li>By crafting new components for your miners</li>
              <li>By hash racing</li>
              <li>By inviting other users and spreading the crypto-fluency</li>
              <li>
                By participating in AMMs, Swaps, Bridges, experiments in/to the
                Blocz ecosystem
              </li>
              <li>
                By participating in Economy based games in the Blocz Ecosystem
              </li>
            </ul>
          </li>
        </ol>

        <p className={styles["text"]}>
          This ensures that no one will have a heavy unfair advantage when
          starting out. We hope to increase the participation of people in
          meaningful ways and include them in the crypto community.
        </p>

        <h2 className={styles["subtitle"]}>
            How the Idea started
        </h2>

        <p className={styles["text"]}>
        It is difficult for the average user to even access 
        crypto currency let alone use it. Multiple apps and centralised exchanges have come about to ease that transition, Yet most people lack access to the economic resources to even buy some crypto . Banks end up blocking payments ( at-least in India and other countries ) and
         overall fewer people get to participate in the ecosystem.
        </p>

        <p className={styles["text"]}>
        This has created an imbalance in the system where only those who have the privilege, Money, and resources  of participating can do so. It has even created an aversion and thus a very small subset of people are 
        driving the community while others are mostly left out.
        </p>

        <p className={styles["text"]}>
        What if we could incentivise people to put in some effort to get access to the crypto ecosystem. In our case we first give them non fungible tokens to start participating in the ecosystem , then give them an opportunity to  learn more crypto currency ,
         while giving them more tokens as they understand more of De-Fi.
        </p>

        <p className={styles["text"]}>
        We believe this has the cumulative effect of 
        getting more people into the system , while making them more curious. 
        </p>

        <ul>
            <li>People who understand more about crypto become advocates for crypto</li>
            <li>They are more likely to invest in crypto and use user friendly wallets</li>
            <li>They will help to build a more accessible , distributed economy.</li>
            <li>People who eventually gain higher expertise will be able to use it to further write smart contracts and bring more businesses into web3.</li>
        </ul>

      </div>
      <Divider/>
      <Footer/>
    </div>
  );
}

export default Vison;
