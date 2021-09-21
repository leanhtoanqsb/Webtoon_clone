import React from 'react';
import styles from './index.module.css';
import { Link } from "react-router-dom";

import LogoButton from "components/common/LogoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToolbarInfo() {
  return (
    <div className={styles.info}>
      <LogoButton />
      <Link className={styles.comic_name}>
        <span>
        {'Comic name here ...'}
        </span>
      </Link>
      <FontAwesomeIcon
        icon='chevron-right' size='xs'
        style={{color: 'white'}}
      />
      <span className={styles.episode}>
        {'Episode ...'}
      </span>
    </div>
  );
}
