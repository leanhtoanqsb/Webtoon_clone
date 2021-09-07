import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./RankingCol.module.css";

function RankingItems({ sortedComic }) {
  const rankingItems = sortedComic.map((comic) => {
    return (
      <li key={comic.title} className={styles.ranking_item}>
        <div className={styles.ranking_img}>
          <img src={comic.imgUrl} alt=""></img>
        </div>
        <div className={styles.ranking_info}>
          <p>{comic.genre}</p>
          <h3>{comic.title}</h3>
          <h4>{comic.author}</h4>
        </div>
      </li>
    );
  });

  return rankingItems;
}

function RankingCol({
  initialHeader,
  initialTitle,
  initialCategory,
  filterCategories,
  sortedComic,
}) {
  const [category, setCategory] = useState(initialCategory);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const filterArea = filterCategories.map((title) => {
    let titleKey = Object.keys(title)[0];
    let titleValue = title[Object.keys(title)[0]];
    return (
      <li key={titleKey}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            setIsCollapsed(true);
            setCategory(titleKey);
          }}
        >
          <span className={styles.checked_title}>{titleValue}</span>
          <FontAwesomeIcon
            className={styles.faIcon}
            icon={faCheck}
            style={titleKey == category ? { opacity: "1" } : { opacity: "0" }}
          />
        </a>
      </li>
    );
  });
  return (
    <div className={styles.ranking_col}>
      <div className={styles.ranking_header}>
        <a className={styles.ranking_header_title} href="/#">
          {initialHeader}{" "}
          <FontAwesomeIcon className={styles.faIcon} icon={faChevronRight} />
        </a>
        <div className={styles.ranking_sort_area}>
          <a
            href="/#"
            className={styles.checked}
            onClick={(e) => {
              e.preventDefault();
              setIsCollapsed(false);
            }}
          >
            <span className={styles.checked_title}>{initialTitle}</span>
            <FontAwesomeIcon className={styles.faIcon} icon={faCheck} />
          </a>
          <ul
            className={styles.sort_box}
            style={isCollapsed ? { display: "none" } : { display: "block" }}
          >
            {filterArea}
          </ul>
        </div>
      </div>
      <ul className={styles.ranking_items}>
        <RankingItems sortedComic={sortedComic[category]} />
      </ul>
    </div>
  );
}

export default RankingCol;
