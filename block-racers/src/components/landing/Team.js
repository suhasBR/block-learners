import React from "react";
import styles from "./Team.module.css";

function Team() {
  return (
    <div id="team" className={styles["team-section"]}>
      <h3 className={styles["title"]}>
        The
        <span className={styles["text-gradient"]}> Team</span>
      </h3>

      <div className={styles["team-members"]}>
        <div className={`${styles["member"]} ${styles["first-member"]}`}>
          <img
            className={styles["image"]}
            src="/images/sanjay.svg"
            alt="sanjay"
          />
          <p className={styles["member-description"]}>
            Anoobonajourney / Sanjay, trying to simplify crypto
          </p>
          <div className={styles["icons"]}>
            <a
              href="https://twitter.com/compscrypto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["twitter"]}
                src="/images/twitter.svg"
                alt="twitter-logo"
              />
            </a>

            <a
              href="https://twitter.com/compscrypto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["twitter"]}
                src="/images/discord.svg"
                alt="discord-logo"
              />
            </a>


            <a
              href="https://twitter.com/compscrypto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["twitter"]}
                src="/images/instagram.png"
                alt="instagram-logo"
              />
            </a>
          </div>
        </div>

        <div className={`${styles["member"]} ${styles["second-member"]}`}>
          <img
            className={styles["image"]}
            src="/images/ancientnerd.svg"
            alt="ancientnerd"
          />
          <p className={styles["member-description"]}>
            Ancientnerd / XXXXX. Diving into web3
          </p>
          <div className={styles["icons"]}>
            <a
              href="https://twitter.com/compscrypto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["twitter"]}
                src="/images/twitter.svg"
                alt="twitter-logo"
              />
            </a>

            <a
              href="https://twitter.com/compscrypto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles["twitter"]}
                src="/images/discord.svg"
                alt="discord-logo"
              />
            </a>

          </div>
        </div>

        <div className={`${styles["member"]} ${styles["third-member"]}`}>
          <div className={`${styles["image"]} ${styles["image-advisor"]}`}>
            <p className={styles["plus"]}>+</p>
          </div>

          <p className={styles["member-description"]}>
            Looking for advisors, the next person could be you !
          </p>
          <div className={styles["icons"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
