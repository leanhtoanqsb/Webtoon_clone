import React from "react";
import styles from "./DailyCol.module.css";
import ComicCard from "../common/ComicCard";

function DailyCol({day, currentDay, setDay, listComic}) {
  const isSelect = (day === currentDay);
  const btnSelect = (
    <a href="/#"
      className={`
        ${styles.btn_select}
        ${day === currentDay ? styles.btn_select_active : ""}
      `}
      style={ isSelect ? {color:"#fff"}:{color:"#000"}}
      onMouseEnter = {(e) => {
        e.currentTarget.style.color = isSelect ? "#fff" : "#00dc64"
      }}
      onMouseLeave = {(e) => {
        e.currentTarget.style.color = isSelect ? "#fff" : "#000"
      }}
      onClick={(e) => {
        e.preventDefault();
        setDay(day);
        /*e.currentTarget.style.color = "#fff"*/
      }
      }
    >
      {day}
    </a>
  )
  const listDailyCard = listComic.map((comic) => {
    return (
      <li key={comic.title} className={styles.card_border}>
        <ComicCard comic={comic} isSelect={isSelect} />
      </li>
    )
  }) 
  
  return (
    <div className={`${styles.container} ${isSelect ? styles.active : ""}`}>
      {btnSelect}
      <ul className={styles.list_comic}>
        {listDailyCard}
      </ul>
    </div>
  );
}

export default DailyCol;
