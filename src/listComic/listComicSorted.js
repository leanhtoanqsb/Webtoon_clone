import { listComic } from "./listComic";

export let popularComicByGenre = {
  actionFantasy: [],
  romanceDrama: [],
  comedy: [],
  sliceOfLife: [],
  others: [],
};
{
  const listComicCopy = listComic.map((x) => x);
  listComicCopy.map((comic) => {
    switch (comic.genre) {
      case "action":
        if (popularComicByGenre.actionFantasy.length < 5) {
          popularComicByGenre.actionFantasy.push(comic);
        }
        break;
      case "fantasy":
        if (popularComicByGenre.actionFantasy.length < 5) {
          popularComicByGenre.actionFantasy.push(comic);
        }
        break;
      case "romance":
        if (popularComicByGenre.romanceDrama.length < 5) {
          popularComicByGenre.romanceDrama.push(comic);
        }
        break;
      case "drama":
        if (popularComicByGenre.romanceDrama.length < 5) {
          popularComicByGenre.romanceDrama.push(comic);
        }
        break;
      case "comedy":
        if (popularComicByGenre.comedy.length < 5) {
          popularComicByGenre.comedy.push(comic);
        }
        break;
      case "slice of life":
        if (popularComicByGenre.sliceOfLife.length < 5) {
          popularComicByGenre.sliceOfLife.push(comic);
        }
        break;
      default:
        if (popularComicByGenre.others.length < 5) {
          popularComicByGenre.others.push(comic);
        }
        break;
    }
  });
}

export let popularComicByAge = {
  males10s: [],
  females10s: [],
  males20s: [],
  females20s: [],
  males30s: [],
  females30s: [],
};
{
  const listComicCopy = listComic.map((x) => x);
  let listKeys = Object.keys(popularComicByAge);
  listKeys.map((idx) => {
    for (let i = 0; i < 5; i++) {
      popularComicByAge[idx] = [...popularComicByAge[idx], listComicCopy.pop()];
    }
  });
}
