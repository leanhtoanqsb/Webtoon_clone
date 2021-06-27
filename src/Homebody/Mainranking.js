import React from "react";
import styles from "./Mainranking.module.css";
import {
  popularComicByAge,
  popularComicByGenre,
} from "../listComic/listComicSorted";
import RankingCol from "./RankingCol";

function MainrankingTest() {
  /* genre column */
  const genreInitialCategory = "actionFantasy";
  const genreFilterTitles = [
    { actionFantasy: "Action/Fantasy" },
    { romanceDrama: "Romance/Drama" },
    { comedy: "Comedy" },
    { sliceOfLife: "Slice of life" },
    { others: "Others" },
  ];
  const genreInitialTitle = "Action/Fantasy";
  const genreHeader = "Most popular by Genre";
  /* ages column */
  const ageInitialCategory = "males10s";
  const ageFilterTitles = [
    { males10s: "Males 10's" },
    { females10s: "Females 10's" },
    { males20s: "Males 20's" },
    { females20s: "Females 20's" },
    { males30s: "Males 30's" },
    { females30s: "Females 30's" },
  ];
  const ageInitialTitle = "Males 10's";
  const ageHeader = "Most popular by Ages";
  return (
    <div className={styles.main_ranking_wrap}>
      <div className={styles.main_ranking_inner}>
        <RankingCol
          initialHeader={genreHeader}
          initialTitle={genreInitialTitle}
          initialCategory={genreInitialCategory}
          filterCategories={genreFilterTitles}
          sortedComic={popularComicByGenre}
        />
        <RankingCol
          initialHeader={ageHeader}
          initialTitle={ageInitialTitle}
          initialCategory={ageInitialCategory}
          filterCategories={ageFilterTitles}
          sortedComic={popularComicByAge}
        />
      </div>
    </div>
  );
}

export default MainrankingTest;
