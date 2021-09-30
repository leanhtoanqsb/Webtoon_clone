import React, { useState } from "react";
import Cardlist from "./Cardlist";
import styles from "./Maindaily.module.css";
import {listComicByDay} from "listComic/listComicSorted";

export default function Maindaily() {
  const weekDays = ["sun","mon", "tue", "wed", "thu", "fri", "sat", ];
  const [day, setDay] = useState(weekDays[new Date().getDay()]);
 
  const tabTitle = ["mon", "tue", "wed", "thu", "fri", "sat","sun"]
  const dailyTab = tabTitle.map(title => {
    return <li key={title}>
      <a href="/#"
        className={`${styles.btn_daily} ${title === day ? styles.btn_daily_active : ""} `}
        style={ title === day ? {color:"#fff"}:{color:"#000"}}
        onMouseEnter = {(e) => {
          e.currentTarget.style.color = title === day ? "#fff" : "#00dc64"
        }}
        onMouseLeave = {(e) => {
          e.currentTarget.style.color = title === day ? "#fff" : "#000"
        }}
        onClick={(e) => {
          e.preventDefault();
          setDay(title);
          e.currentTarget.style.color = "#fff"
        }
        }
      >
        {title}
      </a>
    </li>
  });
  const dailyContent = weekDays.map( (title,index) => {
  const randomArray = [0,3,2,1,5,8,7,6];
  const cardMultiIdx = randomArray[index];
    return(
      <Cardlist key={title}
      listComicSorted={listComicByDay[title].slice(0,9)}
      displayStyle={
        title === day?
        {display:"block"} : {display:"none"}
      }
      cardMultiIdx={cardMultiIdx} />
    )
  });

  return(
    <div className={styles.main_daily_wrap}>
      <div className={styles.daily_tab_wrap}>
        <div className={styles.daily_tab_inner}>
          <ul className={styles.daily_tab}>
            {dailyTab}
          </ul>
          <span className={styles.bar}>|</span>
          <a className={styles.btn_more} href="/#" onClick={(e) => e.preventDefault()}>MORE</a>
        </div>
      </div>
      <div className={styles.daily_content}>
        {dailyContent}
      </div>
    </div>
  );
}
