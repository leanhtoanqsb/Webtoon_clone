import React from "react";
import styles from "./index.module.css";

export default function SectionNavigation({
  listSelection,
  currentSelection,
  style,
}) {
  const scrollTo = (position) => {
    window.scroll({
      top: position,
      behavior: "smooth",
    });
  };
  const tableSelection = listSelection.map((selection) => {
    const key = Object.keys(selection);
    const isCurrentSelection = selection[key].title === currentSelection;
    const colorStyle = isCurrentSelection ? "#fff" :  "#000"
    return (
      <li key={selection[key].title} className={styles.item}>
        <a
          href={`#${selection[key].title}`}
          className={`
          ${styles.btn_selection}
          ${isCurrentSelection ? styles.btn_selection_active : ""}
        `}
          style={{color: colorStyle, ...(style || {})}}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = isCurrentSelection
              ? "#fff"
              : "#00dc64";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = isCurrentSelection ? "#fff" : "#000";
          }}
          onClick={(e) => {
            e.preventDefault();
            selection[key].handleClick();
          }}
        >
          {selection[key].title}
        </a>
      </li>
    );
  });
  return <ul className={styles.table}>{tableSelection}</ul>;
}
