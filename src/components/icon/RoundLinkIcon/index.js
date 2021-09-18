import React from "react";
import styles from "./index.module.css";

export default function RoundLinkIcon({
  url='#',
  iconUrl='',
  size='20px',
  onClick=() => {},
}) {
  return (
    <a
      href={url}
      className={styles.icon}
      style={{
        backgroundImage: `url(${iconUrl})`,
        width: size,
        height: size,
      }}
      onClick={onClick}
    >
    </a>
  )
}
