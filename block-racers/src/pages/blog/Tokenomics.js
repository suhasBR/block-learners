import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./Blog.module.css";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider";

function Tokenomics() {
  return (
    <div className={styles["full-page"]}>
      <Navbar />

      <div className={styles["main-content"]}>
        <h1 className={styles["title"]}>Tokenomics</h1>

        <p className={styles["text"]}>
        We hope to use the Play to Learn to Earn model to create an economic system that is sustainable from the get go.Unlike conventional economic systems Blocz will not have any miners. 
        They will mint tokens based on 2 main principles/tenets.
        </p>

        <p className={styles["text"]}>
        Blocz has two core tenets as discussed in the Vision:
        </p>

        <ol>
            <li>Knowledge is power and should be rewarded with money</li>
            <li>Participation in an economy is key to its success</li>
        </ol>

        <br></br>
        <br></br>

        <ol>
          <li>
            By using <b>knowledge</b> i.e :-
            <ul>
              <li>Finishing the Learning Cards  (pure inflation +++ , individual value add+) [roadmap - initial 12 months from april 2022 (start) ]</li>
              <li>Doing daily smart contract challenges ( inflationary ++ , value add ++++ ) [roadmap - 3 to 6 months post start ]</li>
              <li>
              Contributing to Cards , Crypto concepts by content generation ( inflationary +, value add+ ) [roadmap - 3 to 6 months post start ]
              </li>
              <li>Participating in QnA in the blocz Community (inflationary +, value add+ ) [roadmap - 3 to 6 months post start ]</li>
            </ul>
          </li>
          <li>
          By <b>participating</b> in the ecosystem
            <ul>
              <li>By crafting new components for your miners ( deflationary +++ ) [roadmap - 3 to 24 months post start ]</li>
              <li>By hash racing ( deflationary + and inflationary + ) [roadmap - 1- 2 months post start ]</li>
              <li>By inviting other users and spreading the crypto-fluency ( pure inflationary + ) [ roadmap 1 month post start ]</li>
              <li>
              By participating in AMMs , Swaps , Bridges, experiments  in/to the Blocz ecosystem ( inflationary + , value add +++ ) [roadmap  3 to 6 months post start ]
              </li>
              <li>
              By participating in Economy based games in the Blocz Ecosystem ( deflationary +++ , value add + ) [roadmap - 6 months post start ]
              </li>
            </ul>
          </li>
        </ol>

        <p className={styles["text"]}>
        We have currently created a list of activities that will increase the overall tokens in circulation , while also a few that will decrease overall tokens in circulation. 

We aim to slowly taper the rewards for each activity as time goes on and thus incentivize users to join early and also to push them to greater understanding of De-Fi and Crypto. The following excel sheet will give a better picture of token minted on complete learning of crypto concepts-&gt;

        </p>

        <div className={styles["img-holder"]}><img src="/blog/tokenomics_1.png" alt="tokenomics excel snapshop"/></div>

        <p className={styles["text"]}>
        The excel shows the tapered rewards for the learning as users come into the system to learn. Thus it's advisable to join earlier and learn more than everyone else to maintain and gain the reward levels as much as possible.
        </p>

        <p className={styles["text"]}>
        We would also like to stress the point that our primary goal in the initial stages is to onboard as many people to crypto as possible and generate maximum value for our users.
        </p>

        <p className={styles["text"]}>
        The applied tokenomics will be more complex and will change with time, but it will follow closely the pattern shown above.
        </p>


      </div>
      <Divider/>
      <Footer/>
    </div>
  );
}

export default Tokenomics;
