import React from "react";
import { NavLink } from "react-router-dom";

export default function LogoButton() {
  return (
    <NavLink to='/'
      style={{
        height: '100%',
        cursor: 'pointer',
      }}
    >
      <img
        style={{
          height: '100%',
        }}
        src='/images/logo.png' alt='webtoon'
      />
    </NavLink>
  );
}
