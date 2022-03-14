import React,{useState, useEffect} from "react";
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { loadUser } from "../actions/register";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {

  let navigate = useNavigate();

  const isAuth = useSelector((state) => state.user.isAuthenticated);

  const [formData, setFormData] = useState({
    user : '',
    password:''
});

useEffect ( () => {
  if(isAuth){
    navigate('/learning');
  }
},[isAuth]);

const changeForm = (e) => setFormData({...formData,[e.target.name] : e.target.value});

const loginHandler = async() => {
  console.log(formData);
  let {user,password} = formData;
  let username = '';
  let email = '';
  if(user.includes("@")){
    email = user;
  }
  else{
    username = user;
  }

  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const body = JSON.stringify({username,email,password});

try {
    const res = await axios.post('https://blocz.herokuapp.com/api/v1/user/login',body,config);
    const data = res.data;

    navigate("/learning");

    localStorage.setItem('token',data.token);

    loadUser();

    

    

} catch (error) {
    const actualError = error.response.data.msg;
    alert(actualError);
}

  
 
  
}


  return (
    <div className={styles["login-page"]}>
      <Navbar />
      <section className={styles["main-section"]}>
        <div className={styles["login-box"]}>
          <h2 className={styles["title"]}>Login</h2>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Username/Email</label>
            <input type="text" name="user" onChange={e => changeForm(e)}
            className={styles["input"]}></input>
          </div>
          <div className={styles["input-holder"]}>
            <label className={styles["input-label"]}>Password</label>
            <input type="password" name="password" onChange={e => changeForm(e)}
            className={styles["input"]}></input>
          </div>
          <div className={styles["links-holder"]}>
              <p className={styles["link"]}>Forgot Password?</p>
              <Link to="/signup">
              <p className={styles["link"]}>Sign up</p>
              </Link>
          </div>
          <p className={styles["wallet-message"]}>Or sign-in with your connected web3 wallet Metamask</p>
          <button className={styles["connect-wallet"]}>Connect Wallet</button>

          <div className={styles["alternative-sign-in"]}>
              <img src="/images/alternativesignin.svg" alt="alternative"/>    
          </div>

          <button onClick = {loginHandler}
          className={styles["login"]}>Login</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Login;
