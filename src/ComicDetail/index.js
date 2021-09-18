import React, { useState, useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import styles from "./index.module.css";
import ChapterListItem from "components/comicDetail/ChapterListItem";
import RoundLinkIcon from "components/icon/RoundLinkIcon";
import RoundButton from "components/buttons/RoundButton";
import GradeArea from "components/comicDetail/GradeArea";

export default function ComicDetail() {
  const backgroundImageUrl = ''

  return (
    <React.Fragment>
      <div className={styles.root}>
        {/*background header*/}
        <div
          className={styles.bg}
          style={{
            backgroundImage: `linear-gradient(#42275a, #734b6d), url(${backgroundImageUrl})`,
          }}
        >
        </div>
        {/*content*/}
        <div className={styles.content}>
          {/*content header*/}
          <div className={styles.detail_header}>
            <h2 className={styles.header_genre}>Genre</h2>
            <h1 className={styles.header_title}>Title</h1>
            <button className={styles.header_author}>
              <span className={styles.author_info}>Author </span>
              <RoundLinkIcon
                iconUrl='/icons/info-icon.png'
                size='1.25rem'
                onClick={(e) => e.preventDefault}
              />
            </button>
          </div>
          {/*content body*/}
          <div className={styles.detail_body}>
            {/*content body chapter list column*/}
            <div className={styles.chapter_list_col}>
              <ul className={styles.chapter_list_wrap}>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
                <li className={styles.chapter_list_item}>
                  <ChapterListItem />
                </li>
              </ul>
            </div>
            <div className={styles.col_devider}/>
            {/*content body aside content column*/}
            <div className={styles.detail_aside_col}>
              <GradeArea />
              <p className={styles.aside_date}>
                <span className={styles.date_icon}>
                  UP
                </span>
                {'EVERY MONDAY'}
              </p>
              <p className={styles.comic_summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada metus ullamcorper leo tempus, eget finibus metus varius. Praesent vehicula turpis metus, eu tincidunt libero cursus nec. Praesent placerat laoreet molestie. Donec volutpat, tortor a ullamcorper porttitor, risus elit tempor orci, tempor rutrum dolor nulla ut diam. Proin in pulvinar ligula. Donec vehicula orci rutrum urna euismod, consequat mollis enim dapibus. Praesent rutrum eget lectus sed mattis. Nam id laoreet tellus. Quisque non erat vehicula, dapibus mi in, scelerisque dui. Suspendisse quam tellus, volutpat vitae viverra nec, aliquam vel ante. Sed in semper diam. Nam eget pharetra ligula. Vivamus eu ex lectus. Morbi quam velit, porttitor sed nunc ac, mattis egestas mi. Nulla gravida orci non nunc cursus, et maximus tellus molestie. 
              </p>
              <RoundButton
                buttonStyles={{
                  background: 'black',
                  color: 'white',
                  width: '100%',
                  height: '3rem',
                  marginTop: '2rem',
                }}
              >
                First Episode
              </RoundButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
