import React from "react";
import { Link } from "react-router-dom";
import Flipcard from "./Flipcard";
import styles from "./Cardlist.module.css";
import {genreColorMap} from "listComic/colorMap";

function Cardlist({ listComicSorted, displayStyle, cardMultiIdx }) {
  let cardlist = listComicSorted
    ? listComicSorted.map((comic) => {
        let cardMulti = false;
        if (listComicSorted.indexOf(comic) === cardMultiIdx) {
          cardMulti = true;
        }
        return (
          <li key={comic.title}>
            <Link to='/comic-detail'>
              <Flipcard
                comic={comic}
                genreColor={genreColorMap[comic.genre]}
                isCardMulti={cardMulti}
              />
            </Link>
          </li>
        );
      })
    : [];

  return (
    <ul className={styles.card_list} style={displayStyle}>
      {cardlist}
    </ul>
  );
}

export default Cardlist;
