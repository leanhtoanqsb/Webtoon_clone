import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Navbar({handleLoginOverlay}) {
  return (
    <div id="nav">
      <div className="nav">
        <div className="nav-linksContainer">
          <a href="/#" className="nav-logo">
            <img src="./images/logo.png" alt="" />
          </a>
          <ul className="nav-links">
            <li className="link">
              <Link to="/originals">
                <h1>originals</h1>
              </Link>
            </li>
            <li className="link">
              <Link to="/genres">
                <h1>genres</h1>
              </Link>
            </li>
            <li className="link">
              <a href="/popular">
                <h1>popular</h1>
              </a>
            </li>
            <li className="link">
              <a href="/#">
                <h1>canvas</h1>
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav-button">
          <li>
            <Link to="/">
              <span className="lk-creator" href="/#">Creators 101</span>
            </Link>
          </li>
          <li>
            <span className="lk-bar">|</span>
          </li>
          <li>
            <Link to="/">
              <span className="lk-publish" href="/#">
                Publish
              </span>
            </Link>
          </li>
          <li>
            <button
              className="lk-logIn" href="/#"
              onClick={(e) => {
                e.preventDefault();
                handleLoginOverlay();
              }}
            >
              Log In
            </button>
          </li>
          <li>
            <span className="lk-bar">|</span>
          </li>
          <li>
            <button className="lk-search" href="/#">
              <img
                src="https://img.icons8.com/android/24/000000/search.png"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
