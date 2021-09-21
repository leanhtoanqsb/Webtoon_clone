import React, { useState } from 'react';
import styles from './index.module.css';
import { GenreRankingCol, AgeRankingCol} from 'components/popular/RankingCols';

export default function AsideArea() {
    
  return (
    <div className={styles.root}
    >
      <GenreRankingCol /> 
      <AgeRankingCol /> 
    </div>
  );
}
