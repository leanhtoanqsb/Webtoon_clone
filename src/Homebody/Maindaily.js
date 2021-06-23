import React, { useState } from "react";
import Cardlist from "./Cardlist";
import styles from "./Maindaily.module.css";
import {listComic} from "../listComic/listComic";

function Maindaily() {
  const weekDays = ["sun","mon", "tue", "wed", "thu", "fri", "sat", ];
  const [day, setDay] = useState(weekDays[new Date().getDay()]);
  /* create list comic sorted depend on listComic format*/
  let listComicSorted = {}; 
  weekDays.forEach((weekday) => {
    return listComicSorted[weekday]=[]
  });
  listComic.forEach((comic) => {
    return comic.weekday.forEach((idx)=>{
      if (listComicSorted[idx].length < 9) {
        listComicSorted[idx]=[...listComicSorted[idx],comic]
      }
      return ""
    })
  });
  
 
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
// console.log(listComicSorted)
  const dailyContent = weekDays.map( (title,index) => {
  const randomArray = [0,3,2,1,5,8,7,6];
  const cardMultiIdx = randomArray[index];
    return(
      <Cardlist key={title}
      listComicSorted={listComicSorted[title]}
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

export default Maindaily;