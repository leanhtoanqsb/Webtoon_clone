import React from "react";
import {Route} from "react-router-dom";
const Home = React.lazy(() =>import("Homebody"));
const Originals = React.lazy(() =>import("Originals"));
const Genres = React.lazy(() =>import("Genres"));
const Popular = React.lazy(() =>import("Popular"));
const ComicDetail = React.lazy(() =>import("ComicDetail"));
const ChapterDetail = React.lazy(() =>import("ChapterDetail"));

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
