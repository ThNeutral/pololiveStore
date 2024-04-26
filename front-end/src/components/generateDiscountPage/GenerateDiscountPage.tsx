import { useRef } from "react";
import { v4 } from "uuid";
import arrow from "../../assets/DiscountGenerationPage/Back_Arrow_VIOLET.png";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

export function GenerateDiscountPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleGenerateCode() {
    if (inputRef.current) {
      inputRef.current.value = v4();
    }
  }

  return (
    <div className="generateDiscount">
      <img
        className="generateDiscount-image"
        src={arrow}
        onClick={() => navigate(AppRoutes.keyStatsRoute)}
      />
      <form className="generateDiscount-form">
        <div className="generateDiscount-form-inputs">
          <input
            className="generateDiscount-form-inputs-input"
            placeholder="Enter the item title..."
          />
          <div className="generateDiscount-form-inputs-discount">
            <input
              ref={inputRef}
              className="generateDiscount-form-inputs-input"
              placeholder="Generate the discount code..."
            />
            <button
              type="button"
              onClick={handleGenerateCode}
              className="generateDiscount-form-inputs-discount-button"
            >
              GENERATE
            </button>
          </div>
        </div>
        <button type="submit" className="generateDiscount-form-inputs-button">
          ADD
        </button>
      </form>
    </div>
  );
}
