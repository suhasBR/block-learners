import React, { useState } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Sidebar from "../components/Sidebar";
import Wallet from "../components/wallet/Wallet.js";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sequence } from "0xsequence";
import styles from "./Learning.module.css";
import { useDispatch, useSelector } from "react-redux";
import { finishedCard, showMiner } from "../reducers/user";
import {
  addblocz,
  addCollectible,
  closeSnackbar,
  openSnackbar,
} from "../reducers/wallet";

function Learning() {
  const [connected, changeConnected] = useState(false);
  const [address, setAddress] = useState("");

  let dispatch = useDispatch();

  const completed = useSelector((state) => state.user.completed);

  const reward = (id) => {
    if (completed.includes(id)) {
      console.log(id);
      alert("already completed ");
    } else {
      if (id === "003") {
        dispatch(addCollectible("badge.png"));

        dispatch(finishedCard(id));
        dispatch(addblocz(10));
        dispatch(openSnackbar("Won 10 blcz and an NFT"));

        setTimeout(function () {
          dispatch(closeSnackbar());
        }, 2500);
        return;
      }

      if(id === "004"){
        dispatch(showMiner());
        dispatch(finishedCard(id));
        dispatch(addblocz(10));
        dispatch(openSnackbar("Won 10 blcz and a miner"));

        setTimeout(function () {
          dispatch(closeSnackbar());
        }, 2500);
        return;
      }

      dispatch(finishedCard(id));
      dispatch(addblocz(10));
      dispatch(openSnackbar("Won 10 blcz"));

      setTimeout(function () {
        dispatch(closeSnackbar());
      }, 2500);
    }
  };

  const connectWallet = async () => {
    const wallet = new sequence.Wallet("MUMBAI");

    const connectDetails = await wallet.connect({
      app: "Blocz",
      authorize: true,
    });

    console.log("user accepted connect?", connectDetails.connected);
    changeConnected(connectDetails.connected);
    console.log(
      "users signed connect proof to valid their account address:",
      connectDetails.proof
    );

    const address = await wallet.getAddress();
    console.log(address);
    setAddress(address);

    dispatch(finishedCard("004"));
  };

  return (
    <div className={styles["learning-page"]}>
      <NavbarLoggedIn />
      <div className={styles["full-page"]}>
        <div className={styles["sidebar-container"]}>
          <Sidebar />
        </div>

        <div className={styles["main-content"]}>
          <div className={styles["title-container"]}>
            <h1 className={styles["title"]}>Learning</h1>
            <button className={styles["focus-mode-button"]}>Focus mode</button>
          </div>

          <div className={styles["learning-card-holder"]}>
            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>Hello everyone,</b> &#x1F44B;
                </div>
                <div className={styles["content-text"]}>
                  Welcome to Blocz . Blocz is an App that is designed to help
                  you learn about
                  <i>
                    Cryptocurrencies , Decentralised Finance and much much more.
                  </i>
                </div>

                <div className={styles["content-text"]}>
                  We have split up these concepts into multiple pathways and
                  modules .
                  <b>
                    <i>
                      Don't worry you don't need to know anything about crypto
                      to get started.
                    </i>
                  </b>
                  <div className={styles["content-text"]}>
                    Let's have a quick look at your current interface, promise
                    it{" "}
                    <b>
                      <i>won't take more than 30 secs.</i>
                    </b>
                  </div>
                  <div className={styles["content-text"]}>
                    Here you should be able to see the learning tab , which
                    consists of multiple learning cards , like the one you're
                    reading right now.
                  </div>
                  <div className={styles["content-text"]}>
                    Each card will have content usually in the form of video and
                    some written material. The{" "}
                    <b>Video will always summarise</b> the content of the card
                    and alternatively you can read it . At the end of the card
                    you will find a <b>call to action</b> which would be either
                    a button , console , etc. On the top right of the learning
                    you will find the focus mode, you can toggle it on or off to
                    remove all distractions from the page.
                  </div>
                  <div className={styles["content-text"]}>
                    Once you finish the card by going through the call to action
                    you should find a <b>green Tick</b>✅mark on the
                    bottom-right indicating completion.
                  </div>
                  <div className={styles["content-text"]}>
                    That’s about it, go on ahead and finish up this card!
                  </div>
                  <div className={styles["content-video"]}>
                    <img
                      className={styles["yt-thumbnail"]}
                      src="/learning/youtube_placeholder.png"
                      alt="yt thumbnail"
                    />
                  </div>
                  <div className={styles["content-reward"]}>+10 XP</div>
                  <div className={styles["content-action"]}>
                    <button
                      onClick={() => reward("001")}
                      className={styles["action-button"]}
                    >
                      Lets do this! -&gt;
                    </button>
                    {!completed.includes("001") ? (
                      <FaRegCheckCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                      />
                    ) : (
                      <FaRegCheckCircle
                        style={{
                          color: "green",
                          fontSize: "1.5rem",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>Blocz wallet Introduction</b> &#x1F600;
                </div>

                <div className={styles["content-text"]}>
                  <b>To start participating in web3</b> , crypto and blockchains
                  we need an interface. Similar to the web Browsers that act as
                  the gateway to the internet / web2. We will need a{" "}
                  <b>
                    <i>wallet</i>
                  </b>{" "}
                  to interact with web3.
                </div>

                <div className={styles["content-text"]}>
                  We use an inbuilt web3 wallet called <b>Blocz wallet</b>.
                </div>

                <div className={styles["content-text"]}>
                  Open it by clicking on the minimised window on the top right
                  of your screen. You should be able to see the{" "}
                  <i>different tokens</i>
                  on the app. The wallet as the name indicates , contains money
                  , in this case , it contains tokens of a cryptocurrency which
                  are the same as money. We can use wallets to transfer these
                  tokens.
                  <br />
                  Each wallet has a unique address , these addresses are used by
                  web3 apps to interact with your wallet. When you create a
                  wallet a unique address is created for it !
                </div>

                <div className={styles["content-text"]}>
                  <b>Have a look at the few modes in our wallet:</b>
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/wallet_1_instruc.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/wallet_2_instruc.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/wallet_3_instruc.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-text"]}>
                  Wallets are <i>boring with no money</i> , let's add some{" "}
                  <b>tokens</b> to your wallet and <b>fill it up</b>:
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  <button
                    onClick={() => reward("002")}
                    className={styles["action-button"]}
                  >
                    Send me some tokens ! &#x1F680;
                  </button>
                  {!completed.includes("002") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>First NFT</b> &#x1F984;
                </div>

                <div className={styles["content-text"]}>
                  We just talked about the wallet , now let's talk about the
                  tokens that are stored on the wallet.
                </div>

                <div className={styles["content-text"]}>
                  If you’ve been following the news about cryptocurrencies then
                  you should have heard about Bitcoin !<br></br>Bitcoin is
                  basically a token that exists on the bitcoin network. The
                  token acts as a form of currency as it is fungible. This means
                  that this token is exchangeable with the same token.
                </div>

                <div className={styles["content-text"]}>
                  On similar lines we have something called NFTs (they’ve been
                  in the news too , with the $69 million USD sale of Beeple’s
                  artwork , don't worry if you haven't heard of it yet) .
                </div>

                <div className={styles["content-text"]}>
                  NFTs stand for non fungible tokens. These also exist as tokens
                  on the blockchain , but they are Unique and thus cant be
                  exchanged with each other , like you would with bitcoin.
                </div>

                <div className={styles["content-text"]}>
                  NFTs could be in the form of any digital data including
                  pictures , music , filesystems , software , basically any
                  document stored digitally. These NFTs could then represent the
                  underlying data on the blockchain . This means we can check
                  the ownership of the data with the help of the blockchain .
                  This is because just like bitcoin , NFTs are held in wallets.
                </div>

                <div className={styles["content-text"]}>
                  NFTs are still very new and there could be many amazing use
                  cases for storing ownership data of underlying documents!
                </div>

                <div className={styles["content-text"]}>
                  Lets send you an NFT badge &#x1F984; for finishing this much:
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  <button
                    onClick={() => reward("003")}
                    className={styles["action-button"]}
                  >
                    Gimme my first NFT ! -&gt;
                  </button>
                  {!completed.includes("003") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>What is mining</b> &#x26cf;
                </div>

                <div className={styles["content-text"]}>
                  You must have heard about the most famous cryptocurrency{" "}
                  <b>Bitcoin</b>. The Bitcoin network uses Miners to mine
                  bitcoin. What does this even mean ? This means that any
                  computer on the bitcoin network that wants to get rewarded ,
                  acts like a node that records all transactions and generates a
                  block. These miners then solve a computational puzzle to
                  publish the block to the blockchain.
                </div>

                <div className={styles["content-text"]}>
                  The reward that these nodes get are in the form of bitcoin and
                  this process of solving the computation puzzle is called
                  mining.
                </div>

                <div className={styles["content-text"]}>
                  Remember : we use nodes / computers / miners interchangeably
                  in this example.
                </div>

                <div className={styles["content-text"]}>
                  In the next card we will get a deeper understanding of how the
                  network works and why mining is needed. Let us first get a
                  miner ourselves to understand how mining works !
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  <button
                    onClick={() => reward("004")}
                    className={styles["action-button"]}
                  >
                    Get a miner! -&gt;
                  </button>
                  {!completed.includes("004") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>Understanding hashing and the blockchain</b> &#x1F600;
                </div>

                <div className={styles["content-text"]}>
                  <i>
                    This is a slightly longer card , If you find the explanation{" "}
                    <b>complex</b> , you can read the{" "}
                    <b>tldr part / see the video</b> , don't worry if you don't
                    get the concept , we will go over the same concept later as
                    well !
                  </i>
                </div>

                <div className={styles["content-text"]}>
                  Now that we have our Miner , let's understand the blockchain
                  network. For this example we will consider the Bitcoin
                  Network.
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/blockchain_explain_1.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-text"]}>
                  The blockchain is basically a distribution of multiple
                  computers which have the same data. This data is stored in a
                  sequential manner like a ledger. When people transact they
                  send the transaction data to one of these computers (also
                  called nodes , they are also called miners in case of the
                  bitcoin network ) . The nodes spread the data amongst
                  themselves and put it into their personal storage area called
                  the public mempool.
                </div>

                <div className={styles["content-text"]}>
                  Now once the nodes have the transaction data they add these
                  different transactions to make a block. Each node may make its
                  own block as long as the total data in it is less than 1MB of
                  data ( for Bitcoin ). They can add the transactions in any
                  order , and can include whichever transaction they want from
                  the mempool.
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/blockchain_explain_2.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-text"]}>
                  For example 6 transactions have taken place , A, B , C , X, Y
                  , Z . Now node 1 and node 2 bundle up the transactions :
                </div>

                <div className={styles["content-text"]}>
                  <b>
                    Node 1: transaction A, B, C<br></br>
                    Node 2: transaction X, B, Y
                  </b>
                </div>

                <div className={styles["content-text"]}>
                  Now, if both miners submit their blocks at once , they will be
                  effectively spamming the network . Not only that , but if both
                  their blocks are included in the blockchain , then the same
                  transaction is repeated again . We can see this causes the “
                  <b>double spending problem !</b>” . As in the transaction B is
                  included twice , that would mean Bob is sending Alice the
                  money twice , but this is not true .
                </div>

                <div className={styles["content-text"]}>
                  So to solve this , <i>Satoshi Nakamoto</i> ( the creator of
                  bitcoin ) envisioned a smart system by which the nodes can
                  only submit transactions after a set of complex mathematical
                  operations. By this it became difficult for two miners to
                  submit two blocks at the same time. To verify the transactions
                  the miners have to just run the hash with the nonce to figure
                  out if it was a valid hash.
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/blockchain_explain_3.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-image"]}>
                  <img
                    className={styles["img"]}
                    src="/learning/blockchain_explain_4.png"
                    alt="wallet1"
                  />
                </div>

                <div className={styles["content-text"]}>
                  As soon as one miner finds the nonce it sends the{" "}
                  <i>
                    <b>block data and nonce</b>
                  </i>{" "}
                  to the miners. The other miners run the hash just once to
                  verify if the hash is less than the target value. This process
                  of validation is really quick and thus once everyone validates
                  the block it is added to blockchain, And finally the
                  transactions from the block are removed from the Mempool.
                </div>

                <div className={styles["content-text"]}>
                  As soon as the block is added, the miner who made the block
                  receives a block reward from the blockchain and thus , this
                  process of receiving a new bitcoin by expending computing
                  power is called mining.
                </div>

                <div className={styles["content-text"]}>
                  Meanwhile on Bob's end, he can see that the transaction has
                  been processed and the money has been deducted from his
                  account.
                </div>

                <div className={styles["content-text"]}>
                  <i>
                    <b>TLDR:</b>
                  </i>
                  In short the blockchain is basically a distributed ledger that
                  stores the data of all transactions on each node. The way that
                  they prevent spam on the network , and prevent double spending
                  is with the Proof of Work hashing.
                </div>

                <div className={styles["content-text"]}>
                  Extra material:😅 Don't sweat it , We will cover the topic of
                  hashing once again in the “Explain the Blockchain Module”
                </div>

                <div className={styles["content-text"]}>
                  A reason for the block-chain to achieve consensus <br></br>
                  <a
                    target="_blank"
                    href="https://medium.com/hupayx/how-are-blockchain-transactions-validated-consensus-vs-validation-ada9c001fd0a"
                  >
                    https://medium.com/hupayx/how-are-blockchain-transactions-validated-consensus-vs-validation-ada9c001fd0a
                  </a>
                </div>

                <div className={styles["content-text"]}>
                  Now that you have a good idea of the blockchain , let's run a
                  single node of the blockchain locally and test out the process
                  of hashing.
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  <button
                    onClick={() => reward("005")}
                    className={styles["action-button"]}
                  >
                    Let's do Mining on a local network ! -&gt;
                  </button>
                  {!completed.includes("005") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>Sequence Wallet !</b> &#x26cf;
                </div>

                <div className={styles["content-text"]}>
                  The sequence wallet is a very user-friendly wallet that you
                  can download now and do a real mint of the NFT. Go to the
                  website below to login to your first web3 wallet. Sequence
                  wallet login is very easy , and you can login using google/
                  facebook /apple/discord/twitch !
                </div>

                <div className={styles["content-text"]}>
                  Visit the website below to create your Sequence wallet.
                </div>

                <div className={styles["content-text"]}>
                  <a href="https://sequence.app/auth" target="_blank">
                    https://sequence.app/auth
                  </a>
                </div>

                <div className={styles["content-text"]}>
                  As soon as you create the wallet , just connect the wallet
                  with our website by clicking on the 'Connect Sequence Wallet'
                  button below
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  {!connected ? (
                    <button
                      className={styles["action-button"]}
                      onClick={connectWallet}
                    >
                      Connect Sequence Wallet
                    </button>
                  ) : (
                    <button className={styles["action-button"]}>
                      Connected
                    </button>
                  )}

                  {!completed.includes("006") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles["learning-card"]}>
              <div className={styles["green-tick-holder"]}>
                <div className={styles["green-tick"]}></div>
              </div>

              <div className={styles["content"]}>
                <div className={styles["content-text"]}>
                  <b>NFT drop</b> &#x26cf;
                </div>

                <div className={styles["content-text"]}>
                  Hey there isnt any matic in your wallet. Head over to this
                  faucet : to get Some matic in your Wallet !<br></br>
                  Let's participate in an NFT drop to further upgrade your
                  Miner. This is completely optional and shouldn't affect your
                  early game as much. You can always come back and mint your
                  first NFT drop through this card.
                </div>

                <div className={styles["content-text"]}>
                  NFt drops are when a company/ organisation decides to release
                  NFTs at list price to the public. It's basically the first day
                  of their sales.
                </div>

                <div className={styles["content-video"]}>
                  <img
                    className={styles["yt-thumbnail"]}
                    src="/learning/youtube_placeholder.png"
                    alt="yt thumbnail"
                  />
                </div>
                <div className={styles["content-reward"]}>+10 XP</div>
                <div className={styles["content-action"]}>
                  <Link to="/mint">
                    <button className={styles["action-button"]}>
                      Go to drop Website! -&gt;
                    </button>
                  </Link>
                  {!completed.includes("007") ? (
                    <FaRegCheckCircle
                      style={{
                        fontSize: "1.5rem",
                      }}
                    />
                  ) : (
                    <FaRegCheckCircle
                      style={{
                        color: "green",
                        fontSize: "1.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["wallet-container"]}>
          <Wallet />
        </div>
      </div>
    </div>
  );
}

export default Learning;
