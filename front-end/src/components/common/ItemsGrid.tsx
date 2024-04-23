import { ItemType } from "../homePage/HomePage";
import { Item } from "./Item";

interface ItemsGridProps {
  items: ItemType[];
}

export function ItemsGrid(props: ItemsGridProps) {
  return (
    <div className="itemsGrid">
      {props.items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
}
