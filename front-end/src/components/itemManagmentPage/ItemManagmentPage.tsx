import { v4 } from "uuid";
import thumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { ItemManagmentItem } from "./ItemManagmentItem";
import yellowOutline from "../../assets/ItemListPage/yellow-outline.png";

export interface ItemManagmentItemType {
  image: string;
  name: string;
  cost: number;
}

const dummyItem: ItemManagmentItemType = {
  image: thumbnail,
  name: 'hololive Indonesia 3rd Generation "holoh3ro" 2nd Anniversary Celebration',
  cost: 69.42,
};

const dummyItemSet: ItemManagmentItemType[] =
  Array<ItemManagmentItemType>(44).fill(dummyItem);

export function ItemManagmentPage() {
  function handleGetMoreItems() {}

  return (
    <div className="itemManagmentPage">
      <div className="itemManagmentPage-items">
        {dummyItemSet.map((item) => (
          <ItemManagmentItem item={item} key={v4()} />
        ))}
      </div>
      <div className="itemManagmentPage-button">
        <img className="itemManagmentPage-button-outline" src={yellowOutline} />
        <p
          className="itemManagmentPage-button-text"
          onClick={handleGetMoreItems}
        >
          MORE
        </p>
      </div>
    </div>
  );
}
