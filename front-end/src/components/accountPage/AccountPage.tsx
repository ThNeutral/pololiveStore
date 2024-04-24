import { useNavigate } from "react-router-dom";
import { ItemsBlockBanner } from "../common/ItemsBlockBanner";
import AppRoutes from "../../helpers/routes";
import uproarThumbnail from "../../assets/DummyItems/uproarThumbnail.png";
import { useEffect, useState } from "react";
import { AccountItemType } from "../common/AccountItem";
import { AccountTable } from "../common/AccountTable";

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
      <AccountTable items={dummyItems} overallPrice={overallPrice} isExtended={false} />
    </>
  );
}
