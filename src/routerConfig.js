import React from "react";
import {Route} from "react-router-dom";
import Home from "Homebody/index.js";
import Originals from "Originals/index.js";
import Genres from "Genres/index.js";
import Popular from "Popular/index.js";

const routerConfig = {
  HOME: {
    name: "HOME",
    path: "/",
    Component: () => <Home />,
  },
  ORIGINALS: {
    name: "ORIGINALS",
    path: "/originals",
    Component: () => <Originals />,
  },
  GENRES: {
    name: "GENRES",
    path: "/genres",
    Component: () => <Genres />,
  },
  POPULAR: {
    name: "POPULAR",
    path: "/popular",
    Component: () => <Popular />,
  },
};


export const generateRoutes = (config) => {
  return Object.values(config).map(route => {
    const {name, path, Component} = route;
    return (
      <Route exact path={path} key={name}>
        <Component />
      </Route>
    );
  });
};

export default routerConfig;
