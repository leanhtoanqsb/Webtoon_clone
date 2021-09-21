import React from "react";
import styles from "./index.module.css";
import {Link} from "react-router-dom";

export default function RoundButton({
  to='',
  buttonStyles={},
  children
}) {
  let stylesDefault = {
    background: '#ccc',
    color: '#000',
    height: '1.875rem',
    fontSize: '1.25rem',
  }
  let {
    background = stylesDefault.background,
    color = stylesDefault.color,
    height = stylesDefault.height,
    fontSize = stylesDefault.fontSize,
    ...styleProps
  } = buttonStyles

  function devide(str, amount) {
    let pre = '';
    let suf = '';
    [...str].forEach((char) => {
      (isNaN(char) && char != '.') ? suf += char : pre += char
    })
    return parseFloat(pre)/amount + suf
  }
  let borderRadius = devide(height,2)

  stylesDefault = null;//GC
  devide = null;//GC

  if (to) {
    return (
      <Link
        to={to}
        className={styles.button}
        style={{
          background:background,
          color:color,
          height:height,
          borderRadius:borderRadius,
          ...styleProps
        }}
        onMouseEnter={() => {}}//prepare for custom hover
        onMouseLeave={() => {}}//prepare for custom hover
      >
        <span
          style={{
            fontSize:fontSize,
            lineHeight:height,
          }}
        >
          {children}
        </span>
      </Link>
    )
  }

  return (
    <button
      className={styles.button}
      style={{
        background:background,
        color:color,
        height:height,
        borderRadius:borderRadius,
        ...styleProps
      }}
      onMouseEnter={() => {}}//prepare for custom hover
      onMouseLeave={() => {}}//prepare for custom hover
    >
      <span
        style={{
          fontSize:fontSize,
          lineHeight:height,
        }}
      >
        {children}
      </span>
    </button>
  );
}


