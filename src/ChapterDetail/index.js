import React, { useState, useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import styles from "./index.module.css";
import LinkItem from "components/LinkItemArea/index";

export default function ChapterDetail() {
  const urlImg = ''

  return (
    <React.Fragment>
      <div className={styles.root}>
        {/* toolbar*/}
        <div
          className={styles.toolbar}
          style={{
            backgroundImage: `linear-gradient(#42275a, #734b6d), url(${urlImg})`,
          }}
        >
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
          className={styles.bottom_episode_list}
          style={{
            backgroundImage: `linear-gradient(#aa076b, #61045f), url(${urlImg})`,
          }}
        >
        </div>
        {/* bottom display*/}
        <div
          className={styles.bottom_display}
        >
          {/* comment_area*/}
          <div
            className={styles.comment_area}
            style={{
              backgroundImage: `linear-gradient(#aa076b, #61045f), url(${urlImg})`,
            }}
          >
          </div>
          {/* aside area*/}
          <div
            className={styles.aside_area}
            style={{
              backgroundImage: `linear-gradient(#ffafbd, #ffc3a0), url(${urlImg})`,
            }}
          >
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
