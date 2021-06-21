import React from "react";
import Flipcard from "./Flipcard"
import "./Cardlist.css"

function Cardlist({listComicSorted,displayStyle, cardMultiIdx}) {
  let cardlist = listComicSorted?
    listComicSorted.map((comic) => {
      let cardMulti = false;
      if (listComicSorted.indexOf(comic) === cardMultiIdx) {
        cardMulti = true
      }
      return <li key={comic.title}><Flipcard comic={comic} isCardMulti={ cardMulti}/></li>
    }) : [];

  return(
      <ul className="card-list" style={displayStyle}>
       {cardlist} 
      </ul>
);
}

export default Cardlist;