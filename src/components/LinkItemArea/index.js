import React from "react";
import styles from "./index.module.css";

export default function LinkItem({
  comic,
  style={
    root:{height: '100px'},
    image:{width: '100px', height: '100px'},
  }
}){
  return (
    <a
      href='#'
      className={styles.link_root}
      style={style.root}
    >
      <div
        className={styles.link_img}
        style={style.image}
      >
        <img src={comic.imgUrl} alt=""></img>
      </div>
      <div className={styles.link_info}>
        <p>{comic.genre}</p>
        <h3>{comic.title}</h3>
        <h4>{comic.author}</h4>
      </div>
    </a>
  );
}
