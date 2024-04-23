import { ItemType } from "../homePage/HomePage";
import viewAllButton from "../../assets/FrontPage/ViewAllButton.png";
import { ItemsGrid } from "./ItemsGrid";
import { ItemsBlockBanner } from "./ItemsBlockBanner";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

interface ItemsBlockProps {
  enstring: string;
  jpstring: string;
  items: ItemType[];
}

export function ItemsBlock(props: ItemsBlockProps) {
  const navigate = useNavigate();

  return (
    <div className="items-block">
      <ItemsBlockBanner enstring={props.enstring} jpstring={props.jpstring} />
      <ItemsGrid items={props.items.slice(0, 4)} />
      <ItemsGrid items={props.items.slice(4, 8)} />
      <img className="view-all-button" src={viewAllButton} />
      <p className="view-all-button-text" onClick={() => navigate(AppRoutes.productsRoute)}>VIEW ALL</p>
    </div>
  );
}
