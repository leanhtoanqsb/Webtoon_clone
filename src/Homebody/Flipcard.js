import React from "react";
import styles from "./Flipcard.module.css";

export function Cardback({ title, info }) {
  return (
    <div className={styles.card_single}>
      <div className={styles.card_back}>
        <div className={styles.card_info}>
          <h1
            className={styles.card_title}
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </h1>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}
function Flipcard({ comic, isCardMulti }) {
  return (
    <div
      className={`${styles.card_single}
      ${isCardMulti ? styles.card_multi : ""}`}
    >
      <div className={styles.card_front}>
        <img
          alt=""
          src={comic.imgUrl}
          style={{ position: "absolute", right: "0", zIndex: "-100" }}
        ></img>
        <div className={styles.card_info}>
          <h1 className={styles.card_title}>{comic.title}</h1>
        </div>
      </div>
      <div className={styles.card_back}>
        <div className={styles.card_info}>
          <h1 className={styles.card_title}>{comic.title}</h1>
          <p>{comic.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
