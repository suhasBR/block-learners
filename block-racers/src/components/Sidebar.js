import React from "react";
import { ImBooks } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {

  const username = useSelector((state) => state.user.user.username)
  const minerDone = useSelector((state) => state.user.minerDone);


  return (
    <div className={styles["sidebar-full"]}>
      <div className={styles["links-holder"]}>
        <Link to="/modules">
          <div className={styles["link"]}>
            <ImBooks
              style={{
                fontSize: "1rem",
              }}
            />
            <p className={styles["text"]}>Chapters</p>
          </div>
        </Link>
        <div className={styles["link"]}>
          <FaRegCheckCircle
            style={{
              fontSize: "1rem",
            }}
          />
          <p className={styles["text"]}>Completed Learning</p>
        </div>
        <Link to="/dashboard">
          <div className={styles["link"]}>
            <MdDashboard
              style={{
                fontSize: "1rem",
              }}
            />
            <p className={styles["text"]}>Dashboard</p>
          </div>
        </Link>
        <div className={styles["link"]}>
          <BsFillGearFill
            style={{
              fontSize: "1rem",
            }}
          />
          <p className={styles["text"]}>Edit Profile</p>
        </div>
      </div>

      <div className={styles["profile-container"]}>
        <div className={styles["profile-pic-holder"]}>
          <div className={styles["gtltholder"]}>
            <p className={styles["nav"]}>&lt;</p>
          </div>

          {
            minerDone ? (
              <img
              className={styles["profile-image"]}
              src="/images/miner_image.svg"
              alt="miner-profile"
            ></img>
            ):(
              <img
              className={styles["profile-image"]}
              src="/learning/question_mark.png"
              alt="miner-profile"
            ></img>
            )
          }
        
          <div className={styles["details"]}>
            <div className={styles["name"]}>
              <p className={styles["name-text"]}>N-Miner #345</p>
            </div>
            <div className={styles["progress-bar"]}>
              <div className={styles["fill"]}></div>
            </div>
            <p className={styles["progress-bar-text"]}> Lv-2 </p>
            <p className={styles["progress-bar-text"]}>36/90 XP</p>
          </div>

          <div className={styles["gtltholder"]}>
            <p className={styles["nav"]}>&gt;</p>
          </div>
        </div>

        <div className={styles["profile-name-holder"]}>
        <p className={styles["text"]}>{username}</p>
        </div>
   
      </div>
    </div>
  );
}

export default Sidebar;
