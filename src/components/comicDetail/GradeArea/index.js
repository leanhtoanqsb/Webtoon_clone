import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import RoundButton from "components/common/RoundButton";

export default function GradeArea({
  subscribe='Subscribe',
  rate=9.9,
}){

  return (
    <div className={styles.root}>
      <div className={styles.subscribe_icon}>
        <img
          src={'/icons/person-icon.png'}
          alt='checked-icon'
          className={`${styles.icon} ${styles.person_icon}`}
        />
        <img
          src={'/icons/checked-icon.png'}
          alt='checked-icon'
          className={`${styles.icon} ${styles.checked_icon}`}
        />
      </div>
      <span>
        {subscribe}
      </span>
      <span className={styles.bar}/>
      <img
        className={`${styles.icon} ${styles.rate_icon}`}
        src={'/icons/rate-icon.png'}
        alt='rate-icon'
      />
      <span className={styles.text}>
        {rate}
      </span>
      <RoundButton
        buttonStyles={{
          background: '#00dc64',
          color: '#fff',
          fontSize: '1rem',
        }}
      >
        Rate
      </RoundButton>
    </div>
  );
}
