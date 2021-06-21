import React from "react";
import Mainbanner from "./Mainbanner";
import Maindaily from "./Maindaily";

function Container() {
  return(
    <div id="container">
      <div className="content">
        <Mainbanner />
        <Maindaily />
      </div>
    </div>
);
}

export default Container;
