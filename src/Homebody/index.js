import React from "react";
import styles from "./index.module.css";
import Mainbanner from "./Mainbanner";
import Maindaily from "./Maindaily";
import Mainhotnew from "./Mainhotnew";
import Mainranking from "./Mainranking";
import Maingenre from "./Maingenre";

function Container() {
  return (
    <div id="container">
      <div className={styles.content}>
        <Mainbanner />
        <Maindaily />
        <Mainhotnew />
        <Maingenre />
        <Mainranking />
      </div>
    </div>
  );
}

export default Container;
