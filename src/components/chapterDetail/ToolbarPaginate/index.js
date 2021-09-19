import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ToolbarPaginate() {
  return (
    <>
      <div className={styles.paginate}>
        <button
          className={`${styles.button} ${styles.button_left}`}
        >
          <FontAwesomeIcon icon='caret-left'
            className={styles.icon}
          />
        </button>
        <span className={styles.page}>
          {'Index'}
        </span>
        <button
          className={`${styles.button} ${styles.button_right}`}
        >
          <FontAwesomeIcon icon='caret-right'
            className={styles.icon}
          />
        </button>
      </div>
    </>
  );
}
