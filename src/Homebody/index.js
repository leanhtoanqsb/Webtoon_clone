import React from "react";
import styles from "./index.module.css";
import Mainbanner from "./Mainbanner";
import Maindaily from "./Maindaily";

function Container() {
  return (
    <div id="container">
      <div className={styles.content}>
        <Mainbanner />
        <Maindaily />
      </div>
    </div>
  );
}

export default Container;
