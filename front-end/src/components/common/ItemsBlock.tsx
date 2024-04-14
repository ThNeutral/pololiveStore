import { ItemType } from "../homePage/HomePage";
import decorGold from "../../assets/FrontPage/DecorGold.png";
import decorPurple from "../../assets/FrontPage/DecorPurple.png";
import smallerLines from "../../assets/FrontPage/smallerLines.png";
import viewAllButton from "../../assets/FrontPage/ViewAllButton.png";
import { ItemsGrid } from "./ItemsGrid";

interface ItemsBlockProps {
  enstring: string;
  jpstring: string;
  items: ItemType[];
}

export function ItemsBlock(props: ItemsBlockProps) {
  return (
    <div className="items-block">
      <div className="divider">
        <div className="divider-banner">
          <div className="divider-banner-text">
            <p className="divider-banner-text-jp">{props.jpstring}</p>
            <p className="divider-banner-text-en">{props.enstring}</p>
          </div>
          <img className="divider-banner-decorGold-top" src={decorGold}/>
          <img className="divider-banner-decorGold-bottom" src={decorGold}/>
          <img className="divider-banner-decorPurple-top" src={decorPurple}/>
          <img className="divider-banner-decorPurple-bottom" src={decorPurple}/>
          <img className="divider-lines-left" src={smallerLines} />
          <img className="divider-lines-right" src={smallerLines} />
        </div>
      </div>
      <ItemsGrid items={props.items.slice(0, 4)} />
      <ItemsGrid items={props.items.slice(4, 8)} />
      <img className="view-all-button" src={viewAllButton}/>
      <p className="view-all-button-text">VIEW ALL</p>
    </div>
  );
}
