import { v4 } from "uuid";
import { ItemType } from "../homePage/HomePage";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

interface ItemProps {
  item: ItemType;
}

export function Item(props: ItemProps) {
  const navigate = useNavigate();

  return (
    <div className="itemsGrid-item" onClick={() => navigate(AppRoutes.productRoute)}>
      <img className="itemsGrid-item-image" src={props.item.image} />
      <p className="itemsGrid-item-name">{props.item.name}</p>
      <p className="itemsGrid-item-cost">cost~ {props.item.cost}</p>
    </div>
  );
}
