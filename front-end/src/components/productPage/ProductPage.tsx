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

export function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="product">
        <div className="product-left">
          <div className="product-left-outline">
            <img
              className="product-left-outline-image"
              src={dummyProduct.image}
            />
          </div>
          <p className="product-left-header">PRODUCT DETAILS</p>
          <p
            className="product-left-text"
            dangerouslySetInnerHTML={{ __html: dummyProduct.detailsHTML }}
          ></p>
          <p className="product-left-header">PLEASE READ BEFORE YOU BUY</p>
          <p
            className="product-left-text"
            dangerouslySetInnerHTML={{ __html: dummyProduct.readBeforeBuyHTML }}
          ></p>
        </div>
        <div className="product-right">
          <p className="product-right-header">{dummyProduct.name}</p>
          <div className="product-right-divider"></div>
          <p
            className="product-right-text"
            dangerouslySetInnerHTML={{ __html: dummyProduct.informationHTML }}
          ></p>
          <div>
            <p className="product-right-yellowText">Product</p>
            <div className="product-right-yellowNameBox">
              <span className="product-right-yellowNameBox-name">
                {dummyProduct.nameForSale}
              </span>
              <br />
              <span className="product-right-yellowNameBox-cost">
                Cost~{dummyProduct.price}
              </span>
            </div>
          </div>
          <div className="product-right-quantityAndShare">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <div>
              <p className="product-right-yellowText">Share</p>
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
            </div>
          </div>
          <div className="product-right-redButton">
            <img
              className="product-right-redButton-image"
              src={addToCartIcon}
            />
            <span className="product-right-redButton-text">Add to cart</span>
          </div>
        </div>
      </div>
      <HistoryGrid />
    </div>
  );
}
