import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function ChapterListItem({
  chapter={},
  style={ root:{},image:{}, }
}){
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newDate = year + "/" + month + "/" + day;

  return (
    <NavLink
      to='/chapter-detail'
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
        <img src={chapter.imgUrl} alt="" />
      </div>
      <div className={styles.link_info}>
        <span
          className={styles.episode}
        >
          {chapter.episode || 'Episode'}
        </span>
        <span className={styles.space} />
        <span
          className={styles.date}
        >
          {chapter.date || newDate}
        </span>
        <span
          className={styles.like_area}
        >
          {chapter.like || 'Like'}
        </span>
      </div>
    </NavLink>
  );
}
