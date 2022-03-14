import React from 'react'
import styles from "./Cards.module.css";

function Cards() {
  return (
    <div id="cards" className={styles["cards-section"]}>
        <h3 className={styles["title"]}>
            Learn by Participating in a <br></br> 
            <span className={styles["text-gradient"]}>Crypto Economy</span>
        </h3>

        <div className={styles["cards"]}>
            <div className={`${styles["card"]} ${styles["first-card"]}`}>
                <img className={styles["image"]} 
                src="/images/card1.svg" alt="card1" />
                <p className={styles["card-description"]}>
                    Risk free participation, simulated crypto  smooth on-boarding to De-Fi
                </p>
            </div>

            <div className={`${styles["card"]} ${styles["second-card"]}`}>
                <img className={styles["image"]} 
                src="/images/card2.svg" alt="card1" />
                <p className={styles["card-description"]}>
                    Have Fun, Race Hard, Earn tokens and level up your blocz
                </p>
            </div>


            <div className={`${styles["card"]} ${styles["third-card"]}`}>
                <img className={styles["image"]} 
                src="/images/card3.svg" alt="card1" />
                <p className={styles["card-description"]}>
                    Deconstruct complex topics with the community and get exciting drops
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards