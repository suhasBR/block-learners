import React, { Fragment, useState } from "react";
import styles from "./Common.module.css";
import NavbarLoggedIn from "../../components/NavbarLoggedIn";
import Divider from "../../components/Divider";
import Wallet from "../../components/wallet/Balance";
import Footer from "../../components/Footer";

function MinerProfile() {
  const [section, changeSection] = useState(1);

  return (
    <Fragment>
      <div className={styles["chapters-page"]}>
        <NavbarLoggedIn />
        <div className={styles["full-page"]}>
          <section className={styles["main-content"]}>
            <div className={styles["navigation"]}>
              <h2 className={styles["navigation-title"]}>Chapters</h2>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>basics</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>defi investing</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>defi understanding</h3>
              </div>
              <div className={styles["card"]}>
                <h3 className={styles["card-title"]}>smart contracts</h3>
              </div>
            </div>

            <div className={styles["content-text"]}>
              <div className={styles["cover-image-holder"]}>
                <img src="../images/articlecover.svg" className={styles["cover-img"]}/>
              </div>

              <div className={styles["title-holder"]}>
                <h1 className={styles["article-title"]}>Blocz Basics</h1>
                <h4 className={styles["article-duration"]}>3 mins</h4>
              </div>

              <p className={styles["paragraph"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laborum suscipit impedit sunt obcaecati necessitatibus, voluptate reiciendis
                 nulla nihil laudantium illum qui at nam, molestias animi expedita nemo maiores facilis quos, quam repellat dicta! Laudantium ipsam neque animi quisquam sunt nisi ab tempore culpa voluptas esse sequi nostrum vero adipisci, ut doloremque, autem corrupti rerum hic fugiat alias placeat totam molestiae in dolorem. Omnis ea laudantium quis fugit! Quisquam quibusdam illum impedit, deleniti cumque dolorem nostrum rerum animi voluptatibus aliquid quos nam rem maxime, incidunt ipsam sit dolore delectus totam fuga eum. 
                Aliquid eveniet tenetur reprehenderit eum cupiditate quidem fugit sapiente.
              </p>

              <p className={styles["paragraph"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laborum suscipit impedit sunt obcaecati necessitatibus, voluptate reiciendis
                 nulla nihil laudantium illum qui at nam, molestias animi expedita nemo maiores facilis quos, quam repellat dicta! Laudantium ipsam neque animi quisquam sunt nisi ab tempore culpa voluptas esse sequi nostrum vero adipisci, ut doloremque, autem corrupti rerum hic fugiat alias placeat totam molestiae in dolorem. Omnis ea laudantium quis fugit! Quisquam quibusdam illum impedit, deleniti cumque dolorem nostrum rerum animi voluptatibus aliquid quos nam rem maxime, incidunt ipsam sit dolore delectus totam fuga eum. 
                Aliquid eveniet tenetur reprehenderit eum cupiditate quidem fugit sapiente.
              </p>
              
            </div>
          </section>

          <div className={styles["wallet-container"]}>
            <Wallet />
          </div>
        </div>
        <Divider />
        <Footer />
      </div>
    </Fragment>
  );
}

export default MinerProfile;
