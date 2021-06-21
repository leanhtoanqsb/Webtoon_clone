import {listComic} from "../listComic";

const listComicCopy = listComic.map(x=>x);

export let popularComicByGenre = {
	actionFantasy : [],
	romanceDrama: [],
	comedy: [],
	sliceOfLife: [],
	other: []
};
listComicCopy.forEach((comic) => {
	switch (comic.genre) {
		case "action":
			popularComicByGenre.actionFantasy.push(comic)	
			break;
		case "fantasy":
			popularComicByGenre.actionFantasy.push(comic)	
			break;
		case "romance":
			popularComicByGenre.romanceDrama.push(comic)	
			break;
		case "drama":
			popularComicByGenre.romanceDrama.push(comic)	
			break;
		case "comedy":
			popularComicByGenre.comedy.push(comic)	
			break;
		case "slice of life":
			popularComicByGenre.sliceOfLife.push(comic)	
			break;
		default:
			popularComicByGenre.other.push(comic)
			break;
	}
});