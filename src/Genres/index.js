import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "./index.module.css";
import SectionNavigation from "components/SectionNavigation/index";
import ComicCard from "../common/ComicCard";
import { listComicByGenre } from "../listComic/listComicSorted";
import { debounce } from "lodash";

function Genres() {
  const listStateTitle = [
    "drama",
    "fantasy",
    "comedy",
    "action",
    "romance",
    "superhero",
    "thriller",
    "supernatural",
  ];
  const [state, setState] = useState(listStateTitle[0]);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = debounce(() => {
    setOffsetY(window.scrollY);
  }, 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stateRef = useRef({});
  const [listState, setListState] = useState([]);
  const getPosition = (element) => {
    return element.offsetTop;
  };
  useEffect(() => {
    const target = stateRef.current;
    const handleClick = (element) => {
      return function scroll() {
        const position = getPosition(element);
        window.scroll({
          top: position,
          behavior: "smooth",
        });
      };
    };
    const result = listStateTitle.map((title) => {
      return {
        [title]: {
          title: title,
          handleClick: handleClick(target[title]),
        },
      };
    });
    setListState(result);
  }, []);

  const sectionTable = listStateTitle.map((title) => {
    const comicTable = listComicByGenre[title].map((comic) => {
      return (
        <li key={comic.title} className={styles.comic_card}>
          <div className={styles.card_border}>
            <ComicCard comic={comic} />
          </div>
        </li>
      );
    });
    return (
      <div
        key={title}
        id={title}
        ref={(el) => (stateRef.current[title] = el)}
        className={styles.state_section}
      >
        <h1 className={styles.header_title}>{title}</h1>
        <ul className={styles.comic_table}>{comicTable}</ul>
      </div>
    );
  });
  useEffect(() => {
    for (let i = listStateTitle.length - 1; i >= 0; i--) {
      let target = stateRef.current[listStateTitle[i]];
      let position = getPosition(target);
      if (offsetY >= position) {
        return setState(listStateTitle[i]);
      }
    }
  }, [offsetY]);
  return (
    <div className={styles.container}>
      <div className={styles.sticky_bar}>
        <div className={styles.selector}>
          <SectionNavigation
            listSelection={listState}
            currentSelection={state}
          />
        </div>
      </div>
      {sectionTable}
    </div>
  );
}

export default Genres;
