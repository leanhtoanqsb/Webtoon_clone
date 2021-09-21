import React, { useState } from 'react';
import styles from './index.module.css';
import RankingColMenuNav from "components/popular/RankingColMenuNav";
import { genreCol, agesCol } from "Homebody/Mainranking";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";

export default function AsideArea() {
    
  return (
    <div className={styles.root}
    >
        <RankingColMenuNav
          header='By Genre'
          filterCategories={genreCol.filterTitles}
          sortedComic={popularComicByGenre}
        />
        <RankingColMenuNav
          header='By Age'
          filterCategories={agesCol.filterTitles}
          sortedComic={popularComicByAge}
        />
    </div>
  );
}
