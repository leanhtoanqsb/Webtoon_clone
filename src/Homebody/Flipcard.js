import React from "react";
import "./Flipcard.css"

export function Cardback({title, info}) {
  return(
    <div className="card-single">
      <div className="card-back">
        <div className="card-info">
          {
            <h1 className="card-title" style={{textTransform:"uppercase"}}>
              {title}
            </h1> ||
            <h1>No title</h1>
          }
          <p>{info}</p>
        </div>
      </div>
    </div>
);
}
function Flipcard({comic, isCardMulti}) {
  return(
    <div className={`card-single ${isCardMulti ? "card-multi" : ""}`}>
      <div className="card-front"
        // style={{background:`url(${comic.imgUrl}) no-repeat right` }}
      >
        <img alt="" src={comic.imgUrl}
          style={{position:"absolute",right:"0",zIndex:"-100"}}>
        </img>
        <div className="card-info">
          {<h1 className="card-title">{comic.title}</h1> || <h1>No title</h1>}
        </div>
      </div>
      <div className="card-back">
        <div className="card-info">
          {<h1 className="card-title">{comic.title}</h1> || <h1>No title</h1>}
          <p>{comic.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;