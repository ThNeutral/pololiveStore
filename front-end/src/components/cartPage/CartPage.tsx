import { AccountItemType } from "../common/AccountItem";
import { AccountTable } from "../common/AccountTable";
import { ItemsBlockBanner } from "../common/ItemsBlockBanner";
import uproarThumbnail from "../../assets/DummyItems/uproarThumbnail.png";
import { useEffect, useState } from "react";
import { HistoryGrid } from "../common/HistoryGrid";

const string = {
  cart: {
    en: "SHOP CART",
    jp: "シ ョ ッ ピ ン グ カ ー ト",
  },
  history: {
    en: "HISTORY",
    jp: "ブ シ ョ ッ プ の 履 歴",
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

export function CartPage() {
  const [overallPrice, setOverallPrice] = useState<number>(0);

  useEffect(() => {
    let tempPrice = 0;
    for (const item of dummyItems) {
      tempPrice += item.price;
    }
    setOverallPrice(parseFloat(tempPrice.toFixed(2)));
  }, []);

  return (
    <>
      <ItemsBlockBanner jpstring={string.cart.jp} enstring={string.cart.en} />
      <AccountTable items={dummyItems} overallPrice={overallPrice} isExtended />
      <HistoryGrid />
    </>
  );
}
