import React from 'react';
import styles from "./Divider.module.css";

function Divider() {
  return (
    <div className={styles["divider"]}>
        <hr className={styles["divider-line"]}></hr>
    </div>
  )
}

export default Divider