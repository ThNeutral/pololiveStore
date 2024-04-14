import { ItemType } from "../homePage/HomePage";

interface ItemsGridProps {
  items: ItemType[];
}

export function ItemsGrid(props: ItemsGridProps) {
  return (
    <div className="itemsGrid">
      {props.items.map((item) => {
        return (
          <div className="itemsGrid-item">
            <img className="itemsGrid-item-image" src={item.image} />
            <p className="itemsGrid-item-name">{item.name}</p>
            <p className="itemsGrid-item-cost">cost~ {item.cost}</p>
          </div>
        );
      })}
    </div>
  );
}
