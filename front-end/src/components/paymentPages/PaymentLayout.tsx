import { Outlet, useNavigate } from "react-router-dom";
import logoSoftPurple from "../../assets/Header/MerchHolo logo (soft purple).png";
import uproarThumbnail from "../../assets/DummyItems/holoIdThumbnail.png";
import { AccountItemType } from "../common/AccountItem";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AppRoutes from "../../helpers/routes";

const strings = {
  en: {
    label: "OFFICIAL SHOP",
    smallLabel: "pololive productions",
    lang: "EN",
  },
};

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
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    for (const item of dummyItems) {
      price += item.price;
    }
    setOverallPrice(price);
  }, []);

  function logoClickHandler() {
    navigate(AppRoutes.homeRoute);
  }

  return (
    <div className="paymentLayout">
      <div className="paymentLayout-left">
        <div className="paymentLayout-left-left">
          <div className="paymentLayout-left-left-icon">
            <img
              className="paymentLayout-left-left-logo"
              src={logoSoftPurple}
              onClick={logoClickHandler}
            />
            <div
              className="paymentLayout-left-left-text"
              onClick={logoClickHandler}
            >
              <p className="paymentLayout-left-left-text-small">
                {strings.en.smallLabel}
              </p>
              <p className="paymentLayout-left-left-text-big">
                {strings.en.label}
              </p>
            </div>
          </div>
          <div className="paymentLayout-left-left-breadcrumbs">
            <span>Cart</span> &gt; <span>Infromation</span> &gt;{" "}
            <span>Payment/Confirmation</span>
          </div>
          <Outlet />
          <div className="paymentLayout-left-left-information">
            <div className="paymentLayout-left-left-information-line"></div>
            <div className="paymentLayout-left-left-information-text">
              <p
                className="paymentLayout-left-left-information-text-link"
                onClick={() => navigate(AppRoutes.todoRoute)}
              >
                Refund policy
              </p>
              <p
                className="paymentLayout-left-left-information-text-link"
                onClick={() => navigate(AppRoutes.todoRoute)}
              >
                Privacy policy
              </p>
              <p
                className="paymentLayout-left-left-information-text-link"
                onClick={() => navigate(AppRoutes.todoRoute)}
              >
                Terms of service
              </p>
            </div>
          </div>
        </div>
      </div>
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
