import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import SectionNavigation from "components/SectionNavigation/index";
import DailyCol from "./DailyCol";
import ComicCard from "../common/ComicCard";
import { listComicByDay } from "../listComic/listComicSorted";
import { listComic } from "../listComic/listComic";
import _, {debounce} from "lodash";

function Originals() {
  const [state, setState] = useState("ongoing");
  const listStateTitle = ["ongoing", "completed"];

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = _.debounce(() => {
    setOffsetY(window.scrollY);
  }, 300);
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
    const result = listStateTitle.map((state) => {
      return {
        title: state,
        displayTitle: state,
        handleClick: handleClick(target[state]),
      };
    });
    setListState(result);
  }, []);
  useEffect(() => {
    const target = stateRef.current;
    const ongoingPosition = getPosition(target["ongoing"]);
    const completedPosition = getPosition(target["completed"]);
    if (offsetY >= completedPosition-1) {
      return setState("completed");
    }
    if (offsetY >= ongoingPosition-1) {
      return setState("ongoing");
    }
  }, [offsetY]);

  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const [dailyState, setDailyState] = useState(weekdays[new Date().getDay()]);
  const listComicState = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const dailyTable = listComicState.map((daily) => {
    return (
      <React.Fragment key={daily}>
        <DailyCol
          day={daily}
          currentDay={dailyState}
          setDay={setDailyState}
          listComic={listComicByDay[daily]}
        />
      </React.Fragment>
    );
  });

  const completedTable = listComic.map((comic) => {
    return (
      <li key={comic.title} className={styles.completed_card}>
        <div className={styles.card_border}>
          <ComicCard comic={comic} />
        </div>
      </li>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.sticky_bar}>
        <div className={styles.selector}>
          <SectionNavigation
            listSelection={listState}
            currentSelection={state}
            setCurrentSelection={setState}
          />
        </div>
      </div>
      <div
        id="ongoing"
        ref={(el) => (stateRef.current["ongoing"] = el)}
        className={styles.ongoing_section}
      >
        <h1 className={styles.header_title}>Ongoing</h1>
        <div className={styles.daily_table}>{dailyTable}</div>
      </div>
      <div
        id="completed"
        ref={(el) => (stateRef.current["completed"] = el)}
        className={styles.completed_section}
      >
        <h1 className={styles.header_title}>Completed</h1>
        <ul className={styles.completed_table}>{completedTable}</ul>
      </div>
    </div>
  );
}

export default Originals;
