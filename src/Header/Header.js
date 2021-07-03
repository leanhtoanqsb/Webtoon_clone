import React, {useState} from "react";
import "./Header.css";
import Navbar from "./Navbar";
import LoginOverlay from "./LoginOverlay";

function Header() {
  const [loginShow, setLoginShow] = useState(false);
  const showLoginOverlay = () => {
    setLoginShow(true)
  }
  const hideLoginOverlay = () => {
    setLoginShow(false)
  }
  return (
    <div id="header">
      <Navbar handleLoginOverlay={showLoginOverlay}/> 
      <LoginOverlay
        display={loginShow}
        handleDisplay={hideLoginOverlay}
      />
    </div>
  );
}

export default Header;
