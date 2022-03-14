import React, {useState} from "react";
import styles from "./Landing.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainSection from "../components/landing/MainSection";
import Divider from "../components/Divider";
import Cards from "../components/landing/Cards";
import Team from "../components/landing/Team";
import Information from "../components/landing/Information";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { walletLogin, unsetLoading } from "../reducers/user";


function Landing() {

  let navigate = useNavigate();
  const dispatch = useDispatch();


  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openHelp = () => {
    navigate('/metamask')
  }

  // Polygon Mumbai testnet details
  const networks = {
    polygon: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Mumbai Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.matic.today/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  };

  const connectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       //change network to Polygon Mumbai
  //       const sw = await window.ethereum.request({
  //         method: "wallet_addEthereumChain",
  //         params: [
  //           {
  //             ...networks["polygon"],
  //           },
  //         ],
  //       });

  //       //connect wallet
  //       const result = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAddress(result[0]);
  //       //store the address in redux state
  //       dispatch(walletLogin(result[0]));

  //       //navigate to the miner profile page
  //       navigate('/signup');

  //     } catch (error) {
  //       dispatch(unsetLoading());
  //       console.log(error.message);
  //     }
  //   } else {
  //     handleClickOpen();
  //   }
  // };
  // navigate('/signup');

  }


  return (
    <div className={styles["landing-page"]}>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hello from Blocz"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To proceed further you will need a wallet, we suggest you to use metamask
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={openHelp}>Learn More</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
      <Navbar connectWalletHandler={connectWallet} address={address}/>
      <MainSection connectWalletHandler={connectWallet} />
      <Divider />
      <Cards />
      <Divider />
      <Team />
      <Divider />
      <Information />
      <Divider />
      <Footer />
    </div>
  );
}

export default Landing;
