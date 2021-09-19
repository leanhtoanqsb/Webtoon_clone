import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function ToolbarBrandButtons() {

  const brands = [
    { id: 1, snsBrand: faFacebook, onClick: (e) => {e.preventDefault()}, address:'#' },
    { id: 2, snsBrand: faInstagram,  onClick: (e) => {e.preventDefault()}, address: "#" },
    { id: 3, snsBrand: faTwitter,  onClick: (e) => {e.preventDefault()}, address: "#" },
    { id: 4, snsBrand: faYoutube,  onClick: (e) => {e.preventDefault()}, address: "#" },
  ];

  return(
    <ul className={styles.brand_buttons}>
      {
        brands.map((brand) => {
        return (
          <li key={brand.id.toString()} className={''}>
            <a
              className={styles.brand_link}
              href={brand.address}
              onClick={brand.onClick}
            >
              <FontAwesomeIcon icon={brand.snsBrand} size="lg" />
            </a>
          </li>
        );
      })
    }
    </ul>
  )
}
