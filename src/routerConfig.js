import React from "react";
import {Route} from "react-router-dom";
import Home from "Homebody";
import Originals from "Originals";
import Genres from "Genres";
import Popular from "Popular";
import ComicDetail from "ComicDetail";
import ChapterDetail from "ChapterDetail";

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
  COMIC_DETAIL: {
    name: "COMIC_DETAIL",
    path: "/comic-detail",
    Component: () => <ComicDetail />,
  },
  CHAPTER_DETAIL: {
    name: "CHAPTER_DETAIL",
    path: "/chapter-detail",
    Component: () => <ChapterDetail />,
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
