import React from "react";
import styles from "./index.module.css";
import Mainbanner from "./Mainbanner";
import Maindaily from "./Maindaily";
import Mainhotnew from "./Mainhotnew";
import Mainranking from "./Mainranking";

function Container() {
  return (
    <div id="container">
      <div className={styles.content}>
        <Mainbanner />
        <Maindaily />
        <Mainhotnew />
        <Mainranking />
      </div>
    </div>
  );
}

export default Container;
