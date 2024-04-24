import { v4 } from "uuid";
import { ItemsBlockBanner } from "../common/ItemsBlockBanner";
import { ItemsGrid } from "../common/ItemsGrid";
import thumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { ItemType } from "../homePage/HomePage";
import { useState } from "react";
import yellowOutline from "../../assets/ItemListPage/yellow-outline.png";
import { HistoryGrid } from "../common/HistoryGrid";

const string = {
  merch: {
    en: "MERCH LIST",
    jp: "グ ッ ズ リ ス ト",
  },
  history: {
    en: "HISTORY",
    jp: "ブ シ ョ ッ プ の 履 歴",
  },
};

const dummyRecommended = ["Ending Soon", "Regular", "New Arrival"];

const dummyCategories = [
  "Clothes",
  "Plushies",
  "Figurines",
  "Posters",
  "Song records",
];

const dummyItem: ItemType = {
  image: thumbnail,
  name: 'hololive Indonesia 3rd Generation "holoh3ro" 2nd Anniversary Celebration',
  cost: 100.01,
};

const dummyItemSet: ItemType[] = Array<ItemType>(8).fill(dummyItem);

export default function ProductsPage() {
  const [itemsToShow, setItemsToShow] = useState<ItemType[]>([...dummyItemSet]);

  function handleGetMoreItems() {
    setItemsToShow([...itemsToShow, ...dummyItemSet]);
  }

  return (
    <>
      <ItemsBlockBanner jpstring={string.merch.jp} enstring={string.merch.en} />
      <div className="merchList">
        <div className="merchList-categories">
          <p className="merchList-categories-header">Filter by</p>
          <p className="merchList-categories-text">Recommended</p>
          {dummyRecommended.map((rec) => {
            return (
              <div id={v4()} className="merchList-categories-category">
                <input type="checkbox" />
                <span>{rec}</span>
              </div>
            );
          })}
          <p className="merchList-categories-text">Category</p>
          {dummyCategories.map((cat) => {
            return (
              <div id={v4()} className="merchList-categories-category">
                <input type="checkbox" />
                <span>{cat}</span>
              </div>
            );
          })}
        </div>
        <div className="merchList-items">
          {oneToTwoDimensions(itemsToShow, 4).map((items) => (
            <ItemsGrid items={items} />
          ))}
          <div className="merchList-items-div" onClick={handleGetMoreItems}>
            <img
              className="merchList-items-div-yellowButton"
              src={yellowOutline}
            />
            <div className="merchList-items-div-yellowButton-text">MORE</div>
          </div>
        </div>
      </div>
      <HistoryGrid />
    </>
  );
}

function oneToTwoDimensions(itemSet: ItemType[], size: number): ItemType[][] {
  const res: ItemType[][] = [];
  for (
    let i = 0;
    i <
    (itemSet.length +
      (size - (itemSet.length % size) === 0 ? size : itemSet.length % size)) /
      size;
    i++
  ) {
    res.push(itemSet.slice(i, i + 4));
  }
  return res.filter((i) => !!i);
}
