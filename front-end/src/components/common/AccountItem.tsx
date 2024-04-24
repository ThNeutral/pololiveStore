import { v4 } from "uuid";
import { QuantitySelector } from "./QuantitySelector";
import { useState } from "react";

export interface AccountItemType {
  image: string;
  name: string;
  desc: string;
  price: number;
}

interface AccountItemProps {
  item: AccountItemType;
  isExtended?: boolean;
}

export function AccountItem(props: AccountItemProps) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div id={v4()} className="account-cart-item">
      <div className="account-cart-item-left">
        <img className="account-cart-item-left-image" src={props.item.image} />
        <div className="account-cart-item-left-text">
          <p className="account-cart-item-left-text-name">{props.item.name}</p>
          <p className="account-cart-item-left-text-desc">{props.item.desc}</p>
          <p className="account-cart-item-left-text-price">
            {"Cost~" + props.item.price}
          </p>
        </div>
      </div>
      {props.isExtended ? (
        <div className="account-cart-item-center">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
      ) : null}
      <div className="account-cart-item-right">
        {"Cost~" + props.item.price}
      </div>
    </div>
  );
}
