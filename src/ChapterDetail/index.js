import React, { useEffect, useLayoutEffect } from "react";
//import { debounce } from "lodash";
import styles from "./index.module.css";
import ToolbarBrandButtons from "components/chapterDetail/ToolbarBrandButtons";
import ToolbarInfo from "components/chapterDetail/ToolbarInfo";
import ToolbarPaginate from "components/chapterDetail/ToolbarPaginate";
import Slideshow from "components/chapterDetail/Slideshow";
import CommentCol from "components/chapterDetail/CommentCol";
import AsideArea from "components/chapterDetail/AsideArea";


export default function ChapterDetail() {
  const urlImg = ''

  // hide header
  useEffect(() => {
    const headerElement = document.getElementById('header');
    if (headerElement) headerElement.style.display = 'none';
    return function cleanUp() {
      headerElement.style.display = 'block';
    }
  },[])

  return (
    <React.Fragment>
      <div className={styles.root}>
        {/* toolbar*/}
        <div
          className={styles.toolbar}
        >
          <ToolbarInfo />
          <ToolbarPaginate />
          <ToolbarBrandButtons />
        </div>
        {/* view box area*/}
        <div
          className={styles.view_box}
          style={{
            backgroundImage: `linear-gradient(#ffafbd, #ffc3a0), url(${urlImg})`,
          }}
        >
        </div>
        {/* bottom episode list area*/}
        <div
          className={styles.bottom_episode}
        >
          <Slideshow />
        </div>
        {/* bottom display*/}
        <div
          className={styles.bottom_display}
        >
          {/* comment_area*/}
          <div
            className={styles.comment_area}
          >
            <CommentCol />
          </div>
          {/* aside area*/}
          <div
            className={styles.aside_area}
          >
            <AsideArea />
          </div>
        </div>
        {/* challenge round up area*/}
        <div
          className={styles.challenge_round_up}
          style={{
            backgroundImage: `linear-gradient(#42275a, #734b6d), url(${urlImg})`,
          }}
        >
        </div>
      </div>
    </React.Fragment>
  );
}
