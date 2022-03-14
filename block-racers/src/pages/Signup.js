import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Signup.module.css";
import Divider from "../components/Divider";
import { Link } from "react-router-dom";
import { loadUser } from "../actions/register";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  let navigate = useNavigate();

  const isAuth = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuth) {
      navigate("/learning");
    }
  }, [isAuth]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const changeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const signup = async () => {
    let { username, email, password1, password2 } = formData;
    if (
      username === "" ||
      email === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      return alert("One or more fields are empty");
    }

    if (password1 !== password2) {
      return alert("Passwords do not match !");
    }

    const password = password1;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password });

    console.log(body);

    try {
      const res = await axios.post(
        "https://blocz.herokuapp.com/api/v1/user/register",
        body,
        config
      );
      const data = res.data;

      localStorage.setItem("token", data.token);

      loadUser();
    } catch (error) {
      const actualError = error.response.data.msg;
      alert(actualError);
    }
  };

  const guestLogin = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const guest = "guest" + makeid(5);

    const body = JSON.stringify({
      username: guest,
      email: `${guest}guest123@gmail.com`,
      password: "admin",
    });

    console.log(body);

    try {
      const res = await axios.post(
        "https://blocz.herokuapp.com/api/v1/user/register",
        body,
        config
      );
      const data = res.data;

      localStorage.setItem("token", data.token);

      loadUser();
    } catch (error) {
      const actualError = error.response.data.msg;
      alert(actualError);
    }
  };

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div className={styles["signup-page"]}>
      <Navbar />
      <section className={styles["main-section"]}>
        <div className={styles["signup-box"]}>
          <h2 className={styles["title"]}>Sign Up</h2>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Username</label>
            <div className={styles["input-wrapper"]}>
              <input
                type="text"
                name="username"
                onChange={(e) => changeForm(e)}
                className={styles["input"]}
                required
              ></input>
              <FaRegCheckCircle
                style={{
                  color: "green",
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Email ID</label>
            <div className={styles["input-wrapper"]}>
              <input
                type="text"
                name="email"
                onChange={(e) => changeForm(e)}
                className={styles["input"]}
                required
              ></input>
              <FaRegCheckCircle
                style={{
                  color: "green",
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Password</label>
            <div className={styles["input-wrapper"]}>
              <input
                type="password"
                name="password1"
                onChange={(e) => changeForm(e)}
                className={styles["input"]}
                required
              ></input>
              <FaRegCheckCircle
                style={{
                  color: "green",
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Confirm Password</label>
            <div className={styles["input-wrapper"]}>
              <input
                type="password"
                name="password2"
                onChange={(e) => changeForm(e)}
                className={styles["input"]}
                required
              ></input>
              <FaRegCheckCircle
                style={{
                  color: "green",
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>

          <button onClick={signup} className={styles["signup"]}>
            Sign up
          </button>

          <Link to="/login">
            <h4 className={"sign-in-instead"}>Sign In Instead</h4>
          </Link>

          <p className={styles["message"]}>
            Not sure and want to just look around ? Continue as a guest and
            update your user info later
          </p>
          <Link to="/learning">
            <button
              onClick={guestLogin}
              className={styles["continue-as-guest"]}
            >
              Continue as a Guest
            </button>
          </Link>
        </div>
      </section>
      <Divider />
      <Footer />
    </div>
  );
}

export default Signup;
