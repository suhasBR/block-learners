import React, {useState, Fragment} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import styles from "./Mint.module.css";
import MinerNFTABI from "../abi/MinerNFT.json";
import { ethers } from "ethers";
import { sequence } from "0xsequence";

function Mint() {
  const [connected, walletConnect] = useState(false);

  const [provider, changeProvider] = useState(null);

  const contractAddress = "0x56c9602ba0d24adb6e64660742C7F1dc838DF206";

  const mintLevel2 = async () => {
    let uri =
      "https://ipfs.io/ipfs/bafybeiarix4ysffhp7s2hcbhj2n5y2rkx5qfcol5ii2qqj3w4g46b32xqy/0";

    // let  tempProvider = new ethers.providers.Web3Provider(window.ethereum);

    let tempSigner = provider.getSigner();

    let tempContract = new ethers.Contract(
      contractAddress,
      MinerNFTABI,
      tempSigner
    );

    console.log(tempContract);
    

    //exeucte mint function from contract
    try {
      await tempContract.functions.mint(uri, { value: "10000000000000000" });
      alert("done");
    } catch (error) {
      console.log(error);
    }
  };

  const connectSequence = async() => {
    const wallet = new sequence.Wallet("MUMBAI");

    const connectDetails = await wallet.connect({
      app: "Blocz",
      authorize: true,
    });

    const providerTemp = wallet.getProvider();

    changeProvider(providerTemp);
    walletConnect(true)
  }

  // Polygon Mumbai testnet details
const networks ={
  polygon: {
    chainId : `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai Testnet",
    nativeCurrency: {
      name : "MATIC",
      symbol: "MATIC",
      decimals : 18
    },
    rpcUrls: ["https://rpc-mumbai.matic.today/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
  }
}

  const connectMetamask = async() => {

    if (window.ethereum) {
      
    try {
      //change network to Polygon Mumbai
     const sw =  await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params : [
          {
            ...networks['polygon']
          }
        ]
      })


      //connect wallet
      const result = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(result);

      let  tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      changeProvider(tempProvider);
      walletConnect(true)

    }
    catch(err){
      console.log(err);
    }
    
  }

}

  return (
    <div className={styles["mint-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar />
        </div>

        <div className={styles["main-content"]}>
          <h1 className={styles["title"]}>NFT Drops</h1>
          <div className={styles["nft-holder"]}>
            <img src="/images/attack1.svg" alt="nft" />
          </div>

          <div className={styles["connect-buttons"]}>
          <button onClick={connectSequence}
          className={styles["connect-sequence"]}>Connect Sequence</button>

          <button onClick={connectMetamask}
          className={styles["connect-metamask"]}>Connect Metamask</button>

</div>

          {connected ? (
            <Fragment>
              <button className={styles["mint-button"]} disabled>Mint Lv1</button>

              <button onClick={mintLevel2} className={styles["mint-button"]}>
                Mint Lv2
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button className={styles["mint-button"]} disabled>Mint Lv1</button>

              <button onClick={mintLevel2} className={styles["mint-button"]} disabled>
                Mint Lv2
              </button>
            </Fragment>
          )}

          <p className={styles["price"]}>Price: 0.01 Matic</p>
        </div>

        <div className={styles["wallet-container"]}>
          <Wallet />
        </div>
      </div>
    </div>
  );
}

export default Mint;
