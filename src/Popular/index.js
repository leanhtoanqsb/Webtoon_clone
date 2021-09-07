import React, { useState, useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import styles from "./index.module.css";
import SectionNavigation from "components/SectionNavigation/index";
import ComicCard from "../common/ComicCard";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";
import { genreCol, agesCol } from "Homebody/Mainranking";
import LinkItem from "components/LinkItemArea/index";

export default function Popular() {
  /*Genre*/
  const listGenreTitle = Object.keys(popularComicByGenre) 
  const [genreState, setGenreState] = useState(listGenreTitle[0]);
  const listGenreSelection = listGenreTitle.map(
    function listGenreSelectionMapping(genreTitle) {
      return {
        [genreTitle]:{
          title: genreTitle,
          handleClick: function handleGenreSelectionChange(){
            setGenreState(genreTitle)
          }
        }
      }
    }
  ) 
  /*Ages*/
  const listAgeTitle = Object.keys(popularComicByAge) 
  const [ageState, setAgeState] = useState(listAgeTitle[0]);
  const listAgeSelection = listAgeTitle.map(
    function listAgeSelectionMapping(ageTitle) {
      return {
        [ageTitle]:{
          title: ageTitle,
          handleClick: function handleAgeSelectionChange(){
            setAgeState(ageTitle)
          }
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
        let styleHeight = '100px'
        let style={
          root:{height: '100px'},
          image:{width: '100px', height: '100px'},
        }
        if (idx == 0) {
          style={
            root:{height: '200px'},
            image:{
              width: '200px',
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

