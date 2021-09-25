import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import RoundButton from "components/common/RoundButton";

function Navbar({handleLoginOverlay}) {
  return (
    <div id="nav">
      <div className="nav">
        <div className="nav-linksContainer">
          <Link to="/" className="nav-logo">
            <img src="./images/logo.png" alt="" />
          </Link>
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
              <Link to="/popular">
                <h1>popular</h1>
              </Link>
            </li>
            <li className="link">
              <Link to="/">
                <h1>canvas</h1>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav-buttons">
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
