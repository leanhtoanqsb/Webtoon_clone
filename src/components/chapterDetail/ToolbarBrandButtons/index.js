import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToolbarBrandButtons() {

  const brands = [
    { id: 1, snsBrand: 'facebook', onClick: (e) => {e.preventDefault()}, address:'#' },
    { id: 2, snsBrand: 'instagram',  onClick: (e) => {e.preventDefault()}, address: "#" },
    { id: 3, snsBrand: 'twitter',  onClick: (e) => {e.preventDefault()}, address: "#" },
    { id: 4, snsBrand: 'youtube',  onClick: (e) => {e.preventDefault()}, address: "#" },
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
              <FontAwesomeIcon icon={['fab',brand.snsBrand]} size="lg" />
            </a>
          </li>
        );
      })
    }
    </ul>
  )
}
