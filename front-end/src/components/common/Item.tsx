import { v4 } from "uuid";
import { ItemType } from "../homePage/HomePage";

interface ItemProps {
  item: ItemType;
}

export function Item(props: ItemProps) {
  return (
    <div className="itemsGrid-item" key={v4()}>
      <img className="itemsGrid-item-image" src={props.item.image} />
      <p className="itemsGrid-item-name">{props.item.name}</p>
      <p className="itemsGrid-item-cost">cost~ {props.item.cost}</p>
    </div>
  );
}
