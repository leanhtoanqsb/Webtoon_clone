import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function ComicCard({comic, isSelect, genreColor='black'}) {
  return(
      <Link to="/comic-detail" className={styles.daily_card}>
        <img className={styles.card_img} src={comic.imgUrl} alt="" />
        <div className={styles.card_info}>
          <p
            className={
              `${styles.card_genre} ${isSelect ? styles.card_active : ""}`
            }
            style={{color:genreColor}}
          >
            {comic.genre}
          </p>
          <p
            className={
              `${styles.card_genre} ${isSelect ? "" :styles.card_active}`
            }
            style={{position: 'absolute', bottom: '0', color:genreColor}}
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
              `${styles.card_like} ${isSelect ? "" : ""}`
            }
          >
            {comic.like}
          </p>
      </div>
      </Link>
  )
}

export default ComicCard;
