import React, { Fragment, useState } from "react";
import styles from "./Wallet.module.css";
import { FaHistory, FaMinus, FaPlus, FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { BsGearFill, BsGrid3X3Gap, BsPeopleFill } from "react-icons/bs";
import Balance from "./Balance";
import Unlock from "./Unlock";
import Log from "./Log";
import Collectibles from "./Collectibles";
import { useSelector } from "react-redux";
import Snackbar from "./Snackbar";


function Wallet() {
  const [wallet, openWallet] = useState(false);
  const walletDetails = useSelector((state) => state.wallet);

  const openSnackbar = useSelector((state) => state.wallet.snackopen);
  const snacktext = useSelector((state) => state.wallet.snacktext);

  const [page, changePage] = useState(0);

  const toggleVisibility = () => {
    const temp = wallet;
    openWallet(!temp);
  };

  const bloczAddress = useSelector((state) => state.user.bloczAddress);

  return (
    <div className={styles["wallet-full"]}>
      <div className={styles["horizontal-bar"]}>
        <div className={styles["connected"]}></div>

        <div className={styles["balance"]}>${walletDetails.bloczbal}</div>

        <div onClick={toggleVisibility} className={styles["expander"]}>
          {!wallet ? <FaPlus /> : <FaMinus />}
        </div>
      </div>

      {wallet && (
        <div className={styles["wallet-main"]}>
          <div className={styles["header"]}>
            <div className={styles["logo-holder"]}>
              <img
                src="images/logo.svg"
                className={styles["logo-img"]}
                alt="logo"
              ></img>
            </div>
            <div className={styles["central-network"]}>
              Blocz Central Network
            </div>
          </div>
          
          {!bloczAddress ? (
            <Unlock />
          ) : page === 0 ? (
            <Balance />
          ) : page === 1 ? (
            <Collectibles />
          ) : page === 2 ? (
            <Balance />
          ) : page === 3 ? (
            <Balance />
          ) : page === 4 ? (
            <Log />
          ) : page === 5 ? (
            <Balance />
          ) : (
            <Balance />
          )}
          
          <div className={styles["footer"]}>
            <FaWallet
              className={styles["icon"]}
              onClick={() => changePage(0)}
            />
            <BsGrid3X3Gap
              className={styles["icon"]}
              onClick={() => changePage(1)}
            />
            <BiTransfer
              className={styles["icon"]}
              onClick={() => changePage(2)}
            />
            <FaHistory
              className={styles["icon"]}
              onClick={() => changePage(3)}
            />
            <BsPeopleFill
              className={styles["icon"]}
              onClick={() => changePage(4)}
            />
            <BsGearFill
              className={styles["icon"]}
              onClick={() => changePage(5)}
            />
          </div>
          {
            openSnackbar && (<Snackbar text={snacktext}/>)
          }
          
        </div>
      )}
    </div>
  );
}

export default Wallet;
