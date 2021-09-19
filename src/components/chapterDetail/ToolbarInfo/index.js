import React from 'react';
import styles from './index.module.css';
import { Link } from "react-router-dom";

import LogoButton from "components/LogoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
        icon={faChevronRight} size='xs'
        style={{color: 'white'}}
      />
      <span className={styles.episode}>
        {'Episode ...'}
      </span>
    </div>
  );
}
