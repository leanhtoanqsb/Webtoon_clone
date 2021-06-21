import React, { useState } from "react";
import Cardlist from "./Cardlist";
import "./Maindaily.css";
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
        className={`btn-daily ${title === day ? "btn-daily-active" : ""} `}
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
    <div className="main-daily-wrap">
      <div className="daily-tab-wrap">
        <div className="daily-tab-inner">
          <ul className="daily-tab">
            {dailyTab}
          </ul>
          <span className="bar">|</span>
          <a className="btn-more" href="/#" onClick={(e) => e.preventDefault()}>MORE</a>
        </div>
      </div>
      <div className="daily-content">
        {dailyContent}
      </div>
    </div>
  );
}

export default Maindaily;