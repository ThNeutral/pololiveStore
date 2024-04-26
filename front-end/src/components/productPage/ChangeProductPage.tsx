import { useState } from "react";
import suiseiProduct from "../../assets/DummyItems/suiseiProduct.png";
import facebook from "../../assets/ItemPage/facebook.svg";
import twitter from "../../assets/ItemPage/twitter.svg";
import instagram from "../../assets/ItemPage/instagram.svg";
import addToCartIcon from "../../assets/ItemPage/add-to-cart.png";
import { QuantitySelector } from "../common/QuantitySelector";
import { HistoryGrid } from "../common/HistoryGrid";

interface ProductType {
  image: string;
  detailsHTML: string;
  readBeforeBuyHTML: string;
  name: string;
  nameForSale: string;
  informationHTML: string;
  price: number;
}

const dummyProduct: ProductType = {
  image: suiseiProduct,
  detailsHTML:
    "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. <br/><br/> Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat.",
  readBeforeBuyHTML:
    "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. <br/><br/> Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat.",
  name: "Hoshimachi Suisei Birthday & 6th Anniversary Celebration",
  nameForSale: "Birthday & 6th Anniversary Merch Complete Set",
  informationHTML:
    "<p>The merchandise sales for the birthday and 6th anniversary celebration of Hoshimachi Suisei from hololive.</p><p>These products are made to order.</p><p>Shipping Schedule:<br/> Estimated around late August to late September 2024.</p>",
  price: 69420.01,
};

export function СhangeProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [hasChanged, setHasChanged] = useState(false);

  return (
    <div>
      <form className="product">
        <div className="product-left">
          <div className="product-left-outline">
            <img
              className="product-left-outline-image"
              src={dummyProduct.image}
            />
          </div>
          <p className="product-left-header">PRODUCT DETAILS</p>
          <textarea
            className="product-left-textArea"
            value={dummyProduct.detailsHTML}
            onChange={() => setHasChanged(true)}
          ></textarea>
          <p className="product-left-header">PLEASE READ BEFORE YOU BUY</p>
          <textarea
            className="product-left-textArea"
            value={dummyProduct.readBeforeBuyHTML}
            onChange={() => setHasChanged(true)}
          ></textarea>
        </div>
        <div className="product-right">
          <textarea
            className="product-right-smallTextArea"
            value={dummyProduct.name}
            style={{ marginTop: "40px" }}
            onChange={() => setHasChanged(true)}
          ></textarea>
          <div className="product-right-divider"></div>
          <textarea
            className="product-right-textArea"
            value={dummyProduct.informationHTML}
            onChange={() => setHasChanged(true)}
          ></textarea>
          <div>
            <p className="product-right-yellowText">Product</p>
            <div className="product-right-yellowNameBox">
              <textarea
                className="product-right-smallTextArea"
                value={dummyProduct.nameForSale}
                onChange={() => setHasChanged(true)}
              ></textarea>
              <br />
              <span className="product-right-yellowNameBox-cost">Cost~</span>
              <input
                type="number"
                value={dummyProduct.price}
                onChange={() => setHasChanged(true)}
              />
            </div>
          </div>
          <div className="product-right-editButtons">
            <button
              className={`product-right-editButtons-yellow-${
                hasChanged ? "changed" : "unchanged"
              }`}
            >
              EDIT
            </button>
            <button className="product-right-editButtons-red">DELETE</button>
          </div>
        </div>
      </form>
      <div style={{ marginBottom: "50px" }}></div>
    </div>
  );
}
