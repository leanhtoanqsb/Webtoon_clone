import React from "react";
import styles from "./Mainranking.module.css";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";
import RankingColMenuNav from "components/popular/RankingColMenuNav";

/* genre column */
export const genreCol = {
  filterTitles: [
    { actionFantasy: "Action/Fantasy" },
    { romanceDrama: "Romance/Drama" },
    { comedy: "Comedy" },
    { sliceOfLife: "Slice of life" },
    { others: "Others" },
  ],
  header: "Most popular by Genre",
}
/* ages column */
export const agesCol = {
  filterTitles: [
    { males10s: "Males 10's" },
    { females10s: "Females 10's" },
    { males20s: "Males 20's" },
    { females20s: "Females 20's" },
    { males30s: "Males 30's" },
    { females30s: "Females 30's" },
  ],
  header: "Most popular by Ages",
}

export default function Mainranking() {

  return (
    <div className={styles.main_ranking_wrap}>
      <div className={styles.main_ranking_inner}>
        <RankingColMenuNav
          header={genreCol.header}
          filterCategories={genreCol.filterTitles}
          sortedComic={popularComicByGenre}
        />
        <RankingColMenuNav
          header={agesCol.header}
          filterCategories={agesCol.filterTitles}
          sortedComic={popularComicByAge}
        />
      </div>
    </div>
  );
}
