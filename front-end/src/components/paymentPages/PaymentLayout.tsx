import { Outlet } from "react-router-dom";
import uproarThumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { AccountItemType } from "../common/AccountItem";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const dummyItems: AccountItemType[] = [
  {
    image: uproarThumbnail,
    name: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    price: 69420.01,
  },
  {
    image: uproarThumbnail,
    name: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    price: 69420.01,
  },
  {
    image: uproarThumbnail,
    name: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    desc: 'セット / UPROAR!! 2nd Anniversary Special Voice Pack "Crazy King" Complete Set',
    price: 69420.01,
  },
];
export function PaymentLayout() {
  const [overallPrice, setOverallPrice] = useState<number>(0);

  useEffect(() => {
    let price = 0;
    for (const item of dummyItems) {
      price += item.price;
    }
    setOverallPrice(price);
  }, []);

  return (
    <div className="paymentLayout">
      <div className="paymentLayout-left"></div>
      <div className="paymentLayout-right">
        {dummyItems.map((item) => {
          return (
            <div className="paymentLayout-right-item" key={v4()}>
              <img
                className="paymentLayout-right-item-image"
                src={item.image}
              />
              <div className="paymentLayout-right-item-text">
                <p className="account-cart-item-left-text-name">{item.name}</p>
                <p className="account-cart-item-left-text-desc">{item.desc}</p>
                <p className="account-cart-item-left-text-price">
                  {"Cost~" + item.price}
                </p>
              </div>
            </div>
          );
        })}
        <div className="paymentLayout-right-discount">
          <form className="paymentLayout-right-discount-form">
            <div className="paymentLayout-right-discount-form-input">
              <input
                className="paymentLayout-right-discount-form-input-actual"
                type="text"
                placeholder="Discount code"
              />
            </div>
            <button
              className="paymentLayout-right-discount-form-button"
              type="submit"
            >
              APPLY
            </button>
          </form>
        </div>
        <div className="paymentLayout-right-total">
          <p className="paymentLayout-right-total-text">TOTAL</p>
          <p className="paymentLayout-right-total-text paymentLayout-right-total-text-right">
            {parseFloat(overallPrice.toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
}
