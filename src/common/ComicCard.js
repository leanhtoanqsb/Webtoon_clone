import React from "react";
import styles from "./ComicCard.module.css";

function ComicCard({comic, isSelect}) {
  return(
      <a href="/#" className={styles.daily_card}>
        <img className={styles.card_img} src={comic.imgUrl} alt="" />
        <div className={styles.card_info}>
          <p
            className={
              `${styles.card_genre} ${isSelect ? styles.card_active : ""}`
            }
          >
            {comic.genre}
          </p>
          <p>
            {comic.title}
          </p>
          <p
            className={
              `${styles.card_author} ${isSelect ? styles.card_active : ""}`
            }
          >
            {comic.author}
          </p>
          <p
            className={
              `${styles.card_like} ${isSelect ? styles.card_active : ""}`
            }
          >
            {comic.like}
          </p>
      </div>
      </a>
  )
}

export default ComicCard;
