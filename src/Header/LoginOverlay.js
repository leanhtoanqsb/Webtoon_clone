import React from "react";
import styles from "./LoginOverlay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook,
  faTwitter,
  faLine,
  faGooglePlus,
  faApple
} from "@fortawesome/free-brands-svg-icons";


function LoginOverlay({display, handleDisplay}) {
  const snsBrands = [
    { id: 1, snsBrand: faFacebook, color:"#0084ff", address: "/#" },
    { id: 2, snsBrand: faTwitter, color:"#41bef0", address: "/#" },
    { id: 3, snsBrand: faLine, color:"#00dc64", address: "/#" },
    { id: 4, snsBrand: faGooglePlus, color:"#e63c3c", address: "/#" },
    { id: 4, snsBrand: faApple, color:"#000000", address: "/#" },
  ];
  const snsList = snsBrands.map((brand) => {
    return (
      <li key={brand.id.toString()} className={styles.btn_brand}>
        <a href={brand.address}>
          <FontAwesomeIcon icon={brand.snsBrand} size="3x" color={brand.color} />
        </a>
      </li>
    );
  });
  return (
    <div
      className={styles.container}
      style={{display: display ? "flex": "none"}}
    >
      <div className={styles.login_wrap}>
        <div
          className={styles.login_ani}
          style={{background: "url(./images/login_ani.png) no-repeat"}}
        >
        </div>
        <div className={styles.login_form}>
          <p>Login and enjoy special features.</p> 
          <form
            id="formLogin"
            name="formLogin"
            target="_top"
            autocomplete="off"
            action="" 
            method="post"
          >
            <div className={styles.email_area}>
              <label className={styles.placeholder}>
                Email address
              </label>
              <input id="emailId"
                className={styles.input_box}
                type="text"
              >
              </input>
            </div>
            <div className={styles.password_area}>
              <label className={styles.placeholder}>
                Password
              </label>
              <input id="password"
                className={styles.input_box}
                type="text"
              >
              </input>
            </div>
            <div className={styles.login_btn}>
              <a
                href="/#"
                className={`${styles.btn} ${styles.btn_signup}`}
              >
                Sign Up
              </a>
              <a
                href="/#"
                className={`${styles.btn} ${styles.btn_login}`}
              >
                Log In
              </a>
            </div>
          </form>
          <a
            href="/#"
            className={styles.forgotpassword}
          >
            Forgot Password?
          </a>
          <div className={styles.bg_line}>
            <div className={styles.inner}>
              <span className={styles.text}>OR Log in with</span>
            </div>
          </div>
          <ul>
            {snsList}
          </ul>
        </div>
        <div className={styles.close_button}>
          <a href="/#"
            className={styles.close_inner}
            onClick={(e) => {
              e.preventDefault();
              handleDisplay();
            }}
          >
            <span className={styles.close_text}>X</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginOverlay;
