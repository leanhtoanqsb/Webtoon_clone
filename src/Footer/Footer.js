import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook, faInstagram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons'


function Footer() {
  /* footer sns */
  const footerSnsBrands = [
    {id:1, snsBrand:faFacebook, address:"/#"},
    {id:2, snsBrand:faInstagram, address:"/#"},
    {id:3, snsBrand:faTwitter, address:"/#"},
    {id:4, snsBrand:faYoutube, address:"/#"}
  ];
  let footerSnsList = footerSnsBrands.map((brand) => {
    return (
      <li key={brand.id.toString()}
        className="footer-sns-title">
        <a href={brand.address}>
          <FontAwesomeIcon icon={brand.snsBrand} size="lg"/>
        </a>
      </li>
    )

  });
  /* footer menu */
  const footerMenuTitle = [
    {id:1, title:"about", address:"/#"},
    {id:2, title:"feedback", address:"/#"},
    {id:3, title:"help", address:"/#"},
    {id:4, title:"terms", address:"/#"},
    {id:5, title:"privacy", address:"/#"},
    {id:6, title:"advertise", address:"/#"},
    ];
  let footerMenuList = footerMenuTitle.map((menu) => {
    return (
      <React.Fragment key={menu.id.toString()}>
        <li  className="footer-menu-title">
          <a href={menu.address}>{menu.title}</a>
        </li>
        <li  className="footer-bar">|</li>
      </React.Fragment>
    )
  });
  
  return(
    <div id="footer">
      <div className="notice-area">
        <div className="notice-detail">
          <a href="/#">
            Notice
            <em className="icon-chevron-r"><FontAwesomeIcon icon={faChevronRight} /></em>
          </a>
          <a href="/#">
            WEBTOON CANVAS Creator rewards for April 
            <em className="notice-day">May 31, 2021</em>
          </a>
        </div>
      </div>
      <div className="footer-app">
        <p className="text">Download WEBTOON now!</p>
        <div className="footer-buttons">
          <a className="footer-button" href="/#">
            <img src="./images/google-play.png" alt=""></img>
          </a>
          <a className="footer-button" href="/#">
            <img src="./images/app-store.png" alt=""></img>
          </a>
        </div>
      </div>
      <ul className="footer-sns">
        {footerSnsList}
      </ul>
      <ul className="footer-menu">
        {footerMenuList}
        <li className="footer-menu-lang">
          <a href="/#" className="footer-lang">
            <span className="footer-lang-text">English</span>
            <em className="icon-chevron-d"><FontAwesomeIcon icon={faChevronDown}/></em>
          </a>  
        </li>
      </ul>
      <p className="footer-copyright">ⓒ WEBTOON Entertainment Inc.</p>
      <div className="footer-icon">
        <img src="./images/footer-icon.png" alt=""></img>
      </div>
    </div>
);
}

export default Footer;