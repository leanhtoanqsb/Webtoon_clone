import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function LinkItemArea({
  comic={},
  style={ root:{},image:{},info:{} }
}){
  const backgroundImageUrl = ''
  return (
    <Link
      to='/comic-detail'
      className={styles.link_root}
      style={{height: '100px', ...style.root}}
    >
      <div
        className={styles.link_img}
        style={{
          background: '#6c5b7b',
          width: '100px',
          height: '100px',
          ...style.image
        }}
      >
        <img src={comic.imgUrl} alt="No Image" />
      </div>
      <div
        className={styles.link_info}
        style={{...style.info}}
      >
        <p className={styles.comic_genre}>{comic.genre}</p>
        <h3 className={styles.comic_title}>{comic.title}</h3>
        <h4 className={styles.comic_author}>{comic.author}</h4>
      </div>
    </Link>
  );
}
