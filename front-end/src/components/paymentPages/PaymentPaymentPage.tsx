import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";
import { useState } from "react";
import amazonPay from "../../assets/PaymentPage/amazon-pay.png";
import paypal from "../../assets/PaymentPage/paypal.png";

export function PaymentPaymentPage() {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    0 | 1 | 2 | 3
  >(0);

  return (
    <div className="paymentForm">
      <p className="paymentForm-information">
        <span className="paymentForm-information-header">
          Payment/Confirmation
        </span>
        <br />
        <br />
        All transactions are secure and encrypted.
        <br />
        <br />
        Timing of payment may vary depending on the payment method you have
        chosen upon your purchase. Please refer to our “Legal Information and
        Notices required by the Act on Specified Commercial Transactions”.
        <br />
        <br />
        https://shop.pololivepro.com/pages/law
        <br />
      </p>
      <form className="paymentForm-form">
        <div className="paymentForm-form-radioButton">
          {selectedPaymentMethod !== 1 ? (
            <div
              className="paymentForm-form-radioButton-unselected"
              onClick={() => setSelectedPaymentMethod(1)}
            ></div>
          ) : (
            <div className="paymentForm-form-radioButton-selected">
              <div className="paymentForm-form-radioButton-selected-inner"></div>
            </div>
          )}
          <p>Credit card</p>
        </div>
        <div className="paymentForm-form-radioButton">
          {selectedPaymentMethod !== 2 ? (
            <div
              className="paymentForm-form-radioButton-unselected"
              onClick={() => setSelectedPaymentMethod(2)}
            ></div>
          ) : (
            <div className="paymentForm-form-radioButton-selected">
              <div className="paymentForm-form-radioButton-selected-inner"></div>
            </div>
          )}
          <img className="paymentForm-form-radioButton-icon" src={paypal} />
        </div>
        <div className="paymentForm-form-radioButton">
          {selectedPaymentMethod !== 3 ? (
            <div
              className="paymentForm-form-radioButton-unselected"
              onClick={() => setSelectedPaymentMethod(3)}
            ></div>
          ) : (
            <div className="paymentForm-form-radioButton-selected">
              <div className="paymentForm-form-radioButton-selected-inner"></div>
            </div>
          )}
          <img
            className="paymentForm-form-radioButton-icon"
            style={{ marginTop: "8px" }}
            src={amazonPay}
          />
        </div>
        <div className="paymentForm-form-buttons">
          <p
            className="paymentForm-form-buttons-return"
            onClick={() => navigate(AppRoutes.informationRoute)}
          >
            &lt; Return to information
          </p>
          <button
            className="paymentForm-form-buttons-button"
            onClick={() => navigate(AppRoutes.todoRoute)}
          >
            Complete order
          </button>
        </div>
      </form>
    </div>
  );
}
