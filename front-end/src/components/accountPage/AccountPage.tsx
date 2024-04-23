import { useNavigate } from "react-router-dom";
import { ItemsBlockBanner } from "../common/ItemsBlockBanner";
import AppRoutes from "../../helpers/routes";
import uproarThumbnail from "../../assets/DummyItems/uproarThumbnail.png";
import { v4 as v4uuid } from "uuid";
import { useEffect, useState } from "react";

const strings = {
  account: {
    en: "Your Account",
    jp: "私 の ア カ ウ ン ト",
  },
  welcome: "Welcome back, ",
  actions: {
    manage: "Manage Personal Info",
    logout: "Log Out",
  },
  products: {
    product: "Product",
    total: "Total",
  },
};

interface AccountItemType {
  image: string;
  name: string;
  desc: string;
  price: number;
}

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

export default function AccountPage() {
  const navigate = useNavigate();
  const [overallPrice, setOverallPrice] = useState<number>(0);

  useEffect(() => {
    let tempPrice = 0;
    for (const item of dummyItems) {
      tempPrice += item.price;
    }
    setOverallPrice(parseFloat(tempPrice.toFixed(2)));
  }, []);

  function handleLogOut() {
    navigate(AppRoutes.homeRoute);
  }

  return (
    <>
      <ItemsBlockBanner
        enstring={strings.account.en}
        jpstring={strings.account.jp}
      />
      <div className="account-buttons">
        <div className="account-buttons-welcome">
          {strings.welcome + "User"}
        </div>
        <div className="account-buttons-actions">
          <div
            className="account-buttons-actions-action"
            onClick={() => navigate(AppRoutes.todoRoute)}
          >
            {strings.actions.manage}
          </div>
          <div
            className="account-buttons-actions-action"
            onClick={handleLogOut}
          >
            {strings.actions.logout}
          </div>
        </div>
      </div>
      <div className="account-cart">
        <div className="account-cart-text">
          <p>{strings.products.product}</p>
          <p>{strings.products.total}</p>
        </div>
        <div className="account-cart-line"></div>
        {dummyItems.map((item) => {
          return (
            <div id={v4uuid()} className="account-cart-item">
              <div className="account-cart-item-left">
                <img
                  className="account-cart-item-left-image"
                  src={item.image}
                />
                <div className="account-cart-item-left-text">
                  <p className="account-cart-item-left-text-name">
                    {item.name}
                  </p>
                  <p className="account-cart-item-left-text-desc">
                    {item.desc}
                  </p>
                  <p className="account-cart-item-left-text-price">
                    {"Cost~" + item.price}
                  </p>
                </div>
              </div>
              <div className="account-cart-item-right">
                {"Cost~" + item.price}
              </div>
            </div>
          );
        })}
        <div className="account-cart-overallPrice">{"Overall price~" + overallPrice}</div>
      </div>
    </>
  );
}
