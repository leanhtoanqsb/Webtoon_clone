import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import LinkItem from "components/popular/LinkItem";

export default function RankingColTemplate({
  header,
  filterCategories,
  sortedComic,
}) {
  const initialCategory = Object.keys(filterCategories[0])[0]
  const initialTitle = Object.values(filterCategories[0])[0]
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
            icon='check'
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
          {header}{" "}
          <FontAwesomeIcon className={styles.faIcon} icon='chevron-right' />
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
            <FontAwesomeIcon className={styles.faIcon} icon='check' />
          </a>
          <ul
            className={styles.sort_box}
            style={isCollapsed ? { display: "none" } : { display: "block" }}
          >
            {filterArea}
          </ul>
        </div>
      </div>
      <DetailItem sortedComic={sortedComic[category]} />
    </div>
  );
}


function DetailItem({ sortedComic={} }) {
  return (
    <ul className={styles.ranking_items}>
      {sortedComic.map((comic, idx) => {
        let customStyle={
          root: {height:'100px'},
          image:{width:'100px', height: '100px'},
        };
        /*original style*/
        return (
          <li key={comic.title} className={styles.detail_item}>
            <LinkItem comic={comic} style={customStyle}/>
          </li>
        );
      })}
    </ul>
  );
}

