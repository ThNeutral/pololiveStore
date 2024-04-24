import { useNavigate } from "react-router-dom";
import { AccountItem, AccountItemType } from "./AccountItem";
import AppRoutes from "../../helpers/routes";

const strings = {
  products: {
    product: "Product",
    total: "Total",
    quantity: "Quantity",
  },
  checkout: {
    message: "Shipping & taxes calculated at checkout",
  },
};

interface AccountTableProps {
  items: AccountItemType[];
  overallPrice: number;
  isExtended?: boolean;
}

export function AccountTable(props: AccountTableProps) {
  const navigate = useNavigate();

  return (
    <div className="account-cart">
      <div className="account-cart-text">
        <p>{strings.products.product}</p>
        <p>{strings.products.total}</p>
      </div>
      <div className="account-cart-line"></div>
      {props.items.map((item) => {
        return <AccountItem item={item} isExtended={props.isExtended} />;
      })}
      {props.isExtended ? <div className="account-cart-line"></div> : null}
      <div className="account-cart-overallPrice">
        <p>{"Overall price~" + props.overallPrice}</p>
        {props.isExtended ? (
          <p className="account-cart-message">{strings.checkout.message}</p>
        ) : null}
        {props.isExtended ? (
          <div
            onClick={() => navigate(AppRoutes.informationRoute)}
            className="account-cart-button"
          >
            CHECKOUT
          </div>
        ) : null}
      </div>
    </div>
  );
}
