import { ItemsBlockBanner } from "./ItemsBlockBanner";
import ItemsGridCarousel from "./ItemsGridCarousel";
import thumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { ItemType } from "../homePage/HomePage";

const dummyItem: ItemType = {
  image: thumbnail,
  name: 'hololive Indonesia 3rd Generation "holoh3ro" 2nd Anniversary Celebration',
  cost: 100.01,
};

const dummyItemSet: ItemType[] = Array<ItemType>(8).fill(dummyItem);

const string = {
  history: {
    en: "HISTORY",
    jp: "ブ シ ョ ッ プ の 履 歴",
  },
};

export function HistoryGrid() {
  return (
    <>
      <ItemsBlockBanner
        jpstring={string.history.jp}
        enstring={string.history.en}
      />
      <ItemsGridCarousel size={4} items={dummyItemSet} />
    </>
  );
}
