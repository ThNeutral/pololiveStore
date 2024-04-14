import { ItemType } from "../homePage/HomePage";
import { v4 as uuidv4 } from "uuid";

interface ItemsGridProps {
  items: ItemType[];
}

export function ItemsGrid(props: ItemsGridProps) {
  return (
    <div className="itemsGrid">
      {props.items.map((item) => {
        return (
          <div className="itemsGrid-item" key={uuidv4()}>
            <img className="itemsGrid-item-image" src={item.image} />
            <p className="itemsGrid-item-name">{item.name}</p>
            <p className="itemsGrid-item-cost">cost~ {item.cost}</p>
          </div>
        );
      })}
    </div>
  );
}
