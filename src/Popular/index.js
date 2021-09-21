import React, { useState, useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import styles from "./index.module.css";
import SectionNavigation from "components/common/SectionNavigation";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";
import { genreCol, agesCol } from "Homebody/Mainranking";
import LinkItem from "components/popular/LinkItem";

export default function Popular() {
  /*Genre*/
  let genreMapping = {}
  const listGenreTitle = genreCol.filterTitles.map(function getTitle(obj) {
    genreMapping = {...genreMapping, ...obj}
    return Object.keys(obj)[0]
  })
  const [genreState, setGenreState] = useState(listGenreTitle[0]);
  const listGenreSelection = listGenreTitle.map(
    function listGenreSelectionMapping(genreTitle) {
      return {
        title: genreTitle,
        displayTitle: genreMapping[genreTitle],
        handleClick: function handleGenreSelectionChange(){
          setGenreState(genreTitle)
        }
      }
    }
  ) 
  /*Ages*/
  let agesMapping = {}
  const listAgeTitle = agesCol.filterTitles.map(function getTitle(obj) {
    agesMapping = {...agesMapping, ...obj}
    return Object.keys(obj)[0]
  })
  const [ageState, setAgeState] = useState(listAgeTitle[0]);
  const listAgeSelection = listAgeTitle.map(
    function listAgeSelectionMapping(ageTitle) {
      return {
        title: ageTitle,
        displayTitle: agesMapping[ageTitle],
        handleClick: function handleAgeSelectionChange(){
          setAgeState(ageTitle)
        }
      }
    }
  ) 

  return (
    <React.Fragment>
      <div className={styles.root}>
        <div className={styles.column}>
          <div className={styles.sticky_bar}>
            <SectionNavigation
              listSelection={listGenreSelection}
              currentSelection={genreState}
              style={{fontSize: '1rem'}}
            />
          </div>
          <DetailItem sortedComic={popularComicByGenre[genreState]}/>
        </div>
        <div className={styles.column}>
          <div className={styles.container}>
            <div className={styles.sticky_bar}>
              <SectionNavigation
                listSelection={listAgeSelection}
                currentSelection={ageState}
                style={{fontSize: '1rem'}}
              />
            </div>
          <DetailItem sortedComic={popularComicByAge[ageState]}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


function DetailItem({ sortedComic }) {
  return (
    <ul className={styles.root_items}>
      {sortedComic.map((comic, idx) => {
        /*original style*/
        let style={
          root:{height: '100px'},
          image:{width: '100px', height: '100px'},
        }
        /*special style no needed*/
        if (idx == 0) {
          style={
            root:{height: '200px'},
            image:{
              width: '',
              height: '200px',
              position: 'absolute',
              top: '0',
              right: '0',
            },
          }
        }
        return (
          <li key={comic.title} className={styles.detail_item}>
            <LinkItem comic={comic} style={style}/>
          </li>
        );
      })}
    </ul>
  );
}

