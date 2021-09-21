import React from "react";
import styles from "./index.module.css";
import {
  popularComicByAge,
  popularComicByGenre,
} from "listComic/listComicSorted";
import RankingColTemplate from "components/popular/RankingColTemplate";

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

export  function GenreRankingCol() {
  return (
        <RankingColTemplate
          header={genreCol.header}
          filterCategories={genreCol.filterTitles}
          sortedComic={popularComicByGenre}
        />
  );
}
export function AgeRankingCol() {
  return (
        <RankingColTemplate
          header={agesCol.header}
          filterCategories={agesCol.filterTitles}
          sortedComic={popularComicByAge}
        />
  );
}
