import React from 'react';
import styles from  "./Snackbar.module.css";

function Snackbar({text}) {
  return (
    <div className={styles["snackbar"]}>
    <p className={styles["text"]}>
      {text}
    </p>
  </div>
  )
}

export default Snackbar