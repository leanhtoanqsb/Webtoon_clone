import React from "react";
import styles from "./Mainranking.module.css";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";
import RankingCol from "./RankingCol";

/* genre column */
export const genreCol = {
  initialCategory: "actionFantasy",
  filterTitles: [
    { actionFantasy: "Action/Fantasy" },
    { romanceDrama: "Romance/Drama" },
    { comedy: "Comedy" },
    { sliceOfLife: "Slice of life" },
    { others: "Others" },
  ],
  initialTitle: "Action/Fantasy",
  header: "Most popular by Genre",
}
/* ages column */
export const agesCol = {
  initialCategory: "males10s",
  filterTitles: [
    { males10s: "Males 10's" },
    { females10s: "Females 10's" },
    { males20s: "Males 20's" },
    { females20s: "Females 20's" },
    { males30s: "Males 30's" },
    { females30s: "Females 30's" },
  ],
  initialTitle: "Males 10's",
  header: "Most popular by Ages",
}

export default function Mainranking() {

  return (
    <div className={styles.main_ranking_wrap}>
      <div className={styles.main_ranking_inner}>
        <RankingCol
          initialHeader={genreCol.header}
          initialTitle={genreCol.initialTitle}
          initialCategory={genreCol.initialCategory}
          filterCategories={genreCol.filterTitles}
          sortedComic={popularComicByGenre}
        />
        <RankingCol
          initialHeader={agesCol.header}
          initialTitle={agesCol.initialTitle}
          initialCategory={agesCol.initialCategory}
          filterCategories={agesCol.filterTitles}
          sortedComic={popularComicByAge}
        />
      </div>
    </div>
  );
}
