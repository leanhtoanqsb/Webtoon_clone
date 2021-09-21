import React from "react";
import styles from "./index.module.css";

export default function SectionNavigation({
  listSelection,//[{title: string, handleClick: function, activeColor: string}]
  currentSelection,//string
  style,//CSS style format: JS Object
}) {
  const scrollTo = (position) => {
    window.scroll({
      top: position,
      behavior: "smooth",
    });
  };
  const tableSelection = listSelection.map((selection) => {
    const isCurrentSelection = selection.title === currentSelection;
    const colorStyle = isCurrentSelection ? "#fff" :  "#000"
    return (
      <li key={selection.title} className={styles.item}>
        <a
          href={`#${selection.title}`}
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
            selection.handleClick();
          }}
        >
          <span className={styles.title}>
            {formatTitle(selection.displayTitle)}
          </span>
        </a>
      </li>
    );
  });
  function formatTitle(title) {
    let cache = ''
    let array = []
    for (let i = 0; i < title.length; i++) {
      if (title[i] == '/') {
        array.push(cache)
        array.push(<br/>)
        cache = title[i]
        continue
      }
      cache += title[i]
      if (i == title.length - 1) {
        array.push(cache)
        break
      }
    }
    return array
  }
  return <ul className={styles.table}>{tableSelection}</ul>;
}
