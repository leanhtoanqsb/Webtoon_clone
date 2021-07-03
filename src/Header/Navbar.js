import React from "react";
import "./Header.css";

function Navbar({handleLoginOverlay}) {
  return (
    <div id="nav">
      <div className="nav">
        <div className="nav-linksContainer">
          <a href="/#" className="nav-logo">
            <img src="./images/logo.png" alt="" />
          </a>
          <ul className="nav-links">
            <li>
              <a href="/#">
                <h1>originals</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>genres</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>popular</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>canvas</h1>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <span className="lk-creator">
            <a href="/#">Creators 101</a>
          </span>
          <span className="lk-bar">|</span>
          <a className="lk-publish" href="/#">
            Publish
          </a>
          <a
            className="lk-logIn" href="/#"
            onClick={(e) => {
              e.preventDefault();
              handleLoginOverlay();
            }}
          >
            Log In
          </a>
          <span className="lk-bar">|</span>
          <a className="lk-search" href="/#">
            <img
              src="https://img.icons8.com/android/24/000000/search.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
