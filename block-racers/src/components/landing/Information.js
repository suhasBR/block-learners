import React from 'react'
import styles from "./Information.module.css";

function Information() {
  return (
    <div id="about" className={styles["information-section"]}>
        <div className={styles["information-board"]}>
            <h3 className={styles["text"]}>Still not sure ?</h3>
            <h3 className={styles["text"]}>Ask us questons on Discord, ping us on twitter</h3>
            <div className={styles["buttons"]}>
                <button className={styles["button"]}>Join our discord -&gt;</button>
                <button className={styles["button"]}>Ping us on Twitter -&gt;</button>
            </div>
        </div>
    </div>
  )
}

export default Information