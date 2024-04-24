import minusRed from "../../assets/ItemPage/minus_red.png";
import plusRed from "../../assets/ItemPage/plus_red.png";

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function QuantitySelector({quantity, setQuantity}: QuantitySelectorProps) {
  return (
    <div>
      <p className="product-right-yellowText">Quantity</p>
      <div className="product-right-quantityAndShare-quantity">
        <div
          className={
            `product-right-quantityAndShare-quantity-minus` +
            (quantity === 1
              ? " product-right-quantityAndShare-quantity-disabled"
              : "")
          }
          onClick={quantity !== 1 ? () => setQuantity(quantity - 1) : () => {}}
        >
          <img
            className={
              `product-right-quantityAndShare-quantity-minus-image` +
              (quantity === 1
                ? " product-right-quantityAndShare-quantity-disabled"
                : "")
            }
            src={minusRed}
          />
        </div>
        <div className="product-right-quantityAndShare-quantity-number">
          {quantity}
        </div>
        <div
          className="product-right-quantityAndShare-quantity-plus"
          onClick={() => setQuantity(quantity + 1)}
        >
          <img
            className="product-right-quantityAndShare-quantity-plus-image"
            src={plusRed}
          />
        </div>
      </div>
    </div>
  );
}
