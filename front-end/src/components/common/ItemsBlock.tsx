import { ItemType } from "../homePage/HomePage";
import viewAllButton from "../../assets/FrontPage/ViewAllButton.png";
import { ItemsGrid } from "./ItemsGrid";
import { ItemsBlockBanner } from "./ItemsBlockBanner";

interface ItemsBlockProps {
  enstring: string;
  jpstring: string;
  items: ItemType[];
}

export function ItemsBlock(props: ItemsBlockProps) {
  return (
    <div className="items-block">
      <ItemsBlockBanner enstring={props.enstring} jpstring={props.jpstring} />
      <ItemsGrid items={props.items.slice(0, 4)} />
      <ItemsGrid items={props.items.slice(4, 8)} />
      <img className="view-all-button" src={viewAllButton} />
      <p className="view-all-button-text">VIEW ALL</p>
    </div>
  );
}
