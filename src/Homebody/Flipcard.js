import React from "react";
import styles from "./Flipcard.module.css";

export default function Flipcard({ comic={},genreColor='black', isCardMulti=false }) {
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
          <h1 className={styles.comic_title}>{comic.title}</h1>
          <p className={styles.comic_genre}
            style={{color:genreColor}}
          >{comic.genre}</p>
        </div>
      </div>
      <div className={styles.card_back}
        style={{background: genreColor}}
      >
        <div className={styles.card_info}>
          <h1 className={styles.comic_title}>{comic.title}</h1>
          <p className={styles.comic_info}>{comic.info}</p>
        </div>
      </div>
    </div>
  );
}


export function Cardback({ title, genreColor}) {
  return (
    <div className={styles.card_single}>
      <div className={styles.card_back}>
        <div className={styles.card_info}
          style={{background: genreColor}}
        >
          <h1
            className={styles.card_title}
            style={{textTransform: 'upperCase'}}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
