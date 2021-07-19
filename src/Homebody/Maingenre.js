import React from "react";
import Cardlist from "./Cardlist";
import styles from "./Maingenre.module.css";
import {listComic} from "../listComic/listComic";
import {Cardback} from "./Flipcard";

function Maingenre() {
  let mapping = {
    rowOne: "action",
    rowTwo: "drama",
  }
  let checkResult = []
  const rowComic = listComic.reduce((result, comic) => {
    const matchedKey = Object.keys(mapping).find((key) => {
      return mapping[key] === comic.genre;
    });
    if (matchedKey && !checkResult.includes(matchedKey)) {
      result[matchedKey] = [...(result[matchedKey] || []), comic] 
      if (result[matchedKey].length === 4) {
        checkResult.push(matchedKey)
      }
    };
    return result;
  },{})
  return(
    <div className={styles.main_genre_wrap}>
      <h2>GENRE</h2>
      <div className={styles.genre_content}>
        <div style={{flex:"1"}} >
          <Cardback title={mapping.rowOne}/>
        </div>
          <Cardlist listComicSorted={rowComic.rowOne}/>
      </div>
      <div className={styles.genre_content}>
        <div style={{flex:"1"}}>
          <Cardback title={mapping.rowTwo} />
        </div>
        <Cardlist listComicSorted={rowComic.rowTwo}/>
      </div>
    </div>
);
}

export default Maingenre;
