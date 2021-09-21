import React, { useState } from "react";
import Cardlist from "./Cardlist";
import styles from "./Mainhotnew.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { listComic } from "../listComic/listComic";

function Maindaily() {
  /* create a copy of list comic */
  let listOfComic = listComic.map((x) => x);

  const numberOfPanels = 4;
  const numberOfItemInPanel = 4;
  let panels = Array.from(Array(numberOfPanels), () => []);

  for (let panelIdx = 0; panelIdx < numberOfPanels; panelIdx++) {
    for (let i = 0; i < numberOfItemInPanel; i++) {
      panels[panelIdx].push(listOfComic[i]);
      listOfComic.splice(i, 1);
    }
  }
  /* set state to control what panel would display */
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === numberOfPanels - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? numberOfPanels - 1 : prevIndex - 1
    );
  };
  /* create a list of panel */
  let hotNewPanels = panels.map((panel, idx) => {
    return (
      <div
        key={idx}
        className={styles.hotnew_panel}
        style={{ left: `${idx * 1140}px` }}
      >
        <Cardlist listComicSorted={panel} cardMultiIdx={idx} />
      </div>
    );
  });
  /* create a list of num  */
  let num = panels.map((_, idx) => {
    return (
      <a
        href="/#"
        key={idx}
        className={styles.dot}
        style={{
          backgroundColor: ` ${idx === index ? "black" : "white"}`,
        }}
        onClick={(e) => {
          e.preventDefault();
          setIndex(idx);
        }}
      >
        <span style={{ display: "none" }}>{idx}</span>
      </a>
    );
  });
  return (
    <div className={styles.main_hotnew_wrap}>
      <div className={styles.main_hotnew}>
        <h2>New to WEBTOON</h2>
        <div className={styles.hotnew_rolling}>
          <div className={styles.hotnew_viewport}>
            <div
              className={styles.hotnew_film}
              style={{ transform: `translate3d(${-index * 1140}px,0,0)` }}
            >
              {hotNewPanels}
            </div>
          </div>
        </div>
        <div className={styles.paging}>
          <button className={styles.btn_next} onClick={nextSlide}>
            <FontAwesomeIcon
              icon='chevron-right'
              size="2x"
              className="icon-next"
            />
          </button>
          <button className={styles.btn_prev} onClick={prevSlide}>
            <FontAwesomeIcon
              icon='chevron-left'
              size="2x"
              className="icon-prev"
            />
          </button>
          <div className={styles.nums}>{num}</div>
        </div>
      </div>
    </div>
  );
}

export default Maindaily;
