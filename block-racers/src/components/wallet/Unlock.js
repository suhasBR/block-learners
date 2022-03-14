import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import styles from "./Unlock.module.css";
import { loadUser } from "../../actions/register";
import {updateWalletAddress} from "../../reducers/wallet";
import { updateAddress } from "../../reducers/user";

function Unlock() {
  const dispatch = useDispatch();

  const createWallet = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({});

    try {
      const res = await axios.post("https://blocz.herokuapp.com/api/v1/bloczwallet/create");
      const data = res.data.newWallet;

      console.log(data);

      const addr = data.bloczAddress;

      dispatch(updateWalletAddress(addr));
      dispatch(updateAddress(addr));
    } catch (error) {
      console.log(error);
      const actualError = error.response.data.msg;
      alert(actualError);
    }
  };

  return (
    <div>
      <div className={styles["top-section"]}>
        <img
          src="images/logo.svg"
          className={styles["logo-img"]}
          alt="logo"
        ></img>
      </div>

      <h2 className={styles["title"]}>Welcome</h2>

      <p className={styles["text"]}>
        press below to unlock and create your new Blocz wallet !
      </p>

      <button onClick={createWallet} className={styles["unlock-button"]}>
        Unlock
      </button>

      <p className={styles["text"]}>
        Need help ? visit the Blocz wallet help page
      </p>
    </div>
  );
}

export default Unlock;
