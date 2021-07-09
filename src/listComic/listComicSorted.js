import { listComic } from "./listComic";

export const listComicByDay = listComic.reduce((result, comic) => {
  comic.weekday.forEach((day) => {
    result[day] = [...(result[day] || []), comic]
  })
  return result
}, {});

let genreMapping = [
  "drama", "fantasy", "comedy", "action", "romance",
  "superhero", "thriller", "supernatural",
]
export const listComicByGenre = listComic.reduce((result, comic) => {
  const matchedKey = genreMapping.find((key) => {
    return key === comic.genre;
  });
  if (matchedKey) {
    result = {
      ...result,
      [matchedKey]: [...(result[matchedKey] || []), comic],
    };
  }
  if (!matchedKey) {
    result = {
      ...result,
      ["others"]: [...(result["others"] || []), comic],
    };
  }
  return result;
}, {});

let mapping = {
  actionFantasy: ["action", "fantasy"],
  romanceDrama: ["romance", "drama"],
  comedy: ["comedy"],
  sliceOfLife: ["slice of life"],
};
let checkResult = [];
export const popularComicByGenre = listComic.reduce((result, comic) => {
  const matchedKey = Object.keys(mapping).find((key) => {
    return mapping[key].includes(comic.genre);
  });
  if (matchedKey && !checkResult.includes(matchedKey)) {
    result = {
      ...result,
      [matchedKey]: [...(result[matchedKey] || []), comic],
    };
    if (result[matchedKey].length === 5) {
      checkResult.push(matchedKey);
    }
  }
  if (!matchedKey && !checkResult.includes("others")) {
    result = {
      ...result,
      ["others"]: [...(result["others"] || []), comic],
    };
    if (result["others"].length === 5) {
      checkResult.push("others");
    }
  }
  return result;
}, {});

export let popularComicByAge = {
  males10s: [],
  females10s: [],
  males20s: [],
  females20s: [],
  males30s: [],
  females30s: [],
};
{
  let listKeys = Object.keys(popularComicByAge);
  let count = 0;
  listKeys.map((key) => {
    for (let i = 0; i < 5; i++) {
      popularComicByAge[key].push(listComic[count]);
      count++;
    }
  });
}
